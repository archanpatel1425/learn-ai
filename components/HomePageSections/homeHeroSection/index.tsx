import Image from "next/image";
import React from "react";

interface Block {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const HomeHeroSection = (block: Block) => {
  const { title, description, image, alt } = block;
  return (
    <div className="mt-12">
      <h2>{title}</h2>
      <p>{description}</p>
      <Image src={image} alt={alt} width={100} height={100} />
    </div>
  );
};

export default HomeHeroSection;
