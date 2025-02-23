import { useEffect, useState } from "react";

export const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Efecto para aplicar o remover la clase 'dark-mode' en el body
    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <label className="toggle-switch">
            <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
            />
            <span className="slider">
                {darkMode ? (
                    <i className="fa-solid fa-moon mx-auto" style={{ color: '#fff' }}></i>
                ) : (
                    <i className="fa-solid fa-sun" style={{ color: '#ffc107' }}></i>
                )}
            </span>
        </label>
    );
};
