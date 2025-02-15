import display4 from "../assets/display4.png";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";

const CaseStudyImages = () => {
  return (
    <div className="py-20 px-4 md:px-40 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24">
      <div className="bg-linear-to-b from-[#6280F7] from-70% to-[#879FFF] w-full h-[500px] md:ml-24 rounded-md flex flex-auto justify-center">
      <div>
            <img src={display4} alt="display4" />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-10">
        <div className="mx-10 md:mr-40">
          <div className="bg-linear-to-b from-[#6280F7] from-70% to-[#879FFF]  rounded-md flex justify-center items-center py-2">
            <img width={120} height={120} src={phone1} alt="phone1" />
          </div>
        </div>
        <div className="mx-10 md:mr-40">
          <div className="bg-linear-to-b from-[#6280F7] from-70% to-[#879FFF]  rounded-md flex justify-center items-center py-2">
            <img width={120} height={120} src={phone2} alt="phone2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyImages;
