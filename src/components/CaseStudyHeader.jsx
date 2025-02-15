import Logo from "./Logo";

const CaseStudyHeader = () => {
  return (
    <div className="bg-[url('/src/assets/header.png')] bg-cover bg-center bg-no-repeat h-[500px]">
      <div className="bg-black h-[500px] opacity-85">
        <div className="text-white custom-class-space-grotesk relative pl-5 pt-5 md:pl-20 md:pt-5 inline-block opacity-50 hover:opacity-100">
          <Logo text="← home"/>
        </div>
        <div className="py-20 px-4 md:px-40 flex justify-start">
          <div className="flex flex-col justify-start">
            <div>
              <h1 className="text-white text-4xl font-bold font-[Inter]">Jithendra</h1>
            </div>
            <div>
              <br />
              <br />
              <p className="text-white font-[Inter]">February 2024 - Present</p>
              <br />
              <br />
              <h2 className="text-5xl font-bold text-white font-[Inter]">Student Connect</h2>
              <br />
              <p className="text-white font-[Inter]">Role: UI/UX & Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHeader;
