import Image from "next/image";
import React from "react";

interface Block {
  above_title: string;
  title: string;
  title_suffix: string;
  below_title: string;
  background_image: string;
}

const OurStoryHeroSection = (block: Block) => {
  const { above_title, title, title_suffix, below_title, background_image } =
    block;
  return (
    <div>
      <div>{above_title}</div>
      <div>
        <h1>
          {title} <span>{title_suffix}</span>
        </h1>
      </div>
      <div>{below_title}</div>
      <div>
        <Image
          src={background_image}
          alt="Background"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default OurStoryHeroSection;
