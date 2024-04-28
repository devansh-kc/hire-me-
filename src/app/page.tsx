import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import HomePage from "@/components/HomePage";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import TypeWriterAnim from "@/components/TypeWriter";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <TechStack />
      <MyWork />
      <About />
      <TypeWriterAnim />
      <ContactMe />
    </>
  );
}
