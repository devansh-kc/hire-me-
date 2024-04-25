import About from "@/components/About";
import HeroPage from "@/components/HeroPage";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <TechStack />
      <MyWork />
      <About/>
    </>
  );
}
