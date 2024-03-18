import React from "react";
import Container from "./Container";
import Image from "next/image";
import HeroImage from "@/public/images/coding.png";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: "800" });
type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <Container className="flex flex-col items-center justify-center space-y-5  font-bold lg:flex-row">
      <div className="text-center lg:text-left">
        {/* <p className="text-lg text-neutral-400  lg:text-xl">Hi, I'm</p> */}
        <h2 className={`text-7xl lg:text-9xl ${kanit.className}`}>
          Sangye Tashi
        </h2>
        <h3 className="pt-2 text-xl text-neutral-400 lg:text-4xl">
          A Passionage React / Web Developer{" "}
        </h3>
      </div>
      <Image
        height={600}
        src={HeroImage}
        alt="men in glasses looking to side"
        className=""
      />
    </Container>
  );
};
export default Hero;
