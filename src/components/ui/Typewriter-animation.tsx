"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

interface TypewriteAnimationProps {
  words: string[]; // Define a prop to accept an array of strings
}

const TypewriteAnimation: React.FC<TypewriteAnimationProps> = ({ words }) => {
  return (
    <main className="grid justify-center items-center h-auto m-[10rem]">
      <section className="">
        <h1 className="text-5xl md:text-8xl font-bold text-center">
          <Typewriter 
            words={words}
            typeSpeed={80}
            loop={false}
            cursor={true}
            cursorBlinking={true}
          />
        </h1>
      </section>
    </main>
  );
};

export default TypewriteAnimation;
