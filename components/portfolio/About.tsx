import React from "react";
import Section from "./Section";
import Thinking from "@/public/images/thinking.png";
import Image from "next/image";
import { Kanit } from "next/font/google";

const kanit = Kanit({ weight: "800", subsets: ["latin"] });
type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <div className="flex flex-col items-center p-6 lg:flex-row">
      <div className="mb-6 flex flex-col text-center">
        <h3 className={`mb-4 text-3xl font-bold lg:text-center `}>
          Hi, I'm{" "}
          <span className={`ml-2 text-5xl ${kanit.className}`}>
            Sangye Tashi
          </span>
        </h3>
        <p className="max-w-2xl text-lg text-gray-400">
          A highly motivated and dedicated computer science graduate currently
          seeking job opportunities in web development with a focus on acquiring
          advanced skills in ReactJS, software development, and front-end
          technologies. Committed to creating innovative and user-friendly web
          interfaces that enhance the digital experience.
        </p>
      </div>
      <Image src={Thinking} width={600} alt="an asian cartoon thinking" />
    </div>
  );
};
export default About;
