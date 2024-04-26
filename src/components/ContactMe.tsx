"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { GreetingsData } from "@/data/typed";

const ContactMe = () => {
  return (
    <main className=" block   justify-center m-[10rem]">
      <section className="">
        <h1 className="text-5xl md:text-8xl font-bold  text-center">
          <Typewriter
            words={GreetingsData}
            typeSpeed={500}
            loop={false}
            cursor={true}
            cursorBlinking={true}
          />
        </h1>
      </section>

      <section className="mt-20">
        <form action="" className=" grid  justify-center ">
          <input type="text" className=" m-2 px-10 py-3" />
          <input type="text"  className="m-2 p-2"/>
          <input type="text" className="m-2 p-2" />
        </form>
      </section>
    </main>
  );
};

export default ContactMe;
