import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const DarkMode = () => {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    // Efecto para aplicar o remover la clase 'dark-mode' en el body

    return (
        <label className="toggle-switch">
            <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
            />
            <span className="slider">
                {darkMode ? (
                    <i className="fa-solid fa-sun" style={{ color: '#ffc107' }}></i>
                ) : (
                    <i className="fa-solid fa-moon mx-auto" style={{ color: 'black' }}></i>
                )}
            </span>
        </label>
    );
};
