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
    cover: string;
    publishedAt: number;
    locale: string;
    localizations?: Article[];
}

export interface ArticlesContextProps {
    articles: Article[];
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
}