import { useContext } from "react";
import { ArticlesContext } from "../context/ArticlesContext";

export const ButtonLanguages = () => {

    const { language, setLanguage } = useContext(ArticlesContext);

    return (
        <div className="dropdown mr-5">
            <button className="btn bg-blue-600 dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-earth-americas mr-2"></i>
                {language === 'es' ? 'Español' : 'English'}
            </button>
            <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item" href="#" onClick={() => setLanguage('es')}>
                        Español
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#" onClick={() => setLanguage('en')}>
                        English
                    </a>
                </li>
            </ul>
        </div>
    )
}
