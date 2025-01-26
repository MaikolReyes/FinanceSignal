import { Link } from "react-router-dom";
import { useContext, useMemo } from "react";
import { ArticlesContext } from "../context/ArticlesContext";
import { DolarWidget } from "./DolarWidget";
import logo from '../assets/logoFinanceSignal.png';



export const Navbar = () => {

    const sharedClasses = "nav-link text-white font-secondary";

    const articles = useContext(ArticlesContext);

    // Extraer categorías únicas utilizando useMemo para evitar recálculos innecesarios
    const uniqueCategories = useMemo(() => {
        return Array.from(
            new Map(articles.map(({ category }) => [category?.name, category])).values()
        ).sort((a, b) => a.name.localeCompare(b.name)); // Ordenar categorías por nombre
    }, [articles]); // Solo recalcular si `articles` cambia

    return (
        <>
            <Link to={''}>
                <img src={logo} alt="" className="h-40 mx-auto" />
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

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-center" >
                            <li className="nav-item">
                                <Link to={''} className={`${sharedClasses}`}
                                    aria-current="page">
                                    Últimas noticias
                                </Link>
                            </li>

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
            </nav>
            <DolarWidget />
        </>
    )
}