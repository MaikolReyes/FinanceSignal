import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useRecentArticles } from "../hooks/useRecenArticles";
import { Link } from 'react-router-dom';

export const CarouselSlider = () => {

    const recentArticles = useRecentArticles();

    return (

        <div className="p-3 mx-auto w-full h-full aspect-[12/9] tablet:aspect-[3/2] desktop:aspect-[5/3] large-desktop:aspect-[3/2]">

            <div id="carouselExampleCaptions" className="carousel slide max-w-[800px] overflow-hidden rounded-md h-full">
                <div className="carousel-inner m-auto h-full">

                    {
                        recentArticles.slice(0).map(({ id, title, contenido, cover, slug }, index) => (
                            <div key={id} className={`carousel-item w-full h-full ${index === 0 ? 'active' : ''}`}>
                                <Link to={`/article/${slug}`} className="no-underline text-inherit position-relative h-full">
                                    <img src={cover}
                                        loading="lazy" className="object-cover w-full h-full"
                                        width="1200" height="675"
                                        alt={title} />

                                    <div className="absolute bottom-0 tablet:mb-8 tablet:left-[10%] tablet:right-[10%] p-3 flex flex-col items-center text-white text-center bg-black/70 rounded-md tablet:rounded-lg">
                                        <h5 className="font-title text-base desktop:text-lg large-desktop:text-xl">{title}</h5>
                                        <div className="truncated-text text-sm desktop:text-base large-desktop:text-lg text-gray-300">
                                            <BlocksRenderer content={contenido} />
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        ))}
                </div>


            </div >
        </div >

    )
}

