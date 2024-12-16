import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ArticlesContext } from "../context/ArticlesContext";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";


export const CategoryPage = () => {

    const { categoryName } = useParams<{ categoryName: string }>();


    const articles = useContext(ArticlesContext);

    // Filtrar artículos por categoría con validación
    const filteredArticles = articles.filter((article) => {
        return article.category?.name === categoryName;
    });


    return (
        <div className="grid grid-cols-4 w-4/5 mx-auto gap-10 p-5">
            {filteredArticles.length > 0 ? (
                filteredArticles.map(({ id, title, cover, contenido }) => (
                    <div key={id} className="card">
                        <Link to={`/article/${id}`}>
                            <img src={cover} className="card-img-top h-56" alt="foto" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <div className="truncated-text">
                                    <BlocksRenderer content={contenido} />
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No hay artículos en esta categoría.</p>
            )}
        </div>
    );
};