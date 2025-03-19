import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { socialLinks } from "../lib/socialLinks";
import { useArticlesLanguage } from "../hooks/useArticlesLanguage";

export const Article = () => {

    const currentArticles = useArticlesLanguage();

    // const formattedDate = new Intl.DateTimeFormat('es-ES', {
    //     year: 'numeric',
    //     month: 'short',
    //     day: '2-digit'
    // }).format(new Date(currentArticles?.publishedAt));
    // Mostramos el artículo encontrado


    return (

        <div key={currentArticles?.id} className="flex justify-center flex-col w-full p-4 mx-auto tablet:w-2/4 large-desktop:w-1/3">

            <h5 className="card-title text-xl mt-2 font-bold font-secondary desktop:mt-5 tablet:text-3xl ">{currentArticles?.title}</h5>

            {/* <ul className="list-disc list-inside">
                    <li>Elemento 1</li>
                    <li>Elemento 2</li>
                </ul> */}

            {/* <p className="card-text text-xl p-2">
                <small className="text-body-secondary">
                    {formattedDate}
                </small>
            </p> */}

            <div className="border-t-2 border-gray-400 mt-1 my-3"></div>

            <img src={currentArticles?.cover} className="rounded-2xl shadow-lg" alt="foto" />

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
            {/* <a href={`https://www.facebook.com/sharer/sharer.php?u=http://localhost:5173/article/${currentArticles?.title}`} target="_blank">
                Compartir en Facebook
            </a> */}

            <div className="border-t-2 border-gray-400 mt-1 my-3"></div>

            <div className="card-body">
                <div className="card-text font-secondary text-base large-desktop:text-lg mb-5">
                    <BlocksRenderer content={currentArticles?.contenido ?? []}
                        blocks={{
                            paragraph: ({ children }) => <p className="mb-4">{children}</p>,
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
            </div>
        </div>
    );
};

