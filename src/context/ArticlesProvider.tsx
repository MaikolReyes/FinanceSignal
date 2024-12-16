import { useEffect, useState, ReactNode } from "react";
import { getArticles } from "../lib";
import { ArticlesContext } from "./ArticlesContext";
import { Article } from './InterfaceArticle';

type ArticlesProviderProps = {
    children: ReactNode;
};

export const ArticlesProvider = ({ children }: ArticlesProviderProps) => {

    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        getArticles()
            .then((res) => {
                setArticles(res)
            })
    }, [])


    return (
        <ArticlesContext.Provider value={articles}>
            {children}
        </ArticlesContext.Provider>
    )
}
