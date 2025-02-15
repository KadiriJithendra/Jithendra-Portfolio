import usability from "../assets/usabilityTesting.png";

const CaseStudyUsabilityTesting = () => {
  return (
    <div className="py-20 px-4 md:px-40 bg-[#E8F5FF]">
      <h2 className="text-2xl custom-class-space-grotesk font-bold">
        Usability Testing
      </h2>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <p className="font-[Rubik] font-light text-justify">
            I developed an interactive prototype and conducted an initial test
            with a small group of volunteers. The test was structured to provide
            insights into the user experience and the app’s intuitiveness.
          </p>
          <br />
          <p className="font-[Rubik] font-light text-justify">
            <span className="font-bold">Scenario</span>: The user has just
            opened the app and seeks to understand its features, explore, and
            initiate the networking process.
          </p>
          <br />
          <p className="font-[Rubik] font-light text-justify">
            <span className="font-bold">Task 1</span>: Navigate the onboarding
            process and provide feedback on its effectiveness in conveying the
            app’s purpose and features.
          </p>
          <br />
          <p className="font-[Rubik] font-light text-justify">
            <span className="font-bold">Task 2</span>: Search for and select a
            university program that you are from.
          </p>
          <br />
          <p className="font-[Rubik] font-light text-justify">
            <span className="font-bold">Task 3</span>: Begin the networking
            process in the chosen program.
          </p>
          <br />
          <p className="font-[Rubik] font-light text-justify">
            This approach allowed me to gather valuable insights on the app’s
            user interface and functionality, directly from the target audience.{" "}
          </p>
        </div>
        <div>
          <img
            width={500}
            height={500}
            src={usability}
            alt="usabilityTesting"
          />
        </div>
      </div>
      <br />
      <br />
      <h2 className="text-2xl custom-class-space-grotesk font-bold">
        Usability Testing Results & Affinity Mapping
      </h2>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div>
          <p className="font-[Rubik] font-light text-justify">
            After out usability testing, I utilized affinity mapping to
            categorize and analyze the feedback and observations. I applied
            Nielsen’s Severity Rating Scale to prioritize the most critical
            issues for iteration.
          </p>
        </div>

        <div>
          <p className="font-[Rubik] font-light text-justify">
            A preference test was conducted to gauge user reactions to different
            UI elements, particularly focusing on the layout and color schemes.
            This feedback was pivotal in refining the UI design, ensuring that
            it resonated more effectively with our target audience’s preferences
            and expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyUsabilityTesting;
