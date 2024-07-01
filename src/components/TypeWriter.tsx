"use client";
import React from "react";
import { GreetingsData } from "@/data/typed";
import { Typewriter } from "react-simple-typewriter";

function TypeWriterAnim() {
  return (
      <div className="flex items-center justify-center min-h-screen  text-white">
    <h1 className="text-7xl md:text-9xl font-extrabold font-mono text-center">
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
