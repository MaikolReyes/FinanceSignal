import { useContext } from "react"
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { ArticlesContext } from "../context/ArticlesContext";


export const CarouselPrincipal = () => {

    const articles = useContext(ArticlesContext);

    return (
        <>
            <div className="articlesPrincipal w-full">
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
                    </div>
                    <div className="carousel-inner">
                        {articles.map(({ id, title, contenido, cover },index) => (
                            <div key={id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={cover} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{title}</h5>
                                    <div className="truncated-text">
                                        <BlocksRenderer content={contenido || []} />
                                    </div>
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
            {
                articles.map(({ title, contenido, cover, id }) => (
                    <div key={id} className="card">
                        <img src={cover} className="card-img-top" alt="foto" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">
                                {title}
                            </h5>
                            <div className="truncated-text">
                                <BlocksRenderer content={contenido || []} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
