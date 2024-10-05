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
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
const TechStack = () => {
  const SkillIcon: any = [
    {
      Skill: "HTML",
      Icon: <FaHtml5 />,
    },
    {
      Skill: "CSS",
      Icon: <FaCss3Alt />,
    },
    {
      Skill: "TailwindCss",
      Icon: <BiLogoTailwindCss />,
    },
    {
      Skill: "Javascript",
      Icon: <IoLogoJavascript />,
    },
    {
      Skill: "React",
      Icon: <FaReact />,
    },
    {
      Skill: "Redux",
      Icon: <TbBrandRedux />,
    },
    {
      Skill: "Next.js",
      Icon: <TbBrandNextjs />,
    },
    {
      Skill: "PostMan",
      Icon: <SiPostman />,
    },
    {
      Skill: "Node.Js",
      Icon: <TbBrandNodejs />,
    },
    {
      Skill: "Express.Js",
      Icon: <SiExpress />,
    },
    {
      Skill: "MongoDb",
      Icon: <BiLogoMongodb />,
    },
    {
      Skill: "React Hook Form",
      Icon: <SiReacthookform />,
    },
    {
      Skill: "Git",
      Icon: <FaGitAlt />,
    },
    {
      Skill: "Fire base",
      Icon: <IoLogoFirebase />,
    },
    {
      Skill: "App Write",
      Icon: <SiAppwrite />,
    },
  ];
  const firstRow = SkillIcon.slice(0, SkillIcon.length / 1);
  const secondRow = SkillIcon.slice(SkillIcon.length / 2);
  const thirdRow = SkillIcon.slice(SkillIcon.length / 3);

  const fourthRow = SkillIcon.slice(SkillIcon.length / 4);

  const ReviewCard = ({
    Skill,
    Icon,
  }: {
    Skill: string;
    Icon: React.ReactNode;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-full cursor-pointer rounded-2xl border-white p-3   h-full ",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center gap-4  w-max justify-center align-middle ">
          <div className="text-xl">{Icon}</div>

          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {Skill}
            </figcaption>
          </div>
        </div>
      </figure>
    );
  };

  return (
    <>
      <div className="  flex h-[20rem] w-full  justify-center align-middle  items-center">
        <h1 className=" top-32 uppercase  tracking-[20px] text-white font-mono font-bold text-3xl    ">
          Skills
        </h1>
      </div>
      <div className="relative   items-center flex-row justify-between align-middle h-[30rem] w-[70%] mx-auto   ">
        <Marquee pauseOnHover reverse className="[--duration:40s]" >
          {firstRow.map((review: any, idx: number) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>
        <Marquee  pauseOnHover className="[--duration:30s]   p-4">
          {secondRow.map((review: any, idx: number) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:50s]  p-4">
          {thirdRow.map((review: any, idx: number) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>
        <Marquee  pauseOnHover className="[--duration:60s]  p-4">
          {fourthRow.map((review: any, idx: number) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white dark:from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white dark:from-black"></div>
      </div>
    </>
    // <main className=" h-[40rem] flex flex-wrap justify-around items-center md:px-4 rounded-md min-h-96 max-h-full   bg-black font-mono">
    //   <section className="flex flex-col items-start p-6 ">
    //     <h3 className="font-semibold text-xl uppercase md:mb-5 ">my</h3>
    //     <h1 className=" text-7xl md:text-[7rem]  tracking-tight md:-my-4">
    //       Tech <br /> Stack
    //     </h1>
    //     <h4 className="text-sm md:text-md text-muted-foreground my-4">
    //       My primary focus on javascript ecosystem
    //     </h4>
    //   </section>
    //   {/* className="border cursor-pointer badge-light dark:badge-dark text-5xl  rounded-full" */}
    //   <section className="flex justify-center gap-2 w-full md:w-1/4 items-center h-44 justify-items-stretch p-2 md:pb-5 flex-wrap ">
    //     {SkillIcon.map((Icon: any, index: number) => (
    //       <Icon
    //         key={index}
    //         className="text-4xl m-2 cursor-pointer badge-light dark:badge-dark"
    //       />
    //     ))}
    //   </section>
    // </main>
  );
};

export default TechStack;
