import About from "@/components/About";
import HeroPage from "@/components/HeroPage";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <About/>
    </>
  );
}
