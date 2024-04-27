"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

interface TypewriteAnimationProps {
  words: string[]; // Define a prop to accept an array of strings
  classStyle: String;
}

const TypewriteAnimation: React.FC<TypewriteAnimationProps> = ({
  words,
  classStyle,
}) => {
  return (
    <h1
      className={`${classStyle}`}
      //   `text-5xl md:text-${
      //   textSize || "8xl"
      // } font-bold text-center`}
    >
      <Typewriter
        words={words}
        typeSpeed={80}
        loop={false}
        cursor={true}
        cursorBlinking={true}
      />
    </h1>
  );
};

export default TypewriteAnimation;
