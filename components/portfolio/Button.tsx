import React, { ReactNode } from "react";

type ButtonProps = { children: ReactNode };

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <div>{children}</div>;
};
export default Button;
