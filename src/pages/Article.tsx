import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import { useArticlesLanguage } from "../hooks/useArticlesLanguage";
import { socialLinks } from "../lib/socialLinks";
import { Helmet } from "react-helmet-async";
import { NewsRelations } from '../components/NewsRelations';
import { DarkModeContext } from '../context';
import { useContext } from 'react';

export const Article = () => {

    const { darkMode } = useContext(DarkModeContext);

    // Context
    const currentArticles = useArticlesLanguage();

    const { publishedAt } = currentArticles || {};
    const formattedDate = publishedAt
        ? new Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(new Date(publishedAt))
        : 'Fecha no disponible';

    // Article content and metadata
    const content: BlocksContent = currentArticles?.contenido ?? [];
    const contentResumen: BlocksContent = currentArticles?.resumen ?? [];
    const id = currentArticles?.id || '';
    const imagen = currentArticles?.cover || '';
    const title = currentArticles?.title || 'Artículo sin título';
    const url = currentArticles?.slug || '';
    const author = currentArticles?.author.name || 'Autor no disponible';

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:image" content={imagen} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:image" content={imagen} />
            </Helmet>


            <div key={id} className="flex flex-col justify-center w-full p-2 mx-auto tablet:w-2/4 large-desktop:w-2/6 mt-4">

                <h1 className="card-title text-xl mt-2 font-bold font-secondary desktop:mt-5 tablet:text-3xl">{title}</h1>
                <hr className={`border-t-2 my-2 ${darkMode ? 'border-white' : 'border-gray-800'} `} />
                <h3 className="font-secondary">Publicado el: <small className="font-semibold text-base font-secondary">{formattedDate}</small></h3>
                <hr className={`border-t-2 my-2 ${darkMode ? 'border-white' : 'border-gray-800'} `} />

                <img src={imagen} className="rounded-2xl shadow-lg w-full mx-auto" alt="foto" />

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

                <hr className={`border-t-2 my-2 ${darkMode ? 'border-white' : 'border-gray-800'} `} />
                <h6 className="font-secondary">Escrito por: <small className="font-semibold text-base">{author}</small></h6>
                <hr className={`border-t-2 my-2 ${darkMode ? 'border-white' : 'border-gray-800'} `} />
            </div>

            <div className="w-full mx-auto tablet:w-2/4 large-desktop:w-2/6">
                <div className={`bg-gray-100 rounded p-3 border border-gray-300 shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
                    <BlocksRenderer content={contentResumen}
                        blocks={{
                            paragraph: ({ children }) => <p className="font-secondary">{children}</p>,
                            list: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
                            'list-item': ({ children }) => <li className='font-secondary'>{children}</li>
                        }}
                    />
                </div>

                <div className='mt-4'>
                    <BlocksRenderer content={content}
                        blocks={{
                            paragraph: ({ children }) => (
                                <p className="mb-2 font-secondary">{children}</p>),
                            heading: ({ children, level }) => {
                                const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
                                const sizeMap: Record<number, string> = {
                                    1: 'text-3xl', 2: 'text-2xl', 3: 'text-xl', 4: 'text-lg', 5: 'text-base', 6: 'text-sm',
                                };
                                return (
                                    <HeadingTag
                                        className={`${sizeMap[level] || 'text-base'} font-bold mb-4 font-secondary`}
                                    >
                                        {children}
                                    </HeadingTag>
                                );
                            },
                            image: ({ image }) => (
                                <div className="my-4 flex justify-center">
                                    <img
                                        src={image.url}
                                        alt={image.alternativeText || 'Imagen'}
                                        className="rounded-lg shadow-md max-w-full"
                                        style={{ maxWidth: '100%', height: 'auto' }}  // Aquí puedes agregar más estilos
                                    />
                                </div>
                            ),
                        }}
                    />
                </div>
                <hr className={`border-t-2 my-2 ${darkMode ? 'border-white' : 'border-gray-800'} `} />
            </div>

            <NewsRelations />
        </>
    );
};

