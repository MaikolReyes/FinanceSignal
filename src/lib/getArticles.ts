import { query } from "./strapi";
const STRAPI_HOST = import.meta.env.VITE_STRAPI_HOST;

export function getArticles() {
    return query("articles?populate=imagen")
        .then(res => {

            // Iteramos sobre los artículos
            return res.map((article: { title: string; contenido: string; imagen: { url: string } }) => {
                const { title, contenido, imagen } = article;

                // Aseguramos que la URL de la imagen esté definida
                const cover = `${STRAPI_HOST}${imagen.url}`;

                return { title, contenido, cover };
            });
        })
}