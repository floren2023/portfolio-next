import React from "react";
import {  LANGUAGES } from "../constants";

function About() {
  return (
    <div className="pb-4 lg:pl-20 lg:pr-20 items-center   ">
      <h1 className="my-10 text-center text-4xl text-slate-200">
        Soft<span className="text-neutral-500">Skills</span>
      </h1>
      <div className="flex flex-wrap mx-10">
        <div className="items-center w-full lg:w-1/2 lg:p-8 ">
          <div className="justify-center flex ">
            <img src="src/assets/about.jpg" width="500px" alt="about me" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 sm:p-5">
          <div className="items-center justify-center lg:justify-start">
            <p className="text-slate-200 my-2 font-light tracking-tighter py-6 max-w-xl ">
              {LANGUAGES.map()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
