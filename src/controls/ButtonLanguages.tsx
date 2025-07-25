import { useState, useRef, useEffect, useContext } from 'react';
import { ArticlesContext } from '../context/ArticlesContext';

export const ButtonLanguages = () => {
    const { language, setLanguage } = useContext(ArticlesContext);
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);


    const toggleDropdown = () => setOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block mr-5" ref={ref}>
            <button
                onClick={toggleDropdown}
                className="btn bg-blue-600 text-white hover:bg-black px-4 py-2 rounded flex items-center"
            >
                <i className="fa-solid fa-earth-americas mr-2"></i>
                {language === 'es' ? 'Español' : 'English'}
                <i className="fa-solid fa-caret-down ml-2"></i>
            </button>

            {open && (
                <ul className="absolute right-0 mt-2 w-32 bg-white border rounded shadow z-10">
                    <li>
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => {
                                setLanguage('es');
                                setOpen(false);
                            }}
                        >
                            Español
                        </button>
                    </li>
                    <li>
                        <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => {
                                setLanguage('en');
                                setOpen(false);
                            }}
                        >
                            English
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );
};

