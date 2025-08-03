import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';
import { CategoriesContext } from '../context/CategoriesContext';

export const useLanguageNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { articles, setLanguage: setArticlesLanguage } = useContext(ArticlesContext);
    const { categories, setLanguage: setCategoriesLanguage } = useContext(CategoriesContext);

    const changeLanguage = (newLanguage: string) => {
        // Actualizar los contextos
        setArticlesLanguage(newLanguage);
        setCategoriesLanguage(newLanguage);

        // Obtener la ruta actual
        const currentPath = location.pathname;

        // Si estamos en una página de artículo específico
        if (currentPath.startsWith('/article/')) {
            const currentSlug = currentPath.replace('/article/', '');

            // Buscar el artículo actual por slug
            const currentArticle = articles.find(article =>
                article.slug === currentSlug ||
                article.localizations?.some(loc => loc.slug === currentSlug)
            );

            if (currentArticle) {
                // Si el artículo ya está en el idioma deseado
                if (currentArticle.locale === newLanguage) {
                    navigate(`/article/${currentArticle.slug}`);
                } else {
                    // Buscar la localización en el idioma deseado
                    const localization = currentArticle.localizations?.find(loc => loc.locale === newLanguage);
                    if (localization) {
                        navigate(`/article/${localization.slug}`);
                    } else {
                        // Si no hay localización, ir al home
                        navigate('/');
                    }
                }
            }
        }
        // Si estamos en una página de categoría
        else if (currentPath.startsWith('/category/')) {
            const currentCategoryName = decodeURIComponent(currentPath.replace('/category/', ''));

            // Buscar la categoría actual por nombre
            const currentCategory = categories.find(category =>
                category.name === currentCategoryName ||
                category.localizations?.some(loc => loc.name === currentCategoryName)
            );

            if (currentCategory) {
                // Si la categoría ya está en el idioma deseado
                if (currentCategory.locale === newLanguage) {
                    navigate(`/category/${encodeURIComponent(currentCategory.name)}`);
                } else {
                    // Buscar la localización en el idioma deseado
                    const localization = currentCategory.localizations?.find(loc => loc.locale === newLanguage);
                    if (localization) {
                        navigate(`/category/${encodeURIComponent(localization.name)}`);
                    } else {
                        // Si no hay localización, ir al home
                        navigate('/');
                    }
                }
            }
        }
        // Para otras rutas (home, etc.), mantener la misma ruta
        else {
            // No necesitamos navegar, solo cambiar el idioma
        }
    };

    return { changeLanguage };
};