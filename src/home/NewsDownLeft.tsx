import { Link } from "react-router-dom";
import { useRecentArticles } from "../hooks/useRecenArticles";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const NewsDownLeft = () => {

    const recentArticles = useRecentArticles();


    return (
        <div className="grid grid-cols-1 mb-10 w-full mx-auto gap-10 p-3 tablet:grid-cols-4 large-desktop:w-4/5">

            {recentArticles.slice(13, 17).map(({ id, title, cover, contenido, publishedAt, slug }) => {

                const formattedDate = new Intl.DateTimeFormat('es-ES', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(publishedAt));

                return (

                    <div key={id}>
                        <Link to={`/article/${slug}`} className="no-underline text-inherit">
                            <div className="card w-full">
                                <img src={cover} className="object-cover rounded-sm w-full aspect-[16/9]"   // Definir relación de aspecto
                                    alt={title}
                                    loading="eager" />
                                <div className="card-body">
                                    <h2 className="truncated-title font-title text-base large-desktop:text-xl">{title}</h2>
                                    <div className="truncated-text font-secondary text-sm desktop:text-base large-desktop:text-lg">
                                        <BlocksRenderer content={contenido} />
                                    </div>
                                    <p className="card-text"><small className="text-date">{formattedDate}</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}

        </div >
    )
}