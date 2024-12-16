import { query } from "./strapi";
const STRAPI_HOST = import.meta.env.VITE_STRAPI_HOST;

export function getArticlesByCategory(categoryName: string) {
    return query(`articles?filters[category][name][$eq]=${categoryName}&populate=imagen`)
        .then(res => {
            // Iteramos sobre los artículos
            return res.map((article: { id: string; title: string; publishedAt: string; contenido: string; imagen: { url: string } }) => {
                const { id, title, contenido, imagen, publishedAt } = article;

                // Aseguramos que la URL de la imagen esté definida
                const cover = `${STRAPI_HOST}${imagen.url}`;

                return { id, title, contenido, cover, publishedAt };
            });
        });
}
