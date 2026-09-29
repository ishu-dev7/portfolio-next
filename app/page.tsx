import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import RecruiterSnapshot from "@/components/RecruiterSnapshot";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ArchitectureSection from "@/components/ArchitectureSection";
import EngineeringDecisions from "@/components/EngineeringDecisions";
import EngineeringImpact from "@/components/EngineeringImpact";
import Achievements from "@/components/Achievements";
import Expertise from "@/components/Expertise";
import Journey from "@/components/Journey";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <RecruiterSnapshot />
        <About />
        <Experience />
        <Projects />
        <ArchitectureSection />
        <EngineeringDecisions />
        <EngineeringImpact />
        <Skills />
        <Achievements />
        <Expertise />
        <Journey />
        <Certifications />
        <Resume />
        <Testimonials />
        <Services />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
