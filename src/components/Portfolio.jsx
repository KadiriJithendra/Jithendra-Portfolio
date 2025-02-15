import { Link } from "react-router-dom";
import chezuba from "../assets/chezuba.png";
import uiux from "../assets/uiux.png";
import graphicdesign from "../assets/graphicdesign.png";

export const portfolioCard = [
  {
      id:1,
      img:chezuba,
      title:"Chezuba",
      description:"Helped in getting many clients by designing the website and some Graphic Designs. Working in a San Francisco based company helped me in gaining a great skillset.",
      link:"https://www.chezuba.com/"
     
  },
  {
      id:2,
      img:uiux,
      title:"UI/UX Designs",
      description:"By doing these personal and client projects helped me to gain valuable insights into true web development and design. Demonstrating my ability to create intuitive user interfaces.",
      link:"/Jithendra-Portfolio/uiux-designs"
     
  },
  {
      id:3,
      img:graphicdesign,
      title:"Graphic Design",
      description:"Creating visually engaging designs that communicate ideas effectively, enhance brand identity, and leave a lasting impression. Eager to See, learn and Design.",
      link:"/Jithendra-Portfolio/graphic-designs"
  },
]

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-20 px-4 md:px-20 md:py-30 flex flex-col gap-10"
    >
      <div>
        <h2 className="text-3xl font-bold text-center md:text-left">
          My Portfolio
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioCard.map((skill) => (
          <div
            key={skill.id}
            className="bg-[#F5FCFF] p-6 rounded-md flex flex-col hover:shadow-xl hover:shadow-[#CBC3E3] transition-all duration-300"
          >
            <Link to={skill.link}>
              <img src={skill.img} alt={skill.title} />
              <br />
              <h3 className="text-lg font-bold">{skill.title}</h3>
              <p className="text-justify">{skill.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
