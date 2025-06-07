const select = document.getElementById("rfcSelect");
const button = document.getElementById("comprarBtn");

if (select && button) {
  const opciones = {
    "580": "Para 1 RFC",
    "2610": "Hasta 5 RFC",
    "4640": "Hasta 10 RFC",
    "20300": "Hasta 50 RFC",
    "29000": "Hasta 100 RFC",
  };

  button.addEventListener("click", async () => {
    const price = select.value;
    const title = opciones[price];

    console.log({ title, price }); // Para verificar que tenga datos correctos

    try {
      const res = await fetch("/api/crear-preferencia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Error en respuesta del servidor:", text);
        alert("Error al crear la preferencia");
        return;
      }

      const data = await res.json();

      if (data.id) {
        window.location.href = `https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=${data.id}`;
      } else {
        alert("Error al crear la preferencia de pago");
        console.error(data);
      }
    } catch (error) {
      alert("Error en la comunicación con el servidor");
      console.error(error);
    }
  });
}
