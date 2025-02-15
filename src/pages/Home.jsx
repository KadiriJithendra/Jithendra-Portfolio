import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Expertise from "../components/Expertise";
import AboutMe from "../components/AboutMe";
import Portfolio from "../components/Portfolio";
import CaseStudySection from "../components/CaseStudySection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <Expertise />

      <AboutMe />

      <Portfolio />

      <CaseStudySection />

      <ContactSection />
    </div>
  );
};

export default Home;
