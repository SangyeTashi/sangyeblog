import React, { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={` flex w-full items-center justify-center py-24 lg:px-24 ${className}`}
    >
      {" "}
      {children}
    </section>
  );
};
export default Section;
