"use client";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiReacthookform } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAppwrite } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";
const TechStack = () => {
  const SkillIcon: any = [
    FaHtml5,
    FaCss3Alt,
    BiLogoTailwindCss,
    IoLogoJavascript,
    FaReact,
    TbBrandRedux,
    TbBrandNextjs,
    SiPostman, // Note: Using an alias to avoid naming conflict
    TbBrandNodejs,
    SiExpress,
    BiLogoMongodb,
    SiReacthookform,
    FaGitAlt,
    IoLogoFirebase,
    SiAppwrite,
  ];

  return (
    <main className=" h-[40rem] flex flex-wrap justify-around items-center md:px-4 rounded-md min-h-96 max-h-full   p-4 m-4 font-mono">
      <section className="flex flex-col items-start p-6 ">
        <h3 className="font-semibold text-xl uppercase md:mb-5 ">my</h3>
        <h1 className=" text-7xl md:text-[7rem]  tracking-tight md:-my-4">
          Tech <br /> Stack
        </h1>
        <h4 className="text-sm md:text-md text-muted-foreground my-4">
          My primary focus on javascript ecosystem
        </h4>
      </section>
      {/* className="border cursor-pointer badge-light dark:badge-dark text-5xl  rounded-full" */}
      <section className="flex justify-center gap-2 w-full md:w-1/4 items-center h-44 justify-items-stretch p-2 md:pb-5 flex-wrap ">
        {SkillIcon.map((Icon: any, index: number) => (
          <Icon
            key={index}
            className="text-4xl m-2 cursor-pointer badge-light dark:badge-dark"
          />
        ))}
      </section>
    </main>
  );
};

export default TechStack;
