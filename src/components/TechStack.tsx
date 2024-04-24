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
const TechStack = () => {
  const SkillIcon = [
    "FaHtml5",
    "FaCss3Alt",
    "IoLogoJavascript",
    "FaReact",
    "TbBrandRedux",
    "TbBrandNextjs",
    "SiPostman",
    "TbBrandNodejs",
    "SiExpress",
    "BiLogoMongodb",
    "SiReacthookform",
    "FaGitAlt"
  ];
  const iconComponents :any = {
    FaHtml5: FaHtml5,
    FaCss3Alt: FaCss3Alt,
    IoLogoJavascript: IoLogoJavascript,
    FaReact: FaReact,
    TbBrandRedux: TbBrandRedux,
    TbBrandNextjs: TbBrandNextjs,
    SiPostman: SiPostman, // Note: Using an alias to avoid naming conflict
    TbBrandNodejs: TbBrandNodejs,
    SiExpress: SiExpress,
    BiLogoMongodb: BiLogoMongodb,
    SiReacthookform: SiReacthookform,
    FaGitAlt:FaGitAlt
  };

  return (
    <main className="  flex flex-wrap justify-around items-center md:px-6 rounded-md min-h-96 max-h-full   p-4 m-4 font-mono">
      <section className="flex flex-col items-start p-6 ">
        <h3 className="font-semibold text-xl uppercase md:mb-5 ">my</h3>
        <h1 className=" text-7xl md:text-[7rem]  tracking-tight md:-my-4">
          Tech <br /> Stack
        </h1>
        <h4 className="text-sm md:text-md text-muted-foreground mb-2">
          My primary focus on javascript ecosystem
        </h4>
      </section>
      <section className="flex justify-center gap-2 w-full md:w-1/4 items-center h-44 justify-items-stretch p-2 md:pb-5 flex-wrap ">
        {SkillIcon.map((skill) => {
          const IconComponent = iconComponents[skill];
          return <IconComponent className="border cursor-pointer badge-light dark:badge-dark h-9 w-9 m-3  rounded-full" key={skill} />;
        })}
      </section>
    </main>
  );
};

export default TechStack;
