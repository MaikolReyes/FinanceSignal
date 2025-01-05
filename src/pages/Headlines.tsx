import { useContext } from "react"
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { ArticlesContext } from "../context/ArticlesContext";
import { Link } from 'react-router-dom';

export const CarouselPrincipal = () => {

    const articles = useContext(ArticlesContext);

    // Filtrar y ordenar las noticias por fecha de publicación
    const recentArticles = articles
        .filter((article) => new Date(article.publishedAt) <= new Date()) // Filtra las noticias con fechas válidas y ya publicadas
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()); // Ordenar de más reciente a más antigua


    return (
        <>
            <div className="p-3 mx-auto h-full">
                <div id="carouselExampleCaptions" className="carousel slide max-w-[800px] h-full overflow-hidden rounded-md">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                        ></button>
                    </div>
                    <div className="carousel-inner m-auto">
                        {
                            recentArticles.slice(0, 4).map(({ id, title, contenido, cover }, index) => (
                                <div key={id} className={`carousel-item w-full ${index === 0 ? 'active' : ''}`}>

                                    <Link to={`/article/${id}`} className="no-underline text-inherit">
                                        <img src={cover} className="w-full h-[250px] desktop:h-[450px] large-desktop:h-[500px]" alt="Noticias Recientes" />
                                        <div className="position-absolute bottom-10 left-[10%] right-[10%] desktop:bottom-12 large-desktop:bottom-10 p-3 flex items-center text-white text-center bg-black bg-opacity-50 rounded-lg ">
                                            <div className="truncated-text-carousel text-sm desktop:text-base large-desktop:text-lg">
                                                <h5 className="text-base desktop:text-lg large-desktop:text-xl">{title}</h5>
                                                <BlocksRenderer content={contenido} />
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            ))}
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div >
        </>

    )
}


export const SidebarPrincipal = () => {

    const articles = useContext(ArticlesContext);

    // Filtrar y ordenar las noticias por fecha de publicación
    const recentArticles = articles
        .filter((article) => new Date(article.publishedAt) <= new Date()) // Filtra las noticias con fechas válidas y ya publicadas
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()); // Ordenar de más reciente a más antigua


    return (

        <div className="grid grid-cols-1 justify-start p-3 gap-3 w-full tablet:grid-cols-2 desktop:grid-cols-2 large-desktop:grid-cols-2">

            {
                recentArticles.slice(4, 6).map(({ title, cover, id }) => (
                    <>
                        <Link key={id} to={`/article/${id}`} className="w-full no-underline text-inherit">
                            <div className="card w-full">
                                <img src={cover} className="h-48 large-desktop:h-52" alt="foto" />
                                <div className="card-body">
                                    <h5 className="text-lg large-desktop:text-xl">
                                        {title}
                                    </h5>

                                </div>
                            </div>
                        </Link>

                    </>
                ))
            }

            {
                recentArticles.slice(6, 8).map(({ title, id }) => (
                    <Link to={`/article/${id}`} key={id} className="no-underline text-inherit">
                        <div className="card w-full">
                            <div className="p-2">
                                <h5 className="text-lg large-desktop:text-xl">{title}</h5>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    )
}



export const NewsDown = () => {

    const articles = useContext(ArticlesContext);

    // Filtrar y ordenar las noticias por fecha de publicación
    const recentArticles = articles
        .filter((article) => new Date(article.publishedAt) <= new Date()) // Filtra las noticias con fechas válidas y ya publicadas
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()); // Ordenar de más reciente a más antigua

    return (
        <div className="grid grid-cols-1 w-full mx-auto tablet:grid-cols-2 desktop:grid-cols-2 large-desktop:grid-cols-2 large-desktop:w-4/5">
            {recentArticles.slice(7, 15).map(({ id, title, cover, contenido, publishedAt }) => (
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
                                    <h5 className="text-lg large-desktop:text-xl no-underline text-inherit">{title}</h5>
                                </Link>
                                <div className="truncated-text text-sm desktop:text-base large-desktop:text-lg">
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


    )
}


export const NewsDownLeft = () => {

    const articles = useContext(ArticlesContext);

    // Filtrar y ordenar las noticias por fecha de publicación
    const recentArticles = articles
        .filter((article) => new Date(article.publishedAt) <= new Date()) // Filtra las noticias con fechas válidas y ya publicadas
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()); // Ordenar de más reciente a más antigua

    return (

        <div className="grid mobile:grid-cols-1 desktop:grid-cols-4 large-desktop:grid-cols-4 w-full large-desktop:w-4/5 mx-auto gap-10 p-3">
            {
                recentArticles.slice(6, 10).map(({ title, contenido, cover, id }) => (
                    <>
                        <Link to={`/article/${id}`} className="no-underline text-inherit">
                            <div key={id} className="card">
                                <img src={cover} className="desktop:h-48 large-desktop:h-52" alt="foto" />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <div className="truncated-text">
                                        <BlocksRenderer content={contenido} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </>
                ))
            }
        </div>
    )
}