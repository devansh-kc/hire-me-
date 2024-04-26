"use client";
import React from "react";
import Image from "next/image";
import profile from "../../public/profileimg/tea.jpg"

const About = () => {
  return (
    <main className="items-center  sm:p-4 m-4 ">
      <section className="text-7xl text-center font-mono font-bold sm:p-4 m-4  ">
        <p>So let me tell you a little about my self</p>
      </section>
      <section className=" flex flex-wrap items-center justify-evenly px-4">
        <div className=" flex flex-wrap  px-4">
          <p className="text text-slate-300 max-w-sm mt-10 my-20">
            My Name is Devansh Karamchandani and I am Self Taught Full Stack
            developer based in india and I am currently working in a BPO based
            company in Ahmedabad and I amd currenltly Puesuing my bachlores
            My Name is Devansh Karamchandani and I am Self Taught Full Stack
            developer based in india and I am currently working in a BPO based
            company in Ahmedabad and I amd currenltly Puesuing my bachlores My Name is Devansh Karamchandani and I am Self Taught Full Stack
            developer based in india and I am currently working in a BPO based
            company in Ahmedabad and I amd currenltly Puesuing my bachlores My Name is Devansh Karamchandani and I am Self Taught Full Stack
            developer based in india and I am currently working in a BPO based
            company in Ahmedabad and I amd currenltly Puesuing my bachlores
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center ">
          <Image height={350} width={350} src={profile} alt="tea" className="rounded-3xl "/>
        </div>
      </section>
    </main>
  );
};

export default About;
