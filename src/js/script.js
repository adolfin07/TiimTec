const select = document.getElementById("rfcSelect");
const button = document.querySelector("button");

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

    const res = await fetch("/api/crear-preferencia", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, price }),
    });

    const data = await res.json();

    if (data.id) {
        // Redirige al Checkout de Mercado Pago
        window.location.href = `https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=${data.id}`;
    } else {
        alert("Error al crear la preferencia de pago");
        console.error(data);
    }
});
