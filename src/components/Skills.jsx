import { ChipIcon, PlusIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { skills } from "../data";
import AOS from 'aos'
import SkillsSymbol from '../images/skills_symbol.png'
import "aos/dist/aos.css";
import FlashyText from "./FlashyText";
import LaptopPic from '../images/laptop_pic.jpg'


export default function Skills() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  })
  return (
    <section id="skills">

      <div className="container px-5 py-10 mx-auto border-red-500">
        
      <div className="text-center mb-20 text-transparent">
          <img src={SkillsSymbol} alt="" className="w-20 h-15 inline-block mb-4" />

          <FlashyText script="Skills &amp; Technologies" centered={true}/>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-slate-900 rounded flex p-4 h-full items-center">
                <PlusIcon data-aos="fade-in" className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span data-aos="fade-in" className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
              
            </div>
            
          ))}
        
        </div>
      </div>
      <img src={LaptopPic} alt="" className="justify-center content-center" />
    </section>
  );
}