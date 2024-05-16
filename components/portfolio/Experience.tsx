import React from "react";

type ExperienceProps = {};

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div className="relative w-[550px] px-4  text-lg md:px-0 lg:w-[800px]">
      <div className="absolute -bottom-12 left-12 h-32 w-32 rounded-full bg-blue-500 opacity-75 blur-3xl"></div>
      <div className="absolute bottom-8 left-32 h-24 w-48 rounded-full bg-purple-500 opacity-75 blur-3xl"></div>

      <h2 className="mb-8 text-center text-4xl font-bold">Work Experience</h2>

      <div className="rounded-md  px-6 py-12 text-sm outline  outline-1  outline-gray-600  md:px-20 md:text-base ">
        <div className="flex items-end justify-between">
          <div>
            <h3>Part-time Data Annotator</h3>
            <h4>
              At
              <a
                className="italic underline underline-offset-4 "
                href="http://www.monlam.ai"
              >
                {" "}
                MonlamAI
              </a>
            </h4>
          </div>
          <p className="font-thin">Jan,2023 - Current</p>
        </div>
        <ul className="ml-4 mt-5 list-disc text-gray-400">
          <li>
            Analyzed data sets and identified patterns to improve the accuracy
            of annotations.
          </li>
          <li>
            Created scripts to extract relevant data from various sources for
            annotation purposes.
          </li>
          <li>
            Performed quality control checks on annotated datasets before
            releasing them into production environments.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Experience;
