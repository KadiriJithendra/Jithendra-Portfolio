import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
  };

  return (
    <Slider {...settings}>
        <div className="px-20 md:px-38">
          <img
            width={300}
            height={300}
            src={phone1}
            alt="phone1"
          />
        </div>
        <div className="px-20 md:px-38">
          <img
            width={300}
            height={300}
            src={phone2}
            alt="phone1"
          />
        </div>
        <div className="px-20 md:px-38">
          <img
            width={300}
            height={300}
            src={phone3}
            alt="phone1"
          />
        </div>
    </Slider>
  );
};

export default Carousel;
