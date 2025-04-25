import NavbarPortfolio from "../components/NavbarPortfolio";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Tecnologies from "../components/Tecnologies";
import Experience from "../components/Experience";
import Contact from "../components/Contact"
import Skills from "@/components/Skills";

export default function Home() {
  return(

  
    <div >
    <div
      className="" >
      <NavbarPortfolio />

      <div className="flex flex-col  pt-30 mx-auto justify-center">
        <div id="home">

        <Hero />
        </div>
       <div id="skills">
       <Skills/>
        <Tecnologies/>
        <Experience/>
       </div>
       <div id="projects">
       <Projects/>
       </div>
       
        <Contact/>
      </div>
      
    </div></div>
  );
}


  

   

