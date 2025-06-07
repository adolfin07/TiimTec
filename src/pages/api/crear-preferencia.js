export const prerender = false;

export async function POST({ request }) {
    console.log("Petición POST recibida");

    let body;
    try {
        body = await request.json();
        console.log("Body recibido:", body);
    } catch (error) {
        console.error("Error parseando JSON:", error);
        return new Response(JSON.stringify({ error: "Request body inválido o vacío" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const { title, price } = body;

    if (!title || !price) {
        return new Response(
            JSON.stringify({ error: "Faltan parámetros title o price" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    try {
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${import.meta.env.MP_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: [
                    {
                        title,
                        quantity: 1,
                        unit_price: Number(price),
                        currency_id: 'MXN',
                    },
                ],
                back_urls: {
                    success: 'https://tiim-tec-adolfin07s-projects.vercel.app/postpago',
                    failure: 'https://tiim-tec-adolfin07s-projects.vercel.app/error',
                    pending: 'https://tiim-tec-adolfin07s-projects.vercel.app/postpago',
                },
                auto_return: 'approved',
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error desde MercadoPago:", errorText);  // Ver aquí el error real
            return new Response(
                JSON.stringify({ error: "Error al crear preferencia en MercadoPago", detalle: errorText }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }

        const data = await response.json();

        return new Response(JSON.stringify({ id: data.id }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error creando preferencia:", error);
        return new Response(
            JSON.stringify({ error: 'Error creando la preferencia' }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

console.log("Token MercadoPago:", import.meta.env.MP_ACCESS_TOKEN);

