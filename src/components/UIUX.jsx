import { useEffect } from "react";
import Logo from "./Logo";
import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.png";
import design4 from "../assets/design4.png";
import design5 from "../assets/design5.png";

const UIUX = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const stackArea = document.querySelector(".stack-area");

    const rotateCards = () => {
      let angle = 0;
      cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
          card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `rotate(${angle}deg)`;
          angle -= 10;
          card.style.zIndex = cards.length - index;
        }
      });
    };

    rotateCards();

    const onScroll = () => {
      const distance = window.innerHeight * 0.5;
      const topVal = stackArea.getBoundingClientRect().top;
      let index = Math.floor(-1 * (topVal / distance + 1));

      cards.forEach((card, i) => {
        if (i <= index) {
          card.classList.add("away");
        } else {
          card.classList.remove("away");
        }
      });
      rotateCards();
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="stack-area px-20 w-full h-[300vh] md:h-[300vh] relative flex flex-col lg:flex-row bg-[url('/src/assets/uiuxbg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="text-white custom-class-space-grotesk pt-10 opacity-50 hover:opacity-100">
        <Logo text="← Home" />
      </div>
      <div className="right h-screen lg:flex-[60%] sticky top-0">
        <div className="card absolute top-[50%] left-[50%] w-[90%] lg:w-[600px] h-auto rounded-2xl transform -translate-x-[50%] -translate-y-[50%] transition-all ease-in-out duration-500">
          <img
            src={design1}
            alt="design1"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="card absolute top-[50%] left-[50%] w-[90%] lg:w-[600px] h-auto rounded-2xl transform -translate-x-[50%] -translate-y-[50%] transition-all ease-in-out duration-500">
          <img
            src={design2}
            alt="design2"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="card absolute top-[50%] left-[50%] w-[90%] lg:w-[600px] h-auto rounded-2xl transform -translate-x-[50%] -translate-y-[50%] transition-all ease-in-out duration-500">
          <img
            src={design3}
            alt="design3"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        <div className="card absolute top-[50%] left-[50%] w-[90%] lg:w-[600px] h-auto rounded-2xl transform -translate-x-[50%] -translate-y-[50%] transition-all ease-in-out duration-500">
          <img
            src={design5}
            alt="design5"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="card absolute top-[50%] left-[50%] w-[90%] lg:w-[600px] h-auto rounded-2xl transform -translate-x-[50%] -translate-y-[50%] transition-all ease-in-out duration-500">
          <img
            src={design4}
            alt="design4"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="mt-8 fixed bottom-20 md:bottom-10 left-24 transform -translate-x-1/2">
          <svg
            className="w-12 h-12 animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
            <path
              d="M8 12l4 4 4-4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="hidden md:pl-35 md:left h-screen md:flex-[40%] md:sticky md:top-0 md:left-0 md:flex md:items-center md:justify-center md:flex-col md:box-border">
        <div className="title text-[84px] font-poppins font-bold leading-[88px] w-[420px] text-white">
          UI/UX Designs
        </div>
        <div className="sub-title text-[14px] font-poppins w-[420px] mt-8 text-white">
          By doing these personal and client projects helped me to gain valuable
          insights into true web development and design. Demonstrating my
          ability to create intuitive user interfaces.
        </div>
      </div>
    </div>
  );
};

export default UIUX;
