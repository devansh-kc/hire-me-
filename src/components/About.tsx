"use client";
import React from "react";
import Image from "next/image";
import profile from "../../public/profileimg/tea.jpg";

const About = () => {
  return (
    // <main className=" mt-10 mx-auto max-w-7xl  sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
    // <main className="  mt-10 mx-auto max-w-7xl justify-around align-middle items-center "> 4
    <main className=" mt-auto flex flex-cols flex-wrap justify-start  h-screen mx-auto max-w-7xl ">
      <section className="p-8 text-2xl  tracking-tight font-extrabold  m-10  sm:text-3xl md:text-4xl">
        <p>About me </p>
      </section>
      <div className="p-6">
        <p className=" font-mono  p-8  text-left tracking-widest">
          Hello! My name is Devansh Karamchandani and I&lsquo;m a 19-year-old
          full-stack developer with expertise in MERN and I am currently
          learning Python and SQL databases. My journey started with a passion
          for coding, when I was 16 years old,and I&lsquo;ve since developed a
          wide array of skills in both front-end and back-end development.
        </p>
        <p className="font-mono text-left p-8 tracking-widest">
          I&lsquo;m always eager to learn and improve, and I&lsquo;m excited to
          bring my skills to real-world challenges. I&lsquo;m particularly
          interested in roles that allow me to apply my skills to create
          innovative solutions.
        </p>
      </div>
    </main>
  );
};

export default About;
