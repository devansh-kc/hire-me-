"use client";
import React from "react";
import Image from "next/image";
import profile from "../../public/profileimg/tea.jpg";

const About = () => {
  return (
    <main className="flex flex-wrap  pr-4 pl-4 items-center justify-between h-screen mx-auto max-w-7xl">
      {/* Text Section */}
      <div className="w-full md:w-full  p-6">
        <section className="mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            About Me
          </h1>
        </section>
        <div>
          <p className="font-mono mb-4 text-lg tracking-wide leading-relaxed">
            Hello! My name is Devansh Karamchandani and I&lsquo;m a 19-year-old
            full-stack developer with expertise in MERN. I am currently learning
            Python and SQL databases. My journey started with a passion for
            coding at 16 years old, and I&lsquo;ve since developed a wide array
            of skills in both front-end and back-end development.
          </p>
          <p className="font-mono text-lg tracking-wide leading-relaxed">
            I&lsquo;m always eager to learn and improve, and I&lsquo;m excited
            to bring my skills to real-world challenges. I&lsquo;m particularly
            interested in roles that allow me to apply my skills to create
            innovative solutions.
          </p>
        </div>
      </div>

      {/* Profile Picture Section */}
      {/* <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <Image
          src={profile}
          alt="Devansh Karamchandani"
          className="shadow-lg"
          width={350}
          height={350}
          priority
        />
      </div> */}
    </main>
  );
};

export default About;
