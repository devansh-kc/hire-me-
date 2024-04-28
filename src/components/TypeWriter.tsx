"use client";
import React from "react";
import { GreetingsData } from "@/data/typed";
import { Typewriter } from "react-simple-typewriter";

function TypeWriterAnim() {
  return (
    <div className=" flex  flex-wrap align-middle  items-center justify-center h-1/2 ">
      <h1 className="  text-5xl md:text-7xl  font-bold font-mono text-center ">
        <Typewriter
          words={GreetingsData}
          typeSpeed={70}
          loop={0}
          cursor={true}
        />
      </h1>
    </div>
  );
}

export default TypeWriterAnim;
