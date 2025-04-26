import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    
      
        <div className="flex flex-col  pt-30 mx-auto justify-center">
          <div id="home">
            <Hero />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
<div id="contact">
          <Contact />
          </div>
        </div>
      
    
  );
}
