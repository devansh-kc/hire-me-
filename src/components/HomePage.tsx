"use client";
import React from "react";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
// import TypewriteAnimation from "./ui/Typewriter-animation";
import { Typewriter } from "react-simple-typewriter";

const HomePage = () => {
  return (
    <>
      <LampContainer>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-3xl font-bold font-mono tracking-tight text-transparent md:text-5xl"
        >
          Hi there,
          <br /> I am Devansh Karamchandani and I am a
          <br />
          <Typewriter
            // ="text-5xl font-mono font-bold"
            words={[
              "Self Taught full stack developer",
              "Tech Enthusiast",
              "A Bike Enthusiast",
            ]}
            typeSpeed={80}
            loop={false}
            cursor={true}
            cursorBlinking={true}
          />
        </motion.p>
        {/* <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          Hi there,
          <br /> I am Devansh Karamchandani
        </motion.h1> */}
      </LampContainer>
    </>
  );
};

export default HomePage;
