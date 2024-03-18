import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={`mx-auto max-w-3xl px-6 md:max-w-5xl xl:max-w-7xl ${className}`}
    >
      {children}
    </div>
  );
};
export default Container;
