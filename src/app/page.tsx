import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Achievements,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
