import { query } from "./strapi";
const STRAPI_HOST = import.meta.env.VITE_STRAPI_HOST;

export function getArticles() {
    return query("articles?populate[imagen]=true&populate[category]=true")
        .then(res => {

            // Iteramos sobre los artículos
            return res.map((article: { id: string; title: string; category: { name: string }; publishedAt: string; contenido: string; imagen: { url: string } }) => {

                const { id, title, category, contenido, imagen, publishedAt } = article;

                // Aseguramos que la URL de la imagen esté definida
                const cover = `${STRAPI_HOST}${imagen.url}`;

                return { id, title, category, contenido, cover, publishedAt };
            });
        })
}