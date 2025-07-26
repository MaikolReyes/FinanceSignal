import { Link } from "react-router-dom";
import { useContext, useMemo } from "react";
import { ArticlesContext, DarkModeContext } from "../context";
import { CryptoWidget } from "./CryptoWidget";
import lightLogo from '../assets/logoFinanceSignal.png';
import darkLogo from '../assets/logoFinanceSignal-white.png';

/*
-------> Future Update

1. Add a button to change the language of the website.
import { ButtonLanguages } from "../controls";
<ButtonLanguages /> 

2. Add a button to change the theme of the website.
import { DarkMode } from "../controls";
<DarkMode /> 

3. Add a stock widget to show the latest stock prices.
import { StockWidget } from "./StockWidget";
<StockWidget />

----------------------------------------------------------
*/

export const Navbar = () => {

    const { darkMode } = useContext(DarkModeContext);

    const sharedClasses = `nav-link font-title hover:!text-gray-700 text-lg ${darkMode ? 'text-white' : 'text-black'}`;

    const { articles, language } = useContext(ArticlesContext);

    // Filtrar categorías únicas según el idioma
    const uniqueCategories = useMemo(() => {
        return Array.from(
            new Map(
                articles
                    .map(({ category }) => category)
                    .filter(category => category?.locale === language) // Filtrar por idioma actual
                    .map(category => [category.name, category]) // Evitar duplicados
            ).values()
        ).sort((a, b) => a.name.localeCompare(b.name));
    }, [articles, language]);

    return (
        <>

            <nav className="navbar navbar-expand-lg shadow-md z-10 flex justify-around text-">

                <div className="flex items-start ml-5">
                    <Link to={''}>
                        <img src={darkMode ? darkLogo : lightLogo} alt="Logo de la empresa" className="max-h-8 w-auto" loading="eager" />
                    </Link>
                </div>

                <div className="container-fluid">

                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav" >


                            {/* Aquí se debe agregar un condicional para mostrar el texto en español o en inglés */}
                            {language === 'es' ?
                                <li className="nav-item border-b-2 border-transparent hover:border-gray-600 transition duration-200">
                                    <Link to={''} className={`${sharedClasses} `}
                                        aria-current="page">
                                        Últimas noticias
                                    </Link>
                                </li> :
                                <li className="nav-item border-b-2 border-transparent hover:border-gray-600 transition duration-200">
                                    <Link to={''} className={`${sharedClasses}`}
                                        aria-current="page">
                                        Latest News
                                    </Link>
                                </li>
                            }


                            {uniqueCategories.slice().sort((a, b) => a.name.localeCompare(b.name)).map(({ id, name }) => (
                                <li className="nav-item border-b-2 border-transparent hover:border-gray-600 transition duration-200" key={id}>
                                    <Link
                                        className={`${sharedClasses} `} to={`/category/${name}`} aria-label={`Ver artículos sobre ${name}`}>{name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            <CryptoWidget />
        </>
    )
}