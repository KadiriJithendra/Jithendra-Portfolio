import productchain from "../assets/product-chain.png";
import branding from "../assets/branding.png";
import ui from "../assets/ui.png";
import webflow from "../assets/webflow.png";
const Skills = [
  {
      id:1,
      img:productchain,
      title:"Strategy & Direction",
      description:"Developing actionable strategies to align business goals with creative solutions, and innovation."
  },
  {
      id:2,
      img:branding,
      title:"Branding & Logo",
      description:"Designing memorable logos and brand identities that effectively communicate your story."
  },
  {
      id:3,
      img:ui,
      title:"UI & UX Design",
      description:"Creating intuitive and user focused designs for seamless and engaging experiences."
  },
  {
      id:4,
      img:webflow,
      title:"Webflow Development",
      description:"Building responsive, visually appealing websites optimized for performance and usability."
  }
]

const Expertise = () => {
  return (
    <section className="py-20 px-4 md:px-20 flex flex-col gap-10">
      <div>
         <h2 className="text-3xl font-bold text-center md:text-left">My Expertise</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {Skills.map((skill) => (
          <div key={skill.id} className="bg-[#F5FCFF] p-6 rounded-md flex flex-col gap-4 hover:shadow-xl hover:shadow-[#CBC3E3] transition-all duration-300">
            <div className="bg-white w-[50px] h-[50px] rounded-md shadow-md flex items-center justify-center">
              <img width={30} height={30} src={skill.img} alt={skill.title} />
            </div>
            <h3 className="text-lg font-bold">{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}

      </div>
      
    </section>
  )
};

export default Expertise;