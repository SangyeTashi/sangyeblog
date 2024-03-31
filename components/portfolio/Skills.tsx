import React from "react";
import Pill from "./Pill";
import { FaHtml5, FaCss3, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiChakraui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <div className="flex max-w-3xl flex-col items-center">
      <h2 className="mb-10 text-4xl font-bold text-gray-400">Skills</h2>
      <div className="flex flex-wrap justify-center gap-2 md:text-xl">
        <Pill className="">
          <FaHtml5 />
          <h4 className="ml-3">HTML</h4>
        </Pill>
        <Pill className="">
          <FaCss3 />
          <h4 className="ml-3">CSS</h4>
        </Pill>
        <Pill className="">
          <IoLogoJavascript />
          <h4 className="ml-3">JavaScript</h4>
        </Pill>
        <Pill className="">
          <FaReact />
          <h4 className="ml-3">React</h4>
        </Pill>
        <Pill className="">
          <FaGitAlt />
          <h4 className="ml-3">Git</h4>
        </Pill>
        <Pill className="">
          <SiTailwindcss />
          <h4 className="ml-3">TailWindCSS</h4>
        </Pill>
        <Pill className=" ">
          <SiBootstrap />
          <h4 className="ml-3">BootStrap</h4>
        </Pill>
        <Pill className="">
          <SiChakraui />
          <h4 className="ml-3">ChakraUI</h4>
        </Pill>
      </div>
    </div>
  );
};
export default Skills;
