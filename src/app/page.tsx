import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import HeroPage from "@/components/HeroPage";
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
      <HeroPage />
      <TechStack />
      <MyWork />
      <About />
      <TypewriteAnimation words={GreetingsData} />
      <ContactMe />
    </>
  );
}
