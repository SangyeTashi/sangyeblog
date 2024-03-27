import React from "react";
import Pill from "./Pill";

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = () => {
  return (
    <div>
      <h2 className="text-6xl">Skills</h2>
      <div className="flex space-x-3">
        <Pill>HTML</Pill>
        <Pill>CSS</Pill>
        <Pill>JavaScript</Pill>
        <Pill>React</Pill>
        <Pill>Git</Pill>
        <Pill>TailWindCSS</Pill>
        <Pill>DaisyUI</Pill>
        <Pill>ChakraUI</Pill>
      </div>
    </div>
  );
};
export default Skills;
