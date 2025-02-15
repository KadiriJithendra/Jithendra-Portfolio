import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import display1 from "../assets/display1.png";
import display2 from "../assets/display2.png";
import display3 from "../assets/display3.png";
import display4 from "../assets/display4.png";
import display5 from "../assets/display5.png";
import display6 from "../assets/display6.png";

const CaseStudyImageGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="flex justify-center items-center px-20 md:px-4">
        <img width={300} height={300} src={display1} alt="display1" />
      </div>
      <div className="flex justify-center items-center px-20 md:px-4">
        <img width={300} height={300} src={display2} alt="display2" />
      </div>
      <div className="flex justify-center items-center px-20 md:px-4">
        <img width={300} height={300} src={display3} alt="display3" />
      </div>
      <div className="flex justify-center items-center px-20 md:px-4">
        <img width={300} height={300} src={display4} alt="display4" />
      </div>
      <div className="flex justify-center items-center px-20 md:px-4">
        <img width={300} height={300} src={display5} alt="display5" />
      </div>
      <div className="flex justify-center items-center px-20 md:px-4">
        <img width={300} height={300} src={display6} alt="display6" />
      </div>
    </Slider>
  );
};

export default CaseStudyImageGallery;
