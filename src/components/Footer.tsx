import { Link } from 'react-router-dom';
import { socialLinks } from '../lib/socialLinks';
import darkLogo from '../assets/logoFinanceSignal-white.png';

export const Footer = () => {


    return (


        <footer className="flex items-center flex-col justify-around large-desktop:p-2 bg-dark min-h-[200px]" >

            <Link to={'/'}>
                <img src={darkLogo}
                    alt="Logo"
                    width={32}   // o el valor real en px
                    height={32}
                    className="max-h-8 w-auto"
                    loading="lazy" />
            </Link>

            <div className='flex items-center gap-5'>
                {
                    socialLinks.map(({ href, label, src }) => (
                        <a key={label} href={href} target='_blank'
                            rel="noopener noreferrer" aria-label={`Ingresar a ${label}`}
                            className='icon-redes text-white'>
                            <img src={src} className='w-6' alt={label} />
                        </a>
                    ))
                }
            </div>


            <span className='font-secondary mobile:text-base text-lg text-center text-white'>
                © 2025 Copyright FinanceSignal
            </span>

            <div className='flex items-center gap-5'>

                <Link to="/sobre-nosotros" className="text-blue-400 hover:underline">
                    Sobre Nosotros
                </Link>

                <Link to="/contacto" className="text-blue-400 hover:underline">
                    Contacto
                </Link>

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
