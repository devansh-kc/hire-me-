"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className=" flex flex-wrap items-center justify-center m-4 p-4">
      {" "}
      <p className="text-7xl text-center font-mono font-bold"> About Me </p>
      <div className="flex">
        <div className=" m-8 p-8 ">
          <p>
            My Name is Devansh Karamchandani and I am Self Taught Full Stack
            developer based in india and I am currently working in a BPO based
            company in Ahmedabad and I amd currenltly Puesuing my bachlores
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
