import { Link } from "react-router-dom";
import { useContext, useMemo } from "react";
import { ArticlesContext } from "../context/ArticlesContext";
import { TickerList } from "./CryptoWidget";
import { DarkMode } from "./DarkMode";
import { DarkModeContext } from "../context/DarkModeContext";
import lightLogo from '../assets/logoFinanceSignal.png';
import darkLogo from '../assets/logoFinanceSignal-white.png';
import { ButtonLanguages } from "./ButtonLanguages";



export const Navbar = () => {

    const { darkMode } = useContext(DarkModeContext);

    const sharedClasses = "nav-link text-white font-secondary";

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
            <Link to={''}>
                <img src={darkMode ? darkLogo : lightLogo} alt="" className="h-40 mx-auto" />
            </Link>

            <nav className="navbar navbar-expand-lg shadow-md z-10 bg-blue-600">

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

                    <div className="collapse navbar-collapse mx-auto" id="navbarNav">
                        <ul className="navbar-nav text-center" >

                            {/* Aquí se debe agregar un condicional para mostrar el texto en español o en inglés */}
                            {language === 'es' ?
                                <li className="nav-item">
                                    <Link to={''} className={`${sharedClasses}`}
                                        aria-current="page">
                                        Últimas noticias
                                    </Link>
                                </li> :
                                <li className="nav-item">
                                    <Link to={''} className={`${sharedClasses}`}
                                        aria-current="page">
                                        Latest News
                                    </Link>
                                </li>
                            }


                            {uniqueCategories.sort().map(({ id, name }) => (
                                <li className="nav-item " key={id}>
                                    <Link className={`${sharedClasses}`}
                                        to={`/category/${name}`}
                                        aria-label={`Ver artículos sobre ${name}`}>
                                        {name}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>

                <div className="d-flex position-absolute  right-0 p-3">
                    <ButtonLanguages />
                    <DarkMode />
                </div>
            </nav>

            <TickerList />

        </>
    )
}