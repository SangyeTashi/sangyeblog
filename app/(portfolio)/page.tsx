import { getPosts } from "@/components/getPosts";
import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";
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
      <div className="no-scrollbar  h-screen  overflow-auto">
        <Section className=" snap-start">
          <Hero />
        </Section>

        <Section className="snap-start">
          <About />
        </Section>

        <Section className="snap-start">
          <Skills />
        </Section>
        <Section className="snap-start">
          <Projects />
        </Section>
        <Section className="snap-start">
          <Education />
        </Section>
        <Section className="snap-start">
          <Experience />
        </Section>
        <Section className="snap-start">
          <Contact />
        </Section>
      </div>
    </>
  );
}
