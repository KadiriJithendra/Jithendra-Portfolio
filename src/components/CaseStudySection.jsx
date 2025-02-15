import Carousel from "./Carousel";
import { Link } from "react-router-dom";
const CaseStudySection = () => {
  return (
    <section
      id="caseStudy"
      className="py-20 px-4 md:px-20 md:py-30 flex flex-col gap-10 bg-[#F5FCFF]"
    >
      <div>
        <h2 className="text-3xl font-bold text-center md:text-left">
          Case Study
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <Carousel />
        </div>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h3 className="text-2xl font-bold text-center md:text-left">StudentConnect</h3>
          <p className="text-justify md:text-left">
            Experience the holistic solution designed for students aiming to
            connect, learn and explore, providing an all encompassing platform
            for networking, mentorship, and resources to navigate the complex
            journey of student life.
          </p>
          <Link to="casestudy">
            <button className="cursor-pointer transition-all duration-300 border-[1.33px] border-[#5E3BEE]  px-[32px] py-[14px] rounded-md  hover:bg-[#5E3BEE] hover:text-white">
              Case Study
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
