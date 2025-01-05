import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ArticlesContext } from "../context/ArticlesContext";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";


export const CategoryContent = () => {

    const { categoryName } = useParams<{ categoryName: string }>();


    const articles = useContext(ArticlesContext);

    // Filtrar artículos por categoría con validación
    const filteredArticles = articles.filter((article) => {
        return article.category?.name === categoryName;
    });

    // Dividir artículos en dos grupos
    const firstFourArticles = filteredArticles.slice(0, 4);
    const remainingArticles = filteredArticles.slice(4, 10);

    return (
        <>
            <div className="grid grid-cols-2 w-4/5 mx-auto p-2">
                {
                    remainingArticles.map(({ id, title, cover, contenido, publishedAt }) => (
                        <div key={id} className="card m-3">

                            <div className="flex h-48">
                                <div className="w-1/3">
                                    <Link to={`/article/${id}`} className="no-underline text-inherit">
                                        <img src={cover} className=" w-full h-full rounded-start" alt="foto" />
                                    </Link>
                                </div>

                                <div className="w-4/5">
                                    <div className="card-body">
                                        <Link to={`/article/${id}`} className="w-full no-underline text-inherit">
                                            <h5 className="card-title">{title}</h5>
                                        </Link>
                                        <div className="truncated-text">
                                            <BlocksRenderer content={contenido} />
                                        </div>
                                        <p className="card-text">
                                            <small className="text-body-secondary">
                                                {new Intl.DateTimeFormat('es-ES', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: '2-digit'
                                                }).format(new Date(publishedAt))}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div >
            <div className="grid grid-cols-4 w-4/5 mx-auto gap-10 p-4">

                {
                    firstFourArticles.map(({ id, title, cover, contenido }) => (
                        <div key={id} className="card">
                            <Link to={`/article/${id}`} className="w-full no-underline text-inherit">
                                <img src={cover} className="card-img-top h-56" alt="foto" />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <div className="truncated-text">
                                        <BlocksRenderer content={contenido} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    );
};