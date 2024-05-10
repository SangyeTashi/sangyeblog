import React from "react";

type EducationProps = {};

const Education: React.FC<EducationProps> = () => {
  return (
    <div>
      <h2 className="mb-8 text-center text-3xl font-bold">Education</h2>
      <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
        <div className="flex w-[21rem] grow flex-col space-y-2  rounded-lg p-5 outline outline-1 outline-gray-500">
          <h3 className="text-lg font-bold">Degree</h3>
          <div>
            <h4 className="text-lg">Bachelor of Computer Application</h4>
            <a
              className="italic underline-offset-2 hover:underline"
              href="https://www.dalailamainstitute.edu.in/"
            >
              The Dalai Lama Institute for Higher Education
            </a>
          </div>
          <p className="font-thin">2020-2023</p>
        </div>
        <div className="flex w-[21rem] grow flex-col space-y-1  rounded-lg p-5 outline outline-1 outline-gray-600">
          <h3 className="text-lg font-bold">Relevant Courses</h3>
          <ul className="ml-4 list-disc">
            <li>Web Programming</li>
            <li>Unix and Linux</li>
            <li>SQL</li>
            <li>Computer Architecture</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Education;
