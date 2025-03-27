import NavbarMain from "./components/nabvar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroRadiant from "./components/heroSection/HeroRadiant";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroRadiant />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
      <HelperSection />
    </main>
  );
}

export default App;
