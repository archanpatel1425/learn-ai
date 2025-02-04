import Image from "next/image";
import React from "react";

interface Block {
  title: string;
  title_suffix: string;
  highlight: string;
  description: string;
  background_image: string;
}

const TeamHeroSection = (block: Block) => {
  const { title, title_suffix, highlight, description, background_image } =
    block;
  return (
    <div className="mt-12">
      <Image src={background_image} alt="bg image" height={100} width={100} />
      <h2>
        {title}
        {highlight}
        {title_suffix}
      </h2>
      <span>{description}</span>
    </div>
  );
};

export default TeamHeroSection;
