import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Link } from 'react-router-dom';
import { useRecentArticles } from "../hooks/useRecenArticles";

export const SidebarPrincipal = () => {

    const recentArticles = useRecentArticles();

    return (

        <div className="grid grid-cols-1 justify-start p-3 gap-3 w-full tablet:grid-cols-2 desktop:grid-cols-2 large-desktop:grid-cols-2">

            {
                recentArticles.slice(4, 6).map(({ title, cover, id }) => (
                    <div key={id}>
                        <Link to={`/article/${title}`} className="w-full no-underline text-inherit">
                            <div className="card w-full">
                                <img src={cover} className="object-fit-cover h-48 large-desktop:h-52 w-full rounded-start" alt="foto" />
                                <div className="card-body">
                                    <h5 className="font-title text-lg large-desktop:text-xl">
                                        {title}
                                    </h5>

                                </div>
                            </div>
                        </Link>

                    </div>
                ))
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



export const NewsDown = () => {

    const recentArticles = useRecentArticles();

    return (
        <div className="grid grid-cols-1 w-full mx-auto tablet:grid-cols-2 desktop:grid-cols-2 large-desktop:grid-cols-2 large-desktop:w-4/5">
            {recentArticles.slice(8, 14).map(({ id, title, cover, contenido, publishedAt }) => {

                const formattedDate = new Intl.DateTimeFormat('es-ES', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(publishedAt));


                return (
                    <div key={id} className="card m-3 max-h-[200px]">
                        <div className="mobile:flex desktop:flex large-desktop:flex h-full">
                            <div className="desktop:w-2/3 large-desktop:w-1/3">
                                <Link to={`/article/${title}`} className="no-underline text-inherit">
                                    <img src={cover} className="object-fit-cover rounded-start h-full w-full" alt="foto" />
                                </Link>
                            </div>

                            <div className="w-full large-desktop:w-4/5">
                                <div className="card-body">
                                    <Link to={`/article/${title}`} className="no-underline text-inherit">
                                        <h5 className="font-title text-lg large-desktop:text-xl no-underline text-inherit">{title}</h5>
                                    </Link>
                                    <div className="truncated-text text-gray-600 font-secondary text-sm desktop:text-base large-desktop:text-lg">
                                        <BlocksRenderer content={contenido} />
                                    </div>
                                    <p className="card-text">
                                        <small className="text-body-secondary">{formattedDate}</small>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div >


    )
}


export const NewsDownLeft = () => {

    const recentArticles = useRecentArticles();

    return (

        <div className="grid grid-cols-1 tablet:grid-cols-4 w-full large-desktop:w-4/5 mx-auto gap-10 p-3 large-desktop:mt-3 large-desktop:mb-10">
            {
                recentArticles.slice(14, 18).map(({ title, contenido, cover, id }) => (
                    <div key={id}>
                        <Link to={`/article/${title}`} className="no-underline text-inherit">
                            <div className="card w-full">
                                <img src={cover} className="object-fit-cover rounded-sm h-48 large-desktop:h-52 w-full" alt="foto" />
                                <div className="card-body">
                                    <h5 className="font-title text-lg large-desktop:text-xl">{title}</h5>
                                    <div className="truncated-text font-secondary text-sm desktop:text-base large-desktop:text-lg">
                                        <BlocksRenderer content={contenido} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div >
    )
}