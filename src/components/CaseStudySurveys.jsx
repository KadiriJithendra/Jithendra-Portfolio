import survey1 from "../assets/survey1.png";
import survey2 from "../assets/survey2.png";

const CaseStudySurveys = () => {
  return (
    <div className="bg-[#DDEBFF] py-20 px-4 md:px-40">
      <h2 className="text-2xl custom-class-space-grotesk font-bold">User Surveys & Interviews</h2>
      <br />
      <p className="text-justify font-[Rubik] font-light">
        Leveraging the expansive digital footprint across Telegram groups and
        the study abroad content platform, I embarked on a mission to glean
        insights directly from our audience. I deployed surveys and conducted
        interviews to validate our hypotheses and gather deep, qualitative
        insights.
      </p>
      <br />
      <p className="text-justify font-[Rubik] font-light">
        Using a combination of our own bespoke survey tools and direct community
        engagement, we gathered feedback that was instrumental in refining the
        app’s design and functionality. Personalized interactions, such as
        virtual meetups and one-on-one sessions, provided a wealth of nuanced
        feedback crucial for our user-centered design process.
      </p>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
            <div>
                <img src={survey1} alt="survey1" />
            </div>
            <div>
                <img src={survey2} alt="survey2" />
            </div>
        </div>
        <div>
          <h2 className="text-2xl custom-class-space-grotesk font-bold">User Survey Takeaways</h2>
          <br />
          <p className="text-justify font-[Rubik] font-light">
            I prefaced the survey with questions related to students’
            experiences with studying abroad. As the survey reached a broad
            demographic, not limited to our community, I wanted to ensure
            relevance. The feedback highlighted a foundational understanding of
            the education system abroad, eagerness for streamlined application
            processes, and a desire for a unified networking platform.
          </p>
          <br />
          <p className="text-justify font-[Rubik] font-light">
            Interestingly, despite high engagement levels in our Telegram
            groups, there was a noticeable demand for a more integrated,
            app-based solution, indicating a market opportunity for such a
            platform. This insight, coupled with our community’s input,
            suggested the potential for substantial user adoption and the need
            for enhanced visibility and accessibility of our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySurveys;
