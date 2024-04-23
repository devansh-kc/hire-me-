"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className=" flex flex-wrap items-center justify-center ">
      {" "}
      <p className="text-7xl text-center font-mono font-bold"> About Me </p>
      <div className="flex">
        <div className="border m-8 p-8 rounded-lg">
          <p>
            My Name is Devansh Karamchandani and I am Self Taught Full Stack
            developer and I am currently working in a BPO based company in
            Ahmedabad and I amd currenltly Puesuing my bachlores
          </p>
        </div>
        <div>
          <Image src="/public/images/pexels-markusspiske-177598.jpg" width="100" height="100" alt="Devansh Karamchandani's image" />
        </div>
      </div>
    </div>
  );
};

export default About;
