import { Link } from "react-router-dom";
import { useRecentArticles } from "../hooks/useRecenArticles";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const NewsDownLeft = () => {

    const recentArticles = useRecentArticles();


    return (
        <div className="grid grid-cols-1 tablet:grid-cols-4 w-full large-desktop:w-4/5 mx-auto gap-10 p-3 large-desktop:mt-3 large-desktop:mb-10">

            {recentArticles.slice(24, 32).map(({ id, title, cover, contenido, publishedAt }) => {

                const formattedDate = new Intl.DateTimeFormat('es-ES', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(publishedAt));

                return (

                    <div key={id}>
                        <Link to={`/article/${title}`} className="no-underline text-inherit">
                            <div className="card w-full">
                                <img src={cover} className="object-fit-cover rounded-sm h-48 large-desktop:h-52 w-full" alt="foto" />
                                <div className="card-body">
                                    <h5 className="font-title text-base large-desktop:text-xl">{title}</h5>
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