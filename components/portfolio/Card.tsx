import Image, { StaticImageData } from "next/image";
import React from "react";
import screenShot from "../../public/images/unsplashScreenshot.png";

type CardProps = {
  title: string;
  url: string;
  description: string;
  image: StaticImageData;
};

const Card: React.FC<CardProps> = ({ title, url, description, image }) => {
  return (
    <div className="group relative  cursor-pointer overflow-hidden rounded-xl object-cover outline outline-1 outline-gray-100">
      <div className="absolute inset-0 flex translate-y-full flex-col  justify-end space-y-3 bg-gradient-to-b from-gray-950/30 to-gray-950 p-4  transition-all duration-200 group-hover:translate-y-0 ">
        <h4 className="text-2xl">{title}</h4>
        <p>{description}</p>

        <a href={url}>
          <button className="self-end rounded-lg bg-black  px-3 py-1 text-lg outline outline-1 outline-white hover:bg-black/80 ">
            View
          </button>
        </a>
      </div>
      <Image
        className=""
        src={image}
        width={300}
        alt="website screenshot image"
      />
    </div>
  );
};
export default Card;
