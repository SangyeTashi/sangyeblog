import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { MdEmail } from "react-icons/md";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className=" w-full border-t border-t-gray-600">
      <h2 className="mb-5 mt-10 text-center text-4xl font-bold">Contact</h2>
      <div className="grid grid-cols-3 divide-x divide-gray-600 px-12">
        <a className="block   " href="mailto:sangyetashi2@gmail.com">
          <div className="email mx-auto  flex items-center justify-center space-x-2 ">
            <MdEmail className="mt-1" />
            <span>sangyetashi2@gmail.com</span>
          </div>
        </a>
        <a className="block " href="https://www.instagram.com/sangyetashi">
          <div className="ig mx-auto flex  items-center justify-center space-x-2 ">
            <CgInstagram className="mt-1" />
            <span>@sangyetashi</span>
          </div>
        </a>
        <a className="block" href="https://twitter.com/SangyeTashi">
          <div className="x mx-auto  flex items-center justify-center  space-x-2">
            <BsTwitterX className="mt-1" />
            <span>@sangyetashi</span>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Contact;
