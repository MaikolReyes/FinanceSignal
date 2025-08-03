import { Link } from "react-router-dom";
import { useRecentArticles } from "../hooks/useRecenArticles";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const NewsDown = () => {

    const recentArticles = useRecentArticles();

    return (
        <div className="grid grid-cols-1 w-full mx-auto tablet:grid-cols-2 large-desktop:w-4/5">

            {recentArticles.slice(5, 7).map(({ id, title, cover, contenido, publishedAt,slug }) => {

                const formattedDate = new Intl.DateTimeFormat('es-ES', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(publishedAt));


                return (
                    <div key={id} className="card m-3">
                        <div className="flex flex-col tablet:flex-row h-full">
                            <div className="desktop:w-2/3 large-desktop:w-1/3">
                                <Link to={`/article/${slug}`} className="no-underline text-inherit">
                                    <img src={cover} className="object-cover rounded-sm h-48 large-desktop:h-52 w-full" alt={title} loading="lazy" />
                                </Link>
                            </div>

                            <div className="w-full large-desktop:w-4/5">
                                <div className="card-body">
                                    <Link to={`/article/${slug}`} className="no-underline text-inherit">
                                        <h5 className="truncated-title font-title text-lg large-desktop:text-xl no-underline text-inherit">{title}</h5>
                                    </Link>
                                    <div className="truncated-text text-gray-600 font-secondary text-sm desktop:text-base large-desktop:text-lg">
                                        <BlocksRenderer content={contenido} />
                                    </div>
                                    <p className="card-text"><small className="text-date">{formattedDate}</small></p>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div >


    )
}