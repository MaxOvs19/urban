import Link from "next/link";

const featuresData = [
  {
    icon: "/images/icon/icon_124.svg",
    title: "Отличное расположение",
    subtitle:
      "рекламные расположены близко и на уровне глаз. Находятся в самых проходимых местах массивов: КПП, администрация, остановки транспорта, магазины. Просматриваются живым пешеходным трафиком.",
  },
  {
    icon: "/images/icon/icon_125.svg",
    title: "Качественная печать",
    subtitle:
      "На прочных, погодоустойчивых материалах. Максимальное качество - 1 440 dpi. Оперативно реализуем старт рекламной кампании через 3 дня от начала договоренности.",
  },
  {
    icon: "/images/icon/icon_126.svg",
    title: "Внимание гарантировано",
    subtitle:
      "На стендах также размещается важная информация от администрации жилого массива.",
  },
  {
    icon: "/images/icon/icon_124.svg",
    title: "Разработаем дизайн",
    subtitle:
      "а также рекламные месседжи для ваших будущих ярких и привлекательных баннеров.",
  },
  {
    icon: "/images/icon/icon_125.svg",
    title: "Контроль и фотоотчеты ",
    subtitle: "каждого баннера на каждом рекламном стенде, еженедельно.",
  },
  {
    icon: "/images/icon/icon_126.svg",
    title: "Большой сегмент ",
    subtitle:
      "платежеспособной аудитории. Более 1 млн. рекламных контактов с жителями коттеджных поселков и отдыхающими загородных домов.",
  },
];

const FeatureBlock = () => {
  return (
    <>
      {featuresData.map((feature, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="card-style-seventeen d-flex mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center mt-40">
              <img src={feature.icon} alt="icon" className="lazy-img" />
            </div>
            <div className="ps-4 text-wrapper">
              <h4 className="text-white m0">{feature.title}</h4>
              <p className="m0">{feature.subtitle}</p>
            </div>
          </div>
          {/* /.card-style-seventeen */}
        </div>
      ))}

      <div className="d-flex justify-content-center">
        <Link
          href="/pages-menu/about-us-v2"
          className="btn-twentyFive fw-500 tran3s"
        >
          Давайте сотрудничать
        </Link>
      </div>
    </>
  );
};

export default FeatureBlock;
