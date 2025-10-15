import Image from "next/image";
import Hero from "./components/Hero";
import SkillsSection from "./components/Skills";

export default function Home() {
  return (
   <main className="min-h-screen bg-gray-900 pt-12">
    <Hero />
    <SkillsSection />
    </main>
  );
}
