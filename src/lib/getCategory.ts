import { query } from "./strapi";

export function getArticles() {
    return query("categories")
        .then(res => {

            // Iteramos sobre los artículos
            return res.map((article: { category: string; }) => {
                const { category } = article;

                // Aseguramos que la URL de la imagen esté definida

                return { category };
            });
        })
}