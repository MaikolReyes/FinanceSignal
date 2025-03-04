import { useContext, useEffect, useMemo } from "react";
import { ArticlesContext } from "../context/ArticlesContext";
import { useNavigate, useParams } from "react-router-dom";

export const useCategoryArticles = () => {

    const { categoryName } = useParams<{ categoryName: string }>();

    const { articles, language } = useContext(ArticlesContext);

    const navigate = useNavigate();

    // Buscar la categoría en el idioma actual
    const translatedCategory = useMemo(() => {
        const category = articles
            .map(article => article.category)
            .find(category => category?.locale === language);
        return category;
    }, [articles, language]);

    // Actualizar la URL cuando cambia el idioma
    useEffect(() => {
        if (translatedCategory && translatedCategory.name !== categoryName) {
            navigate(`/category/${translatedCategory.name}`);
        }
    }, [translatedCategory, categoryName, navigate]);

    // Filtrar y ordenar los artículos, memorizando el resultado
    const recentArticles = useMemo(() => {
        // Filtrar por categoría
        const filteredArticles = articles.filter(article => article.category?.name === categoryName);

        // Filtrar por fecha y ordenar
        return filteredArticles
            .filter(article => new Date(article.publishedAt) <= new Date())
            .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    }, [articles, categoryName]);

    return recentArticles;
};



