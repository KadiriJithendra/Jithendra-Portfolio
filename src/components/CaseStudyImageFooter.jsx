import display1 from "../assets/display1.png";
import display4 from "../assets/display4.png";
import display5 from "../assets/display5.png";


const CaseStudyImageFooter = () => {
  return (
    <div className="bg-linear-to-b from-[#4E6FD7]  to-[#6D89E1] w-full py-20 px-4 md:px-40 flex justify-center">

        <div className="bg-linear-to-b from-[#6784DF]  to-[#A1B3F2] rounded-l-full rounded-r-full md:flex md:justify-center py-20 md:py-0 px-4 md:px-40">
            <img className="md:pt-40" width={260} height={260} src={display1} alt="dispaly1" />
            <img className="md:pb-20 md:pt-20" width={260} height={260} src={display5} alt="display5" />
            <img className="md:pb-40" width={260} height={260} src={display4} alt="display4" />
        </div>
    </div>
  );
};

export default CaseStudyImageFooter;
