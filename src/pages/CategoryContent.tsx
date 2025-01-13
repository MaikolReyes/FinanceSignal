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
                {remainingArticles.map(({ id, title, cover, contenido, publishedAt }) => (
                    <div key={id} className="card m-3">

                        <div className="mobile:flex desktop:flex large-desktop:flex h-full">
                            <div className="desktop:w-2/3 large-desktop:w-1/3">
                                <Link to={`/article/${id}`} className="no-underline text-inherit">
                                    <img src={cover} className="h-full object-cover rounded-start" alt="foto" />
                                </Link>
                            </div>

                            <div className="w-full large-desktop:w-4/5">
                                <div className="card-body">
                                    <Link to={`/article/${id}`} className="no-underline text-inherit">
                                        <h5 className="font-title text-lg large-desktop:text-xl no-underline text-inherit">{title}</h5>
                                    </Link>
                                    <div className="truncated-text font-secondary text-sm desktop:text-base large-desktop:text-lg">
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
                        <div key={id}>
                            <Link to={`/article/${id}`} className="no-underline text-inherit">
                                <div className="card w-full">
                                    <img src={cover} className="object-cover rounded-sm h-48 large-desktop:h-52" alt="foto" />
                                    <div className="card-body">
                                        <h5 className="font-title text-lg large-desktop:text-xl">{title}</h5>
                                        <div className="truncated-text font-secondary text-sm desktop:text-base large-desktop:text-lg">
                                            <BlocksRenderer content={contenido} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    );
};