import wireframe1 from "../assets/wireframe1.png";
import wireframe2 from "../assets/wireframe2.png";
import wireframe3 from "../assets/wireframe3.png";
import wireframe4 from "../assets/wireframe4.png";
import wireframe5 from "../assets/wireframe5.png";
import wireframe6 from "../assets/wireframe6.png";
import wireframe7 from "../assets/wireframe7.png";

const CaseStudyIdeation = () => {
  return (
    <div className="py-20 px-4 md:px-40 bg-[#E8F5FF]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl custom-class-space-grotesk font-bold">
            Exploration, Ideation: <br /> 1A & Wireframes
          </h2>
        </div>
        <div>
          <p className="text-justify font-[Rubik] font-light">
            In the exploration and ideation phase for our application, I focused
            on the core functionalities that would address the main concerns of
            our user personas—streamlined university search, job search, and
            community interaction.
          </p>
          <br />
          <p className="text-justify font-[Rubik] font-light">
            Recognizing the need for a seamless and intuitive user experience, I
            meticulously mapped out the journey of a student selecting
            universities, and engaging with peers. Key features were
            conceptualized to include a personal dashboard for a resource
            library for materials, and direct messaging capabilities for expert
            consultations.
          </p>
          <br />
          <p className="text-justify font-[Rubik] font-light">
            With these priorities in mind, initial sketches were drawn, leading
            to the development of the first set of wireframes.
          </p>
        </div>
        <br />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center">
          <img
            width={300}
            height={300}
            src={wireframe1}
            alt="wireframe1"
          />
          <img
            width={300}
            height={300}
            src={wireframe2}
            alt="wireframe2"
          />
          <img
            width={300}
            height={300}
            src={wireframe3}
            alt="wireframe3"
          />
          <img
            width={300}
            height={300}
            src={wireframe4}
            alt="wireframe4"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
          <img
            width={300}
            height={300}
            src={wireframe5}
            alt="wireframe5"
          />
          <img
            width={300}
            height={300}
            src={wireframe6}
            alt="wireframe6"
          />
          <img
            width={300}
            height={300}
            src={wireframe7}
            alt="wireframe7"
          />
        </div>
      </div>
      <br />
      <div>
        <p className="text-justify font-[Rubik] font-light">
          In designing our app, I focused on a feature that allows students to
          explore and bookmark different universities and programs, along with
          detailed profiles, course offerings, and contact options for faculty
          or alumni. Integration of a familiar, intuitive interface was key, so
          we adopted well-known navigation patterns to encourage a sense of
          familiarity and ease.
        </p>
        <br />
        <p className="text-justify font-[Rubik] font-light">
          The wireframes included detailed steps in the university selection and
          AI suggestions by analyzing the resume. This was followed by the
          development of mid-fidelity mockups, which incorporated feedback from
          our initial user research, highlighting the desire for a personalized
          and intuitive experience in managing their networking. Below, you can
          see a brief of my wireframes with interaction arrows.
        </p>
      </div>
    </div>
  );
};

export default CaseStudyIdeation;
