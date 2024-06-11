"use client";
import React from "react";
import Image from "next/image";
import profile from "../../public/profileimg/tea.jpg";

const About = () => {
  return (
    <main className="h-screen items-center bg-black">
      <section className=" mx-6 text-6xl md:text-8xl text-left font-mono font-extrabold">
        <p>So let me tell you a little about my self</p>
      </section>
      <section className=" flex flex-wrap justify-evenly">
        <div className="px-4">
          <p className="text-left text-xl text-slate-300 max-w-sm mt-10 my-10">
            Hello! I&lsquo;m a 19-year-old full-stack developer with expertise
            in MERN and I am currently learning Next js. My journey started with
            a passion for coding and problem-solving, and I&lsquo;ve since
            developed a wide array of skills in both front-end and back-end
            development.
          </p>
          <p className="text-left text-xl text-slate-300 max-w-sm  my-10 mt-10">
            I&lsquo;m always eager to learn and improve, and I&lsquo;m excited
            to bring my skills to real-world challenges. I&lsquo;m particularly
            interested in roles that allow me to apply my skills to create
            innovative solutions.
          </p>
        </div>
        {/* <div className="flex flex-wrap items-center justify-center ">
          <Image
            height={350}
            width={350}
            src={profile}
            alt="tea"
            className="rounded-3xl "
          />
        </div> */}
      </section>
    </main>
  );
};

export default About;
