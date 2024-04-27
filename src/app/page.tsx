import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import HomePage from "@/components/HomePage";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import TypewriteAnimation from "@/components/ui/Typewriter-animation";
import Image from "next/image";
import { GreetingsData } from "@/data/typed";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <TechStack />
      <MyWork />
      <About />
      <TypewriteAnimation
        words={GreetingsData}
        classStyle="text-7xl text-center h-[20rem]  m-[5rem] p-[5rem] items-center  justify-center font-bold font-mono"
      />
      <ContactMe />
    </>
  );
}
