import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticlesContext } from "../context";

export const useArticlesLanguage = () => {

    const { title } = useParams();
    const { articles, language } = useContext(ArticlesContext);
    const navigate = useNavigate();

    // Buscar el artículo actual por título
    const currentArticle = articles?.find((article) => article.title === title);

    const localizations = currentArticle?.localizations;

    // Si deseas acceder a la primera localización
    const firstLocalization = localizations?.[0];

    // Buscar la versión traducida según el idioma
    const translatedArticle = firstLocalization?.locale === language ? firstLocalization : currentArticle;

    // Navegar a la versión traducida si es necesario
    useEffect(() => {
        if (translatedArticle && translatedArticle.title !== title) {
            navigate(`/article/${encodeURIComponent(translatedArticle.title)}`, { replace: true });
        }
    }, [translatedArticle, title, navigate]);

    return currentArticle;
};

