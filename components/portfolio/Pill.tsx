import React, { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  className: string;
};

const Pill: React.FC<PillProps> = ({ children, className }) => {
  return (
    <div className=" inline-block  min-w-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
      <div
        className={`flex h-full w-full items-center rounded-full bg-black px-5 py-2 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
export default Pill;
