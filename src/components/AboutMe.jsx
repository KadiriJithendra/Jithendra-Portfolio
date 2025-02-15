import aboutMe from "../assets/About Me.png";

const AboutMe = () => {
  return (
    <section className="py-20 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
            <img width={600} height={600} src={aboutMe} alt="Aboutme" />
        </div>
        <div className="flex flex-col gap-4 items-center md:items-start">
        <h2 className="text-3xl font-bold">About Me</h2>
       
            <p className="text-justify md:text-left">I’m a UI/UX and Graphic Designer with great experience by working in a San Francisco based startup. Specializing in creating user-centric solutions for digital products that span across financial services, e-commerce, and ed-technology.</p>
           
            <p className="text-justify md:text-left">What can I work? Website design, Product Design, Motion Design, Graphic Design. Yep, I do them all.</p>
          
            <p className="text-justify md:text-left">Let’s design experiences that are not just functional but also inspiring. Experiences that live, breathe, and make a difference.</p>
        </div>
    </section>
  )
}

export default AboutMe