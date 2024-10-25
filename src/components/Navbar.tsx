import { Link } from "react-router-dom";


export const Navbar = () => {

    const menuItems = [
        { href: "/", label: "Ultimas Noticias" },
        { href: "/finances", label: "Finanzas" },
        { href: "/technology", label: "Tecnología" },
        { href: "/cryptocurrencies", label: "Criptomonedas" },
    ]

    const sharedClasses = "nav-link text-white font-navbarFont 2xl:text-lg font-semibold hover:text-violet-600 xl:text-base";

    return (
        <>
            <nav className="navbar navbar-expand-lg h-14  flex shadow-md z-10 bg-blue-600 w-full">

                <div className="container-fluid xl:h-12 lg:h-12">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse flex justify-center" id="navbarNav">
                        <ul className="navbar-nav gap-6 m-5">
                            {menuItems.map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className={sharedClasses} to={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}