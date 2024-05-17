"use client";
import Link from "next/link";

const CallToActions = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container" id="contacts">
      <div className="wrapper">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="title fw-500 text-white mb-20">Свяжитесь с нами.</h2>
            <p className="text-lg text-white m0">
              И получите бесплатно расчет и консультацию
              {/* <Link href="/contact" className="text-decoration-underline">
                Contact us.
              </Link> */}
            </p>
          </div>
          {/* End .col-lg-6 */}

          <div className="col-lg-6" data-aos="fade-left">
            <div className="form-bg md-mt-40 ms-lg-4">
              <form onSubmit={handleSubmit}>
                <div className="d-sm-flex justify-content-between gap-3">
                  <input
                    type="email"
                    placeholder="Ваш контактный номер"
                    required
                  />
                  <button className="text-uppercase text-white">
                    Отправить
                  </button>
                </div>
                <div className="fs-14 tx-dark opacity-75 mt-15">
                  Мы свяжемся с вами как можно скорее
                </div>
              </form>
            </div>
            {/* /.form-bg */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActions;
