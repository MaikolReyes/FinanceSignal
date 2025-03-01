import { Link } from "react-router-dom";
import { useRecentArticles } from "../hooks/useRecenArticles";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const Sidebar = () => {

    const recentArticles = useRecentArticles();

    return (

        <div className="grid grid-cols-1 justify-start p-3 gap-3 w-full tablet:grid-cols-2">

            {recentArticles.slice(4, 6).map(({ title, cover, id, contenido, publishedAt }) => {

                const formattedDate = new Intl.DateTimeFormat('es-ES', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(publishedAt));

                return (

                    <div key={id}>
                        <Link to={`/article/${title}`} className="w-full no-underline text-inherit">
                            <div className="card w-full">
                                <img src={cover} className="object-fit-cover h-48 large-desktop:h-52 w-full rounded-start" alt="foto" />
                                <div className="card-body">
                                    <h5 className="font-title text-lg large-desktop:text-xl">
                                        {title}
                                    </h5>
                                    <div className="truncated-text text-gray-600 font-secondary text-sm desktop:text-base large-desktop:text-lg">
                                        <BlocksRenderer content={contenido} />
                                    </div>
                                    <p className="card-text"><small className="text-date">{formattedDate}</small></p>
                                </div>
                            </div>
                        </Link>

                    </div>
                )
            })
            }

            {
                recentArticles.slice(6, 8).map(({ title, id }) => (
                    <Link to={`/article/${title}`} key={id} className="no-underline text-inherit">
                        <div className="card w-full">
                            <div className="p-2">
                                <h5 className="font-title text-lg large-desktop:text-xl">{title}</h5>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    )
}