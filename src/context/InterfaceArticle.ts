export interface Article {
    id: number;
    title: string;
    contenido: [];
    cover: string;
    category: {
        id: number;
        name: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        documentId: string;
    };
}