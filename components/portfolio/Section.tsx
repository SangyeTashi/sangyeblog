import React, { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <div
      className={`flex min-h-screen w-full items-center justify-center lg:px-24 ${className}`}
    >
      {" "}
      {children}
    </div>
  );
};
export default Section;
