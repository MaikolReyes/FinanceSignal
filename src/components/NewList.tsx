import { useEffect, useState } from 'react';

// Tipos para los artículos de noticias
interface Article {
    id: string;
    webTitle: string;
    webUrl: string;
    apiUrl: string
    fields?: {
        headline: string;
        trailText: string;
        thumbnail: string;
    };
}

// Tipos para las props del componente
interface NewsListProps {
    category: string;
}

const NewsList: React.FC<NewsListProps> = ({ category }) => {
    const [news, setNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        // Función para cargar noticias según la categoría
        const fetchNews = async () => {
            setLoading(true);
            try {
                const apiKey = 'f26afde7-47fc-4b88-88f2-a9f9dacc3e1d';
                const response = await fetch(`https://content.guardianapis.com/search?section=${category}&api-key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Error al cargar las noticias');
                }
                const data = await response.json();
                if (data.response.results) {
                    setNews(data.response.results);
                } else {
                    throw new Error('Formato inesperado de los datos');
                }
            } catch (err: unknown) {
                // Verificamos si el error es una instancia de Error
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Ocurrió un error desconocido');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category]);



    if (loading) return <div>Cargando noticias...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {news.length > 0 ? (
                news.map((article) => (
                    <div key={article.id}>
                        <h2>{article.webTitle}</h2>
                        <p>{article.apiUrl}</p>
                        <a href={article.webUrl} target="_blank" rel="noopener noreferrer">
                            Leer más
                        </a>
                    </div>
                ))
            ) : (
                <p>No hay noticias disponibles.</p>
            )}
        </div>
    );
};

export default NewsList;