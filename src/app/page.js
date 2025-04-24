import NavbarPortfolio from "../components/NavbarPortfolio";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Tecnologies from "../components/Tecnologies";
import Experience from "../components/Experience";


export default function Home() {
  return(

  
    <div >
    <div
      className="mx-auto items-center" >
      <NavbarPortfolio />

      <div className=" pt-30">
        <Hero />
        {/* <About /> */}
        <Tecnologies/>
        <Experience/>
        <Projects/>
      </div>
      
    </div></div>
  );
}


  

   

