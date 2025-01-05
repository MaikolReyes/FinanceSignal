import logo from '../assets/logoFinanceSignal.png';

export const Footer = () => {
    return (
        <>


            <img src={logo} alt="Logo de la empresa Zulia" className='logoFooter mx-auto' />

            <div className='containerFooter p-5 bg-blue-500' data-aos="fade-up">

                <div className='containerIconRedes flex justify-center text-white'>
                    <a href='https://www.facebook.com/profile.php?id=61550461065145' target='_blank' aria-label='Ingresar a facebook' className='icon-redes text-white'>
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href='https://www.instagram.com/zuliamarketingdigital/' target='_blank' aria-label='Ingresar a Instagram' className='icon-redes text-white'>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href='https://www.linkedin.com/company/zulia-marketing-digital/?viewAsMember=true' target='_blank' aria-label='Ingresar a Linkedin' className='icon-redes text-white'>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
                <p className='textCopyright text-center text-white mt-5 mb-0'>© 2024 Copyright Zulia Marketing Digital</p>

            </div >


        </>
    );
};
