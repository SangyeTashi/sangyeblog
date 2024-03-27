import { getPosts } from "@/components/getPosts";
import About from "@/components/portfolio/About";
import Hero from "@/components/portfolio/Hero";
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
    </>
  );
}
