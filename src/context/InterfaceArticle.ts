export interface Category {
    id: number;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    documentId: string;
    locale: string;
}

export interface Article {
    id: string;
    title: string;
    category: Category;
    contenido: [];
    className: string;
    resumen: string;
    cover: string;
    publishedAt: number;
}

export interface ArticlesContextProps {
    articles: Article[];
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
}