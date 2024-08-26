
export const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg mt-10 h-14  flex shadow-md z-10 bg-teal-500 w-full">

                <div className="container-fluid xl:h-12 lg:h-12">


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse flex justify-center" id="navbarNav">

                        <ul className="navbar-nav gap-6 m-5">
                            <li className="nav-item">
                                <a className="nav-link text-customViolet font-navbarFont 2xl:text-lg font-semibold hover:text-violet-600 xl:text-base" href="#inicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-customViolet font-navbarFont 2xl:text-lg font-semibold hover:text-violet-600 xl:text-base" href="#servicios">Finanzas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-customViolet font-navbarFont 2xl:text-lg font-semibold hover:text-violet-600 xl:text-base" href="#nosotros">Tecnologia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-customViolet font-navbarFont 2xl:text-lg font-semibold hover:text-violet-600 xl:text-base" href="#precios">Criptomonedas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-customViolet font-navbarFont 2xl:text-lg font-semibold hover:text-violet-600 xl:text-base" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
