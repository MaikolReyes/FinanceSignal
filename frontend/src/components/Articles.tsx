import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Article {
    _id: string;
    title: string;
    content: string;
}

const Articles: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/articles');
                setArticles(response.data);
            } catch (error) {
                console.error("Error fetching articles", error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div>
            {articles.map(article => (
                <div key={article._id}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Articles;

