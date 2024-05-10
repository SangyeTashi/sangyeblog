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
    <a href={url}>
      <div className="group relative  cursor-pointer overflow-hidden rounded-xl object-cover  outline outline-1 outline-gray-100 transition-all duration-1000">
        <div className="absolute inset-0 flex flex-col justify-end space-y-3 bg-gradient-to-b from-gray-950/30 to-gray-950 p-4 hover:backdrop-blur-sm ">
          <h4 className="text-2xl font-semibold">{title}</h4>
          <p>{description}</p>
        </div>
        <Image
          className=""
          src={image}
          width={300}
          alt="website screenshot image"
        />
      </div>
    </a>
  );
};
export default Card;
