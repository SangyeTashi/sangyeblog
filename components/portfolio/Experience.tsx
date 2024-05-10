import React from "react";

type ExperienceProps = {};

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div className="w-[460px] px-4 lg:w-[700px]">
      <h2 className="mb-8 text-center text-3xl font-bold">Work Experience</h2>

      <div>
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
