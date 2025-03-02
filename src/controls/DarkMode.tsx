import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const DarkMode = () => {

    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return (
        <label className="toggle-switch" htmlFor="toggle-checkbox">
            <input
                type="checkbox"
                id="toggle-checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                aria-label="Activar/desactivar modo oscuro"
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
