import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "./Logo";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  return (
    <nav className="flex flex-wrap justify-between items-center sticky top-0 px-8 md:px-20 py-6 bg-white opacity-95 drop-shadow-md z-50">
      <Logo text="Jithendra" />
      <div className="block md:hidden">
        <button onClick={() => openMenu(!menu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          menu ? "block" : "hidden"
        } md:hidden w-full mt-4 md:mt-0 ease-linear`}
      >
        <ul className="flex flex-col items-center gap-1">
          <li className="cursor-pointer">
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="text-black hover:text-[#5E3BEE] inline-block py-1 px-3"
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="portfolio"
              smooth={true}
              duration={800}
              className="text-black hover:text-[#5E3BEE] inline-block py-1 px-3"
            >
              Portfolio
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="caseStudy"
              smooth={true}
              duration={800}
              className="text-black hover:text-[#5E3BEE] inline-block py-1 px-3"
            >
              Case Study
            </Link>
          </li>
          <li>
            <a
              href="src/assets/Smd_Amaan_Resume.pdf"
              download="Smd_Amaan_Resume.pdf"
            >
              Resume
            </a>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={800} offset={-50}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:block">
        <ul className="flex items-center gap-6">
          <li className="cursor-pointer">
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="text-black hover:text-[#5E3BEE] inline-block py-1 px-3"
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="portfolio"
              smooth={true}
              duration={800}
              className="text-black hover:text-[#5E3BEE] inline-block py-1 px-3"
            >
              Portfolio
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="caseStudy"
              smooth={true}
              duration={800}
              className="text-black hover:text-[#5E3BEE] inline-block py-1 px-3"
            >
              Case Study
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1y6L_yMD6lUCX7iD64LmWzLDobex6XGds/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <Link to="contact" smooth={true} duration={800} offset={-50}>
          <button className="cursor-pointer transition-all duration-300 border-[1.33px] border-[#5E3BEE]  px-[32px] py-[14px] rounded-md  hover:bg-[#5E3BEE] hover:text-white">
            Contact Me
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
