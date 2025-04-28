import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <div className=" -z-10  h-full  w-full 
    [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      
        <div className="mt-10 pt-10 mx-auto justify-center  pb-20">
          
            <Hero />
          
          
         </div>
          
        </div>
      
    
  );
}
