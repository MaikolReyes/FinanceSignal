export interface Article {
    id: number;
    title: string;
    contenido: [];
    resumen: [];
    cover: string;
    publishedAt: number;
    category: {
        id: number;
        name: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        documentId: string;
    };
}