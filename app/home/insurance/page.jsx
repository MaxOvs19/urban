import Link from "next/link";

import Footer from "@/components/footer/Footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import AppBanner from "@/components/home-page/home-1/AppBanner";
import Banner from "@/components/home-page/home-1/Banner";
import Block from "@/components/home-page/home-1/Block";
import Blog from "@/components/home-page/home-1/Blog";
import ContactForm from "@/components/home-page/home-1/ContactForm";
import FeatureBlock from "@/components/home-page/home-3/FeatureBlock";
import Hero from "@/components/home-page/home-3/Hero";
import IntroAbout from "@/components/home-page/home-1/IntroAbout";
import Service from "@/components/home-page/home-1/Service";
import Testimonial from "@/components/home-page/home-1/Testimonial";
import WhyChoose from "@/components/home-page/home-1/WhyChoose";
import HowToStartBlock from "@/components/home-page/home-3/HowToStartBlock";
import Image from "next/image";
import ProductTabs from "@/components/home-page/home-6/ProductTabs";
import Partner from "@/components/home-page/home-2/Partner";
import CallToActions from "@/components/home-page/home-5/CallToActions";

export const metadata = {
  title: "Urban Format",
};

const Insurance = () => {
  return (
    <>
      <DefaulHeader />
      <Hero />
      <HowToStartBlock />

      <div className="fancy-feature-fiftySix pt-80 lg-pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="title-style-seven text-center text-lg-start"
                data-aos="fade-right"
              >
                <h2 className="main-title fw-bold tx-dark">
                  Легко и просто отслеживайте
                  <span className="position-relative d-inline-block">
                    эффективность
                    <Image
                      width={269}
                      height={122}
                      src="/images/shape/shape_96.svg"
                      alt="shape"
                    />
                  </span>
                </h2>
              </div>
            </div>

            <div className="col-xl-5 col-lg-6 ms-auto" data-aos="fade-left">
              <p className="m0 fs-20 lh-lg text-center text-lg-start md-pt-20">
                В объявлениях можно разместить QR-код c UTM меткой, промо-код,
                или номер телефона с настроенным колл-трекингом. Это позволит
                легко и быстро анализировать метрики эффективности вашей
                рекламной кампании.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fancy-feature-twentyFour p-30 mt-80 lg-mt-80">
        <div
          className="bg-wrapper pt-100 lg-pt-80 pb-110 lg-pb-70"
          style={{ background: "#F1FCFF" }}
        >
          <div className="container">
            <div className="block-style-four">
              <div className="row align-items-center">
                <div
                  className="col-xl-8 col-lg-6 order-lg-last"
                  data-aos="fade-left"
                >
                  <div className="title-style-eight">
                    <h2 className="main-title tx-dark fw-bold">
                      Преимущества{" "}
                      <span className="d-inline-block position-relative">
                        формата:
                      </span>
                    </h2>
                  </div>
                  <p className="fs-20 lh-lg mt-25 mb-10 lg-mt-20 lg-mb-30 ">
                    <span className="text-decoration-underline  fw-bold tx-dark">
                      Фактор доверия{" "}
                    </span>
                    потребителя более высок к наружной рекламе, в отличии от
                    digital формата
                  </p>
                  <p className="fs-20 lh-lg mt-25 mb-10  lg-mt-20 lg-mb-30">
                    <span className="text-decoration-underline  fw-bold tx-dark">
                      Круглосуточный показ{" "}
                    </span>
                    рекламы вне зависимости от качества интернета, многократное
                    воздействие на 1 рекламный контакт
                  </p>

                  <p className="fs-20 lh-lg mt-25 mb-10  lg-mt-20 lg-mb-30">
                    <span className="text-decoration-underline  fw-bold tx-dark">
                      Большие охваты{" "}
                    </span>
                    и дешевые лиды, ввиду отсутствия аукциона за клик
                  </p>
                  <p className="fs-20 lh-lg mt-25 mb-10 lg-mt-20 lg-mb-30">
                    <span className="text-decoration-underline fw-bold tx-dark">
                      Живой формат{" "}
                    </span>
                    наружной рекламы которую видят люди, без ad-блоков и явления
                    “баннерной слепоты”.
                  </p>
                </div>
                <div
                  className="col-xl-4 col-lg-6 col-md-8 m-auto order-lg-first"
                  data-aos="fade-right"
                >
                  <div className="illustration-holder md-mt-60">
                    <Image
                      width={660}
                      height={561}
                      style={{ objectFit: "contain" }}
                      src="/images/assets/ils_06.png"
                      alt="illustration"
                      className="lazy-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /.block-style-four */}
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
      </div>

      <div className="fancy-feature-forty mt-140 lg-mt-100 font-inter">
        <div className="container">
          <div
            className="title-style-one text-right mb-85 lg-mb-30"
            data-aos="fade-up"
          >
            <div className="title-style-eight ">
              <h2 className="main-title tx-dark fw-bold">
                Преимущества{" "}
                <span className="d-inline-block position-relative">
                  Городского Формата:
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="fancy-feature-thirtyNine position-relative zn2 pt-90 pb-50 lg-pt-50 lg-pb-10 font-inter">
        <div className="container">
          <div className="row gx-xxl-5">
            <FeatureBlock />
          </div>
        </div>
        <img
          src="/images/shape/shape_148.svg"
          alt="shape"
          className="shapes shape-one lazy-img"
        />
        <img
          src="/images/shape/shape_149.svg"
          alt="shape"
          className="shapes shape-two lazy-img"
        />
        <img
          src="/images/shape/shape_150.svg"
          alt="shape"
          className="shapes shape-three lazy-img"
        />
        <img
          src="/images/shape/shape_151.svg"
          alt="shape"
          className="shapes shape-four lazy-img"
        />
      </div>

      <div className="fancy-feature-four pt-150 lg-pt-120">
        <div className="container">
          <div className="row">
            <div
              // className="col-xxl-7 col-md-8 m-auto text-right"
              className="mb-100 text-right"
              data-aos="fade-up"
            >
              <div className="title-style-two">
                <h2 className="main-title fw-bold tx-dark">
                  Другие важные факторы влияющие на{" "}
                  <span className="d-inline-block position-relative">
                    успех
                  </span>{" "}
                  <br />
                  вашей рекламной кампании:
                </h2>
              </div>
            </div>
          </div>

          <ProductTabs />
        </div>
      </div>

      <div className="col-xl-9 m-auto" data-aos="fade-up">
        <div
          className="title-style-seven text-center lg-pb-50  mt-90 mb-50"
          data-aos="fade-up"
        >
          <h2 className="main-title fw-bold tx-dark">
            Компании которые нам{" "}
            <span className="position-relative d-inline-block">
              доверяют <img src="/images/shape/shape_99.svg" alt="" />
            </span>
          </h2>
        </div>
      </div>
      <div className="partner-section-four position-relative pt-100 sm-pt-70">
        <div className="wrapper m-auto">
          <div className="partner_slider_one row">
            <Partner />
          </div>
        </div>
      </div>

      <div className="fancy-short-banner-fifteen pt-150 lg-pt-80 pb-30 position-relative zn2 mt-200 lg-mt-100">
        <CallToActions />
      </div>

      {/* <div className="fancy-feature-thirtyFour mt-50">
        <div className="container">
          <div className="row gx-xxl-5">
            <Feature />
          </div>
        </div>
      
      </div> */}
      {/* <!-- /.fancy-feature-thirtyFour --> */}
      {/*
			=====================================================
				Feature Section Thirty Five
			=====================================================
			*/}
      {/* <div className="fancy-feature-thirtyFive mt-90 md-mt-70">
        <div className="container" data-aos="fade-up">
          <Banner />
         
        </div>
  

        <div className="bg-wrapper mt-150 pt-100 lg-mt-80 lg-pt-70">
          <div className="container">
            <IntroAbout />
          </div>
        </div>
        
      </div> */}
      {/* /.fancy-feature-thirtyFive */}
      {/* 
			=============================================
				Feature Section Thirty Six
			============================================== 
			*/}
      {/* <div className="fancy-feature-thirtySix mt-190 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">
                    Discover all our Services.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Service />
            </div>
            

            <div className="text-center md-mt-50">
              <Link
                href="/pages-menu/service-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                View all Services
              </Link>
            </div>
          </div>
        </div>
     
      </div> */}

      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      {/* <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 ms-auto order-lg-last"
              data-aos="fade-left"
            >
              <div className="ps-lg-5 ms-xxl-3">
                <div className="title-style-one mb-40">
                  <div className="sc-title text-uppercase">Why Choose Us</div>
                  <h2 className="main-title fw-500 tx-dark m0">
                    What makes us the best.
                  </h2>
                </div>
                <WhyChoose />
              </div>
            </div>

            <div className="col-xxl-5 col-lg-6 order-lg-first">
              <Block />
            </div>
          </div>
        </div>
      </div> */}

      {/*=====================================================
				Feedback Section Eleven
			=====================================================
			*/}
      {/* <div
        className="feedback-section-eleven position-relative mt-200 pt-100 pb-70 lg-mt-120 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 className="main-title fw-500 tx-dark m0">Client Feedback</h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="feedback_slider_seven">
            <Testimonial />
          </div>
        </div>
      </div> */}

      {/* =============================================
				Feature Section Thirty Eight
			============================================== 
			*/}

      {/* <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
        <div className="container">
          <AppBanner />
        </div>
      </div> */}

      {/*=====================================================
				Fancy Short Banner Thirteen
			=====================================================
			*/}
      {/* <div
        className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper zn2 bg-white position-relative">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 ms-auto order-lg-last">
                    <div className="text-wrapper">
                      <img
                        src="/images/icon/icon_114.svg"
                        alt="icon"
                        className="lazy-img mb-30"
                      />
                      <div className="title-style-one">
                        <h2 className="main-title fw-500 tx-dark m0">
                          Let’s talk with expereince advisors.
                        </h2>
                      </div>
                      <p className="fs-20 tx-dark pt-20 m0">
                        eiusmod tempor incididunt. Ut enim mim veniam, quis
                        nostrud elit lorem dolor.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 order-lg-first">
                    <div className="form-style-two md-mb-40">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shapes shape-text fw-500 fs-20 tx-dark text-center">
              Fill the <br />
              form
            </div>
            <img
              src="/images/shape/shape_90.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
            <img
              src="/images/shape/shape_91.svg"
              alt="shape"
              className="lazy-img shapes shape-two"
            />
          </div>
        </div>
      </div> */}

      {/* =============================================
		   Blog Section Three
		   ============================================== */}
      {/* <div className="blog-section-three mt-140 mb-170 lg-mt-100 lg-mb-100">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-end">
              <div className="col-sm-8">
                <div
                  className="title-style-one text-center text-sm-start pb-40 lg-pb-20"
                  data-aos="fade-right"
                >
                  <h2 className="main-title fw-500 tx-dark m0">Our Blog</h2>
                </div>
              </div>
            </div>

            <div className="row gx-xxl-5">
              <Blog />
            </div>

            <div className="text-center xs-mt-40">
              <Link
                href="/blog/blog-v2"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                Go to Blog
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/logo_02.png" alt="logo" width={95} />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                  Best Insurance Company.
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
                  jano inc.
                </p>
              </div>
              <Footer />
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        <img
          src="/images/assets/ils_13.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/images/assets/ils_14.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
    </>
  );
};

export default Insurance;
