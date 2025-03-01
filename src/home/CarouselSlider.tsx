import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useRecentArticles } from "../hooks/useRecenArticles";
import { Link } from 'react-router-dom';

export const CarouselSlider = () => {

    const recentArticles = useRecentArticles();

    return (

        <div className="p-3 mx-auto">
            <div id="carouselExampleCaptions" className="carousel slide max-w-[800px] h-full overflow-hidden rounded-md">
                <div className="carousel-inner m-auto">
                    {
                        recentArticles.slice(0, 4).map(({ id, title, contenido, cover }, index) => (
                            <div key={id} className={`carousel-item w-full ${index === 0 ? 'active' : ''}`}>

                                <Link to={`/article/${title}`} className="no-underline text-inherit position-relative">

                                    <img src={cover} loading="lazy" className="object-fit-cover w-full h-[250px] desktop:h-[450px] large-desktop:h-[500px]" alt="Noticias Recientes" />
                                    <div className="position-absolute bottom-4 left-[15%] right-[15%] tablet:bottom-8 tablet:left-[10%] tablet:right-[10%] p-3 flex flex-col items-center text-white text-center bg-black bg-opacity-50 rounded-lg ">
                                        <h5 className="font-title text-base desktop:text-lg large-desktop:text-xl">{title}</h5>
                                        <div className="truncated-text text-sm desktop:text-base large-desktop:text-lg text-gray-300">
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
                        className="carousel-control-prev-icon "
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
                        className="carousel-control-next-icon "
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div >

    )
}

