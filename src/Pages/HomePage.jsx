import AboutSection from "../Components/HomePageComponents/AboutSection";
import ContactForm from "../Components/HomePageComponents/ContactForm";
import ExperinceSection from "../Components/HomePageComponents/ExperinceSection";
import FeaturedProjects from "../Components/HomePageComponents/FeaturedProjects";
import Header from "../Components/HomePageComponents/Header";
import HeroSection from "../Components/HomePageComponents/HeroSection";
import HireMe from "../Components/HomePageComponents/HireMe";
import SkillsSection from "../Components/HomePageComponents/SkillsSection";
import BlogSection from "../Components/UniversalComponents/BlogSection";
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
  <HireMe/>
  <BlogSection/>
  <ContactForm/>
  <Footer/>
  </div>
   
  </>

}
export default HomePage;