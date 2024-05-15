import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-banner-twelve pt-225 pb-120 lg-pb-80 md-pt-200 ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-wrapper" data-aos="fade-right">
              <h1 className="hero-heading fw-500 tx-dark">
                Рекламные стенды в Ленинградской области
              </h1>
              <p className="text-lg tx-dark mb-30 pt-35 lg-pt-20 lg-mb-20">
                Широкий охват с максимально точным попаданием в вашу ЦА. Оцените
                эффективность и надежность проверенного формата рекламы.
              </p>
              <div className="d-lg-flex align-items-center">
                <a
                  href="#"
                  className="btn-twentyFour fw-500 position-relative d-inline-flex align-items-center me-5 mt-30"
                >
                  <span>Оставить заявку</span>
                  <img
                    src="/images/icon/icon_123.svg"
                    alt="icon"
                    className="ms-3"
                  />
                </a>
                <div className="btn-eighteen position-relative d-inline-block tx-dark mt-15 md-mt-20">
                  <a href="#" className="fw-500 tran3s">
                    Скачать презентацию
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End col-6 */}

          <div
            className="col-xxl-6 col-xl-5 col-md-6 ms-auto text-end"
            data-aos="fade-left"
          >
            <div className="image-holder zn2 d-inline-block position-relative sm-mt-60">
              <img
                src="/images/assets/bg-12.png"
                alt="img"
                className="lazy-img"
              />
              <div className="media-img">
                <Image
                  width={490}
                  height={542}
                  layout="responsive"
                  src="/images/media/img_58.jpg"
                  alt="img"
                  className="lazy-img"
                />
              </div>

              <div
                className="card-style card-one d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <h4>300+</h4>
                <p>Стендов</p>
              </div>
              {/* /.card-one */}

              <div
                className="card-style card-two d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h4>1 млн+</h4>
                <p>Ваших потенциальных клиентов</p>
              </div>
              {/* /.card-one */}

              <div
                className="card-style card-three d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <h4>30+</h4>
                <p>Вариаций для рекламной стратегии</p>
              </div>
              {/* /.card-one */}

              <img
                src="/images/shape/shape_146.svg"
                alt="shape"
                className="shapes shape-one lazy-img"
              />
              <img
                src="/images/shape/shape_147.svg"
                alt="shape"
                className="shapes shape-two lazy-img"
              />
            </div>
          </div>
          {/* End col-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default Hero;
