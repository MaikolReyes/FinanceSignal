import { createContext } from 'react';
import { Article } from './Article';


export const ArticlesContext = createContext<Article[]>([]);

// type ArticlesProviderProps = {
//     children: ReactNode;
// };

// export const ArticlesProvider = ({ children }: ArticlesProviderProps) => {
//     const [articles, setArticles] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         getArticles()
//             .then((res) => {
//                 setArticles(res);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setError(err);
//                 setLoading(false);
//             });
//     }, []);

//     return (
//         <ArticlesContext.Provider value={{ articles, loading, error }}>
//             {children}
//         </ArticlesContext.Provider>
//     );
// };

// export const useArticlesContext = () => useContext(ArticlesContext);
