// Articles.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Article {
    _id: string;
    title: string;
    img: string;
    summary: string;
}

const Articles: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/articles'); // Ajusta la URL según tu configuración
                setArticles(response.data);
            } catch {
                setError('Error al cargar los artículos');
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) return <p>Cargando artículos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Artículos</h1>
            <ul>
                {articles.map(article => (
                    <li key={article._id}>
                        <h2>{article.title}</h2>
                        <img src={article.img} alt={article.title} />
                        <p>{article.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Articles;
