import CaseStudyCardSorts from "../components/CaseStudyCardSorts";
import CaseStudyDesignIntermission from "../components/CaseStudyDesignIntermission";
import CaseStudyFooter from "../components/CaseStudyFooter";
import CaseStudyHeader from "../components/CaseStudyHeader";
import CaseStudyIdeation from "../components/CaseStudyIdeation";
import CaseStudyImageFooter from "../components/CaseStudyImageFooter";
import CaseStudyImageGallery from "../components/CaseStudyImageGallery";
import CaseStudyImages from "../components/CaseStudyImages";
import CaseStudyIntro from "../components/CaseStudyIntro";
import CaseStudyProblem from "../components/CaseStudyProblem";
import CaseStudyprojectBackground from "../components/CaseStudyprojectBackground";
import CaseStudyPrototype from "../components/CaseStudyPrototype";
import CaseStudyResearch from "../components/CaseStudyResearch";
import CaseStudySurveys from "../components/CaseStudySurveys";
import CaseStudyUsabilityTesting from "../components/CaseStudyUsabilityTesting";
import CaseStudyUserInterfaceDesign from "../components/CaseStudyUserInterfaceDesign";
import CaseStudyUserJourneys from "../components/CaseStudyUserJourneys";
import ContactSection from "../components/ContactSection";

const CaseStudy = () => {
  return (
    <div>
      <CaseStudyHeader />

      <CaseStudyIntro />

      <CaseStudyImageGallery />

      <CaseStudyprojectBackground />

      <CaseStudyImages />

      <CaseStudyProblem />

      <CaseStudyResearch />

      <CaseStudySurveys />

      <CaseStudyCardSorts />

      <CaseStudyUserJourneys />

      <CaseStudyIdeation />

      <CaseStudyPrototype />

      <CaseStudyUsabilityTesting />

      <CaseStudyDesignIntermission />

      <CaseStudyUserInterfaceDesign />

      <CaseStudyImageFooter />

      <CaseStudyFooter />

      <ContactSection />
    </div>
  );
};

export default CaseStudy;
