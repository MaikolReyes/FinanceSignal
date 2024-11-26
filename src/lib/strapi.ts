const STRAPI_HOST = import.meta.env.VITE_STRAPI_HOST;
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

export async function query(url: string) {
    const response = await fetch(`${STRAPI_HOST}/api/${url}`, {
        headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`
        },
    });
    const { data } = await response.json();
    return data; // Devuelve directamente el array de artículos
}
