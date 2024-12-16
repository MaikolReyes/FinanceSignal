import { useContext } from "react"
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { ArticlesContext } from "../context/ArticlesContext";
import { Link } from 'react-router-dom';

export const CarouselPrincipal = () => {
    const articles = useContext(ArticlesContext);

    return (
        <>
            <div className="p-3 mx-0">
                <div id="carouselExampleCaptions" className="carousel slide">
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
                        {articles.slice(0, 4).map(({ id, title, contenido, cover }, index) => (
                            <div key={id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <Link to={`/article/${id}`}><img src={cover} className="d-block " alt="..." /> </Link>
                                <div className="carousel-caption d-none d-md-block">
                                    <Link to={`/article/${id}`}>
                                        <h5>{title}</h5>
                                        <div className="truncated-text">
                                            <BlocksRenderer content={contenido} />
                                        </div>
                                    </Link>
                                </div>
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

    return (
        <>

            <div className="grid grid-cols-2 p-3 w-full gap-4">

                {
                    articles.slice(0, 2).map(({ title, cover, id }) => (
                        <>
                            <Link to={`/article/${id}`}>
                                <div key={id} className="card">
                                    <img src={cover} className="card-img-top" alt="foto" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0 list-none">
                                            {title}
                                        </h5>
                                    </div>
                                </div>

                            </Link>
                        </>
                    ))
                }

                {
                    articles.slice(0, 2).map(({ title, id }) => (
                        <Link to={`/article/${id}`}>
                            <div className="mt-2" key={id}>
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </>
    )
}



export const NewsDown = () => {

    const articles = useContext(ArticlesContext);

    return (
        <div className="grid grid-cols-2 w-4/5 mx-auto">
            {articles.map(({ id, title, cover, contenido }) => (
                <div key={id} className="card m-3">

                    <div className="flex">
                        <div className="col-md-4">
                            <Link to={`/article/${id}`}>
                                <img src={cover} className="img-fluid rounded-start h-full" alt="foto" />
                            </Link>
                        </div>

                        <div className="col-md-8">
                            <div className="card-body">
                                <Link to={`/article/${id}`}>
                                    <h5 className="card-title">{title}</h5>
                                </Link>
                                <div className="truncated-text">
                                    <BlocksRenderer content={contenido} />
                                </div>
                                <p className="card-text">
                                    <small className="text-body-secondary">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            ))
            }
        </div>


    )
}


export const NewsDownLeft = () => {

    const articles = useContext(ArticlesContext);

    return (

        <div className="grid grid-cols-4 w-4/5 mx-auto gap-10 p-5">
            {
                articles.map(({ title, cover, id }) => (
                    <>
                        <Link to={`/article/${id}`}>
                            <div key={id} className="card">
                                <img src={cover} className="card-img-top h-56" alt="foto" />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {title}
                                    </h5>
                                </div>
                            </div>
                        </Link>
                    </>
                ))
            }
        </div>
    )
}