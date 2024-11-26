import { useEffect, useState } from "react"
import { getArticles } from "../lib/getArticles"
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const LatestNews = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()
            .then((res) => {
                console.log(res)
                setArticles(res)
            })
    }, [])


    return (
        <div className="w-2/5  gap-3 mt-0">
            {articles.map(({ title, contenido, cover }, index) => (
                <div key={index} className="card">
                    <img src={cover} className="card-img-top" alt="foto" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">
                            {title}
                        </h5>
                        <p className="truncated-text"><BlocksRenderer content={contenido} /></p>
                    </div>
                </div>
            ))}
        </div>
    )
}
