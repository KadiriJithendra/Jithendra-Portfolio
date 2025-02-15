import telegram_icon from "../assets/telegram_icon.png";
import blogger_icon from "../assets/blogger_icon.png";

const CaseStudyResearch = () => {
  return (
    <div className="py-20 px-4 md:px-40 flex flex-col gap-10">
      <h2 className="text-2xl custom-class-space-grotesk font-bold">
        Research: Competitive & SWOT Analyses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32">
        <div className="flex flex-col gap-4">
          <div>
            <img
              width={50}
              height={50}
              src={telegram_icon}
              alt="telegram"
            />
          </div>
          <div>
            <table className="table-auto border-2 border-black">
              <tr>
                <td className="border-2 text-center custom-class-space-grotesk font-medium">STRENGTHS</td>
                <td className="border-2 text-center custom-class-space-grotesk font-medium">OPPORTUNITIES</td>
              </tr>
              <tr>
                <td className="border-2 text-left p-4 md:px-5 md:py-8 custom-class-space-grotesk font-medium">
                  Provides real-time communication for immediate assistance and
                  networking.
                  <br /> Facilitates peer-to-peer support and mentorship
                  opportunities.
                </td>
                <td className="border-2 text-left p-4 md:px-5 md:py-8 custom-class-space-grotesk font-medium">
                  Expansion into niche academic fields for specialized
                  networking. <br /> Integration with the app for streamlined
                  communication and feature access.
                </td>
              </tr>
              <tr>
                <td className="border-2 text-center custom-class-space-grotesk font-medium">WEAKNESSES</td>
                <td className="border-2 text-center custom-class-space-grotesk font-medium">THREATS</td>
              </tr>
              <tr>
                <td className="border-2 text-left p-4 md:px-5 md:pb-15 custom-class-space-grotesk font-medium">
                  Requires constant moderation to maintain the quality of
                  information. <br /> Risk of fragmented conversations leading
                  to user overwhelm.
                </td>
                <td className="border-2 text-left p-4 md:px-5 md:py-8 custom-class-space-grotesk font-medium">
                  Changes in user preferences towards more private networking
                  options. <br />
                  Difficulty in scaling the community while maintaining intimacy
                  and relevance.
                </td>
              </tr>
            </table>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl text-center custom-class-space-grotesk">Telegram Groups</h3>
            <p className="text-justify font-[Rubik] font-light">
              The inception of university-specific Telegram groups marked a
              significant advancement in the study abroad community’s digital
              evolution. These groups emerged as dynamic forums where students
              could swiftly exchange information, from course registration
              nuances to accomodations. Their real-time, peer-to-peer
              interaction model fostered a sense of belonging, vital for those
              navigating the complexities of moving abroad for education.
            </p>
          </div>
        </div>
        <div className="md:mt-3 flex flex-col gap-4">
          <div>
            <img
              width={40}
              height={40}
              src={blogger_icon}
              alt="blogger"
            />
          </div>
          <div>
            <table className="table-auto border-2 border-black">
              <tr>
                <td className="border-2 text-center custom-class-space-grotesk font-medium">STRENGTHS</td>
                <td className="border-2 text-center custom-class-space-grotesk font-medium">OPPORTUNITIES</td>
              </tr>
              <tr>
                <td className="border-2 text-left p-4 md:px-5 md:pb-10 custom-class-space-grotesk font-medium">
                  Serves as a comprehensive resource for the U.S. university
                  research. <br /> Provides consistent, reliable content that
                  builds user trust.
                </td>
                <td className="border-2 text-left p-4 md:px-5 md:py-8 md:pb-8 custom-class-space-grotesk font-medium">
                  Incorporating interactive elements like webinars and live
                  consultancy. <br /> Expansion of content to cover post jobs
                  and life in the U.S.
                </td>
              </tr>
              <tr>
                <td className="border-2 text-center custom-class-space-grotesk font-medium">WEAKNESSES</td>
                <td className="border-2 text-center custom-class-space-grotesk font-medium">THREATS</td>
              </tr>
              <tr>
                <td className="border-2 text-left p-4 md:px-5 md:py-8 md:pb-14 custom-class-space-grotesk font-medium">
                  Risk of information becoming quickly outdated in the
                  fast-changing education landscape. <br /> Limited interaction
                  capabilities may reduce user engagment.
                </td>
                <td className="border-2 text-left p-4 md:px-5 md:py-8 custom-class-space-grotesk font-medium">
                  Official university resources may over shadow independent
                  guidance platforms. <br /> Potential for loss of traffic to
                  platforms with more interactive content.
                </td>
              </tr>
            </table>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl text-center custom-class-space-grotesk">Blog Website</h3>
            <p className="text-justify font-[Rubik] font-light">
              Parallel to the interactive Telegram communities, the Website has
              acted as a beacon, guiding students through the labyrinth of the
              abroad university application process. It provided structured
              content, from visa interview preparation to insights on campus
              life, embodying a virtual counselor for thousands of students.
              This repository of tailored advice has been pivotal in equipping
              students with the knowledge to confidently step onto foreign soil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyResearch;
