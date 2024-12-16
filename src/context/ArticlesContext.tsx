import { createContext } from 'react';
import { Article } from './InterfaceArticle';


export const ArticlesContext = createContext<Article[]>([]);
