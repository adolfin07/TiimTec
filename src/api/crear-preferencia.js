// src/pages/api/crear-preferencia.js
export async function POST({ request }) {
    const body = await request.json();
    const { title, price } = body;

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

        const data = await response.json();
        return new Response(JSON.stringify({ id: data.id }), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Error creando la preferencia' }), {
            status: 500,
        });
    }
}
