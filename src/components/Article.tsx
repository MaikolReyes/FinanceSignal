import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "../context/ArticlesContext";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { socialLinks } from "../lib/socialLinks";

export const Article = () => {
    // Obtenemos el `id` de los parámetros de la URL
    const { title } = useParams<{ title: string }>();

    // Obtenemos todos los artículos desde el contexto
    const { articles } = useContext(ArticlesContext);

    if (!articles || articles.length === 0) {
        return <p className="text-center">Cargando artículo...</p>;
    }
    // Filtramos el artículo que coincide con el `id`
    const article = articles.find((article) => article.title === title);

    // Si no se encuentra el artículo, mostramos un mensaje
    if (!article) {
        return <p className="text-center">El artículo no existe o no se ha encontrado.</p>;
    }

    // Mostramos el artículo encontrado
    return (
        <>
            <div key={article.id} className="flex justify-center flex-col w-full p-4 mx-auto desktop:w-2/4 large-desktop:w-1/3 large-desktop:p-0">

                <h5 className="card-title text-xl font-bold font-secondary desktop:mt-5 desktop:text-2xl large-desktop:mt-5 large-desktop:text-4xl">{article.title}</h5>

                {/* <ul className="list-disc list-inside">
                    <li>Elemento 1</li>
                    <li>Elemento 2</li>
                </ul> */}

                <p className="card-text text-xl p-2">
                    <small className="text-body-secondary">
                        {new Intl.DateTimeFormat('es-ES', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(article.publishedAt))}
                    </small>
                </p>

                <div className="border-t-2 border-gray-400 mt-1 my-3"></div>

                <img src={article.cover} className="rounded-2xl shadow-lg" alt="foto" />

                <div className='flex items-start flex-col justify-around' data-aos="fade-up">
                    <div className='flex items-center gap-3 p-1'>
                        {
                            socialLinks.map(({ href, label, icon }) => (
                                <a key={label} href={href} target='_blank'
                                    rel="noopener noreferrer" aria-label={`Ingresar a ${label}`}
                                    className='icon-redes'>
                                    <i className={`fa-brands ${icon} text-2xl hover:text-blue-500`}></i>
                                </a>
                            ))
                        }
                    </div>
                </div>

                <div className="border-t-2 border-gray-400 mt-1 my-3"></div>

                <div className="card-body">
                    <div className="card-text font-secondary text-sm desktop:text-base large-desktop:text-lg mb-5">
                        <BlocksRenderer content={article.contenido} />
                    </div>
                </div>
            </div>

        </>
    );
};

