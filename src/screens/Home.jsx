import {
  HeroSection,
  ProjectSection,
  ServicesSection,
} from "../components/sections";
import ContactSection from "../components/sections/Contact.Section";
import Footer from "../components/sections/Footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
