import { getPosts } from "@/components/getPosts";
import About from "@/components/portfolio/About";
import Card from "@/components/portfolio/Card";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import Section from "@/components/portfolio/Section";
import Skills from "@/components/portfolio/Skills";

export default function Home() {
  const posts = getPosts();
  return (
    <>
      <Section className="bg-black">
        <Hero />
      </Section>

      <Section className="bg-black">
        <About />
      </Section>

      <Section className="bg-black">
        <Skills />
      </Section>
      <Section className="bg-black">
        <Projects />
      </Section>
      <Section className="bg-black">
        <Education />
      </Section>
      <Section className="bg-black">
        <Experience />
      </Section>
    </>
  );
}
