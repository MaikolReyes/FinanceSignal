import foto from "../assets/foto.jpeg";


export const SectionPrincipal = () => {



    return (
        <>
            <div className="articlesPrincipal grid grid-cols-[2fr_1fr] justify-items-center">

                <div id="carouselExample" className="carousel slide w-full mx-auto">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={foto} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={foto} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={foto} className="d-block w-100" alt="..." />
                        </div>
                    </div>


                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <div>
                    <div className="card w-72 h-10">
                        <img src={foto} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">El petróleo sube más del 3%</h5>
                            <p className="card-text">Los ataques de Israel contra el grupo terrorista Hamás en el Líbano más el corte total de producción en Libia disparan los valores del petróleo.</p>
                        </div>
                    </div>
                    <div className="card w-72 h-10">
                        <img src={foto} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mercado Libre denunció a los principales bancos de Argentina</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="card mb-3 w-96">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
