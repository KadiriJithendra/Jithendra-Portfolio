import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user from "../assets/user.png";
import arjun from "../assets/arjun.png";
import priya from "../assets/priya.png";
import ahmed from "../assets/ahmed.png";

const CaseStudyUserJourneys = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    buttons: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,

  };
  return (
    <div className=" py-20 px-4 md:px-40 bg-[#DDEBFF]">
      <h2 className="text-2xl custom-class-space-grotesk font-bold">
        Meet the Users: <br /> Personas, Task Flows, Journeys
      </h2>
      <br />
    
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-40">

        <div>
          <p className="text-justify font-[Rubik]">
            In preparation for wireframing, I delved deep into the realms where
            our users are mostactive - be it academic forums, social media
            educational groups, or student blogs.
          </p>
          <br />
          <p className="text-justify font-[Rubik]">
            By engaging directly with our audience, I fostered a genuine
            connection, allowing us to fully understand their hopes, challenges,
            and everyday interactions. This empathetic approach not only
            enriched our research but aso enabled us to craft detailed
            personasthat truly reflect the aspirations and needs of every
            student. These personas, in turn,informed the creation of task flows
            and user journeys, setting a solid foundation for thedesign phase.
          </p>
          <br />
          <p className="text-justify font-[Rubik]">
            In the way, I gained deep insights that helped me to create, or
            rather uncover, my <strong>personas for StudentConnect.</strong>
          </p>
        </div>
        <div>
          <img width={400} height={400} src={user} alt="user" />
        </div>
        
      </div>
      <br />
      <br />
      <p className="text-center custom-class-space-grotesk">
        The insights I gathered during my research helped me develop 3 personas:
      </p>
      <br />
      <div className="md:flex md:justify-between">
        <p className="font-[Rubik] font-light">Arjun - The Ambitious Tech Enthusiast</p>
        <p className="font-[Rubik] font-light">Priya - The Aspiring Biotech Researcher</p>
        <p className="font-[Rubik] font-light">Ahmed - The Innovative Engineer</p>
      </div>
      <br />
      <br />
      <div className="slider-container">
        <Slider {...settings}>
          <div className="md:px-30">
            <img
              src={arjun}
              alt="phone1"
            />
          </div>
          <div className="md:px-30">
            <img
              
              src={priya}
              alt="phone1"
            />
          </div>
          <div className="md:px-30">
            <img
             
              src={ahmed}
              alt="phone1"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};




export default CaseStudyUserJourneys;
