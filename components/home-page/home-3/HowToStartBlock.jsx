import Link from "next/link";
import React from "react";

const HowToStartBlock = () => {
  return (
    <div className="fancy-feature-fortyThree bg-black position-relative pt-130 pb-65 lg-pt-80">
      <div className="container">
        <div className="row ">
          <div
            className="col-xl-5 col-md-6 ms-auto order-md-last"
            data-aos="fade-right"
          >
            <div className="title-style-one mb-30">
              <h2 className="main-title fw-500 text-white m0">
                Не просто размещаем баннер,
              </h2>
            </div>
            <p className="fs-20 text-white opacity-75 mb-50 md-mb-30">
              а подходим к проведению вашей рекламной кампании с учетом
              персонального анализа конкурентов, целевой аудитории,
              местоположения и специфики ваших услуг.
            </p>
            <Link
              href="/pages-menu/about-us-v2"
              className="btn-twentyFive fw-500 tran3s"
            >
              Давайте сотрудничать <i className="bi bi-arrow-right ms-2" />
            </Link>
          </div>
          {/* End .col */}

          <div className="col-md-6 order-md-first" data-aos="fade-left">
            <img
              src="/images/media/img_67.png"
              alt="media"
              className="lazy-img sm-mt-40"
            />
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default HowToStartBlock;
