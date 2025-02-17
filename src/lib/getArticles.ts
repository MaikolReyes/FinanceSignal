import { query } from "./strapi";


export function getArticles() {
    return query("articles?_locale=es&pagination[limit]=100&pagination[start]=0&populate[imagen]=true&populate[category]=true")
        .then(res => {

            // Iteramos sobre los artículos
            return res.map((article: { id: string; title: string; category: { name: string }; publishedAt: number; contenido: []; className: string; resumen: string; imagen: { url: string } }) => {

                const { id, title, category, contenido, className, resumen, imagen, publishedAt } = article;

                // Aseguramos que la URL de la imagen esté definida
                const cover = `${imagen?.url}`;

                return { id, title, category, contenido, className, resumen, cover, publishedAt };
            });
        })
}