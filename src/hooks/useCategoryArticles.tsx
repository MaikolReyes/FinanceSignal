import { useContext, useMemo } from "react";
import { ArticlesContext } from "../context/ArticlesContext";
import { useParams } from "react-router-dom";

export const useCategoryArticles = () => {

    const { categoryName } = useParams<{ categoryName: string }>();

    const { articles } = useContext(ArticlesContext);

    // Filtrar y ordenar los artículos, memorizando el resultado
    const recentArticles = useMemo(() => {
        // Primero filtramos por categoría
        const filteredArticles = articles.filter(article => article.category?.name === categoryName);

        // Luego, filtramos por la fecha de publicación y ordenamos de más reciente a más antigua
        return filteredArticles
            .filter(article => new Date(article.publishedAt) <= new Date())
            .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }, [articles, categoryName]);

    return recentArticles;

}
