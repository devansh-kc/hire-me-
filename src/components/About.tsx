"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="items-center  sm:p-4 m-4 ">
      <section className="text-7xl text-center font-mono font-bold sm:p-4 m-4  ">
        <p>So let me tell you a little about my self</p>
      </section>
      <section className="">
        <div className="flex flex-wrap justify-around grid-cols-6 p-2 m-2 ">
          <p className="float-left text-xl font-mono text-justify md:line-clamp-3 lg:line-clamp-4   ">
            My Name is Devansh Karamchandani and I am Self Taught Full Stack
            developer based in india and I am currently working in a BPO based
            company in Ahmedabad and I amd currenltly Puesuing my bachlores
          </p>
          <div className="h-52 w-52  float-right lg:float-none bg-green-700"></div>
        </div>
      </section>
    </main>
  );
};

export default About;
