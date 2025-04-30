import { Inter } from "next/font/google";
import "./globals.css";
import NavbarPortfolio from "../components/NavbarPortfolio";
import Footer from "../components/Footer";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: {
     default:"Portfolio Vakar Florenta",
     template:"%s | Portfolio Vakar Florenta"
      },

  description: "Web developer, Full Stack Developer",
  keywords:['about','skills','projects']
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable}  antialiased`}
      >
        <div className="absolute inset-0 -z-10 h-full w-full ">
         <NavbarPortfolio />

        {children}
        <Footer/>
       
        </div>
       
      </body>
    </html>
  );
}
