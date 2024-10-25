import foto from "../assets/foto.jpeg";

export const LatestNews = () => {
  return (
    <>
      <div className="grid grid-cols-2 p-3 justify-items-center">
        <div className="articlesPrincipal w-full">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={foto} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={foto} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={foto} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="w-4/5 max-h-72 grid grid-cols-2 gap-3 mt-0">
          <div className="">
            <img src={foto} className="card-img-top" alt="foto" />
            <div className="card-body">
              <h5 className="card-title mb-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </h5>
            </div>
          </div>

          <div className="">
            <img src={foto} className="card-img-top" alt="foto" />
            <div className="card-body">
              <h5 className="card-title mb-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </h5>
            </div>
          </div>

          <div className="mt-2">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <h5 className="card-title">Card title</h5>
            </div>
          </div>

          <div className="mt-2">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex gap-5 p-3">
        <div className="">
          <img src={foto} className="card-img-top" alt="foto" />
          <div className="card-body">
            <h5 className="card-title mb-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </h5>
          </div>
        </div>
        <div className="">
          <img src={foto} className="card-img-top" alt="foto" />
          <div className="card-body">
            <h5 className="card-title mb-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </h5>
          </div>
        </div>
        <div className="">
          <img src={foto} className="card-img-top" alt="foto" />
          <div className="card-body">
            <h5 className="card-title mb-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </h5>
          </div>
        </div>
        <div className="">
          <img src={foto} className="card-img-top" alt="foto" />
          <div className="card-body">
            <h5 className="card-title mb-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </h5>
          </div>
        </div>
        <div className="">
          <img src={foto} className="card-img-top" alt="foto" />
          <div className="card-body">
            <h5 className="card-title mb-0">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </h5>
          </div>
        </div>
      </div>

      <div className="w-2/4 p-3">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={foto} className="img-fluid rounded-start" alt="foto" />
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Noticia 1</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={foto} className="img-fluid rounded-start" alt="foto" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Noticia 2</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={foto} className="img-fluid rounded-start" alt="foto" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Noticia 2</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={foto} className="img-fluid rounded-start" alt="foto" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Noticia 2</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
