import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';

export const Finance = () => {

    const articles = useContext(ArticlesContext);

    return (
        <div className=" grid grid-cols-2 gap-3 mt-0 w-2/3">

            {
                articles.map(({ title, contenido, cover, id }) => (
                    <div key={id} className="card">
                        <img src={cover} className="card-img-top" alt="foto" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">
                                {title}
                            </h5>
                            <p className="truncated-text"><BlocksRenderer content={contenido} /></p>
                        </div>
                    </div>
                ))}
        </div>
    );
}
