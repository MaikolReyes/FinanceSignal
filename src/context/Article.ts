



export interface Article {
    id: string;        // Agrega un id único
    title: string;
    contenido?: RootNode[];
    cover?: string;    // Opcional, ya que no siempre puede estar presente
}