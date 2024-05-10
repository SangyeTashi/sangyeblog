import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { MdEmail } from "react-icons/md";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="text-lg">
      <h2 className="mb-5 text-center text-5xl font-bold">Contact Me</h2>
      <div className="flex flex-col space-y-2">
        <a href="mailto:sangyetashi2@gmail.com">
          <div className="email flex items-center space-x-4">
            <MdEmail />
            <span>sangyetashi2@gmail.com</span>
          </div>
        </a>
        <a href="https://www.instagram.com/sangyetashi">
          <div className="ig flex items-center space-x-4">
            <CgInstagram />
            <span>@sangyetashi</span>
          </div>
        </a>
        <a href="https://twitter.com/SangyeTashi">
          <div className="x flex items-center space-x-4">
            <BsTwitterX />
            <span>@sangyetashi</span>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Contact;
