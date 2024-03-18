import { getPosts } from "@/components/getPosts";
import About from "@/components/portfolio/About";
import Hero from "@/components/portfolio/Hero";
import Section from "@/components/portfolio/Section";

export default function Home() {
  const posts = getPosts();
  return (
    <>
      <Section className="bg-black">
        <Hero />
      </Section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg-black/95"
      >
        <path
          fill="000"
          fill-opacity="1"
          d="M0,128L80,122.7C160,117,320,107,480,128C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <Section className="bg-black/95">
        <About />
      </Section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0d0d0d"
          fill-opacity="1"
          d="M0,128L80,144C160,160,320,192,480,192C640,192,800,160,960,133.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
