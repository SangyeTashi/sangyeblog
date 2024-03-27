import React, { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
};

const Pill: React.FC<PillProps> = ({ children }) => {
  return (
    <div className="min-w-14 rounded-full  bg-gradient-to-br from-blue-500 to-purple-500 p-0.5">
      <div className=" flex h-full w-full items-center justify-center rounded-full bg-black px-4 py-2">
        {children}
      </div>
    </div>
  );
};
export default Pill;
