import Link from "next/link";

const tabData = [
  {
    id: "sp1",
    title: "Качество таргетинга",
    subtitle: "Гарантированно",
    image: "/images/media/img_06.jpg",
  },
  {
    id: "sp2",
    title: "Качество объявления",
    subtitle: "Гарантированно",
    image: "/images/media/img_05.jpg",
  },
  {
    id: "sp3",
    title: "Быстрые сроки реализации",
    subtitle: "Гарантированно",
    image: "/images/media/img_06.1.jpg",
  },
];

const ProductTabs = () => {
  return (
    <>
      <ul
        className="nav nav-tabs d-block d-md-flex justify-content-between"
        data-aos="fade-up"
        role="tablist"
      >
        {tabData.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${tab.id === "sp1" ? "active" : ""}`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.id}`}
              type="button"
              role="tab"
            >
              {tab.title}
              <span className="d-none d-lg-inline-block text-decoration-underline fw-500">
                {tab.subtitle}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-center mt-100">
        <Link href="#contacts" className="btn-twentyFive fw-500 tran3s">
          Давайте сотрудничать
        </Link>
      </div>
      {/* <div
        className="tab-content position-relative mt-120 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <img
          src="/images/shape/shape_33.svg"
          alt="media"
          className="lazy-img shapes shape-three"
        />
        <img
          src="/images/shape/shape_34.svg"
          alt="media"
          className="lazy-img shapes shape-four"
        />
        {tabData.map((tab) => (
          <div
            className={`tab-pane ${tab.id === "sp1" ? "active show" : ""}`}
            id={tab.id}
            key={tab.id}
          >
            <img
              src={tab.image}
              alt="media"
              className="lazy-img main-screen w-100"
            />
          </div>
        ))}
      </div> */}
    </>
  );
};

export default ProductTabs;
