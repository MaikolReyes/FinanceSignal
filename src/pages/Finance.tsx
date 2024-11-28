import { useEffect, useState } from "react"
import { getArticles } from "../lib/getArticles"
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const Finance = () => {
    const [articlesFinance, setArticlesFinance] = useState([]);

    useEffect(() => {
        getArticles()
            .then((res) => {
                console.log(res)
                setArticlesFinance(res)
            })
    }, [])

    return (
        <div className=" grid grid-cols-2 gap-3 mt-0 w-2/3">
            {articlesFinance.map(({ title, contenido, cover, category }, index) => (
                category === "Finanzas" ? (
                    <div key={index} className="card">
                        <img src={cover} className="card-img-top" alt="foto" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">
                                {title}
                            </h5>
                            <p className="truncated-text"><BlocksRenderer content={contenido} /></p>
                        </div>
                    </div>
                ) : null
            ))}
        </div>
    );
}
