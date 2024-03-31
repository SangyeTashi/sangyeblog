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
      <div className="mb-6 flex grow flex-col text-center">
        <h3 className={`mb-4 text-5xl lg:text-center `}>
          <span className="text-4xl  text-gray-300">Hi, I'm </span>{" "}
          <span className="font-extrabold text-gray-300">Sangye Tashi</span>
        </h3>
        <div className="relative flex items-center justify-center py-8">
          <div className="absolute -top-12 left-12 h-32 w-32 rounded-full bg-blue-500 opacity-75 blur-3xl"></div>
          <div className="absolute left-32 top-8 h-24 w-48 rounded-full bg-purple-500 opacity-75 blur-3xl"></div>
          <div className="absolute -bottom-12 -right-1 h-24 w-16 rounded-full bg-yellow-500 opacity-75 blur-3xl"></div>
          <p className="max-w-2xl text-xl text-gray-400 xl:text-2xl ">
            I'm a motivated and dedicated computer science graduate aspiring to
            become a front-end engineer. currently seeking job opportunities in
            web development with a focus on acquiring advanced skills in
            ReactJS, software development, and front-end technologies.
          </p>
        </div>
      </div>

      <Image
        src={Thinking}
        width={500}
        alt="an asian cartoon thinking"
        className="scale-75 xl:scale-100"
      />
    </div>
  );
};
export default About;
