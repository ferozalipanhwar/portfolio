import AboutSection from "../Components/HomePageComponents/AboutSection";
import ContactForm from "../Components/HomePageComponents/ContactForm";
import Experience from "../Components/HomePageComponents/Experience";
import ExperinceSection from "../Components/HomePageComponents/ExperinceSection";
import FeaturedProjects from "../Components/HomePageComponents/FeaturedProjects";
import Header from "../Components/HomePageComponents/Header";
import HeroSection from "../Components/HomePageComponents/HeroSection";
import SkillsSection from "../Components/HomePageComponents/SkillsSection";
import Footer from "../Components/UniversalComponents/Footer";


function HomePage(){

  return<>
  <div style={{margin:'0px',padding:'0px', }}>
  <Header/>
  <HeroSection/>
 
  <AboutSection/>
  <SkillsSection/>
  <ExperinceSection/>
  <FeaturedProjects/>
  <ContactForm/>

  </div>
    <Footer/>
  </>
}
export default HomePage;