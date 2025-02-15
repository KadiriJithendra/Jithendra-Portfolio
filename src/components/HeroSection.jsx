import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import profile from "../assets/profile.png";
const HeroSection = () => {
  return (
    <section className="py-15 px-4 md:px-20 md:py-20 bg-[#F5FCFF]">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg font-bold">Hey, I am Jithendra</p>
            <h1 className="text-5xl font-bold tracking-wide mt-4">
              I create{" "}
              <span className="text-[#5E3BEE] inline">
                <Typewriter
                  options={{
                    strings: ["product design"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>{" "}
              and Brand Experience
            </h1>
            <p className="mt-4">
              Let’s design experiences that are not just functional but also
              inspiring. Experiences that live, breathe, and make a difference.
            </p>
            <Link to="contact" smooth={true} duration={800} offset={-50}>
              <button className="transition-all duration-300 bg-[#5E3BEE] border-[1.33px] text-white rounded-md px-[32px] py-[14px] mt-4 hover:bg-white hover:border-[#5E3BEE] hover:border-[1.33px] hover:text-black">
                Get In Touch
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              className="w-auto h-auto"
              src={profile}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
