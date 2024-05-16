"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Variant, Variants, motion } from "framer-motion";
type CardProps = {
  title: string;
  url: string;
  description: string;
  image: StaticImageData;
  variant?: Variants;
};

const cardVariant: Variants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 50, opacity: 0 },
};

const Card: React.FC<CardProps> = ({
  variant,
  title,
  url,
  description,
  image,
}) => {
  return (
    <motion.a href={url} viewport={{ once: true }} variants={variant}>
      <div className="group relative  cursor-pointer overflow-hidden rounded-xl object-cover  outline outline-1 outline-gray-400 transition-all duration-1000">
        <div className="absolute inset-0 flex flex-col justify-end space-y-3 bg-gradient-to-b from-gray-950/30 to-black p-4 hover:backdrop-blur-sm ">
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
    </motion.a>
  );
};
export default Card;
