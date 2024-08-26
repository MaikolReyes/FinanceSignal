import { articlesPrimarys } from "./articlesPrimarys"



export const StructureArticles = () => {
    return (

        <>
            {articlesPrimarys.map((title, image, summary, date, author, link) => {
                <div className="news-article">
                    <img src={image} alt={title} className="news-article-image" />
                    <div className="news-article-content">
                        <h2 className="news-article-title">{title}</h2>
                        <p className="news-article-summary">{summary}</p>
                        <div className="news-article-meta">
                            <span className="news-article-date">{date}</span>
                            <span className="news-article-author">by {author}</span>
                        </div>
                        <a href={link} className="news-article-link">Read more</a>
                    </div>
                </div>

            })



        </>

    )
}
