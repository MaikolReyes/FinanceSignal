import { Link } from 'react-router-dom';
import logo from '../assets/logoFinanceSignal-white.png';
import { socialLinks } from '../lib/socialLinks';

export const Footer = () => {
    return (


        <footer className="flex items-center flex-col justify-around large-desktop:p-4 bg-dark min-h-[300px]" >

            <img src={logo} alt="Logo de financeSignal" className='aspect-[3/2] mx-auto w-52' loading='lazy' />

            <div className='flex items-center gap-5'>
                {
                    socialLinks.map(({ href, label, icon }) => (
                        <a key={label} href={href} target='_blank'
                            rel="noopener noreferrer" aria-label={`Ingresar a ${label}`}
                            className='icon-redes text-white'>
                            <i className={`fa-brands ${icon}`}></i>
                        </a>
                    ))
                }
            </div>



            <span className='font-secondary mobile:text-base text-lg text-center text-white mt-5'>
                © 2025 Copyright FinanceSignal
            </span>

            <div className='flex items-center gap-5'>

                <Link to="/politica-de-privacidad" className="text-blue-400 hover:underline">
                    Política de Privacidad
                </Link>

                <Link to="/aviso-legal" className="text-blue-400 hover:underline">
                    Aviso Legal
                </Link>
            </div>

        </footer >

    );
};
