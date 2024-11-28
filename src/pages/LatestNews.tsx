import { useContext } from "react"
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { ArticlesContext } from "../context/ArticlesContext";
import { CarouselPrincipal } from "./Headlines";



export const LatestNews = () => {

    const articles = useContext(ArticlesContext);

    return (
        <>
            <div className="grid grid-cols-2 p-3 justify-items-center">

                <CarouselPrincipal />

                <div className=" grid grid-cols-2 gap-3 mt-0 w-2/3">

                    {articles.map(({ title, contenido, cover }, index) => (
                        <div key={index} className="card">
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
                    ))}
                </div>
            </div>
        </>
    )
}
