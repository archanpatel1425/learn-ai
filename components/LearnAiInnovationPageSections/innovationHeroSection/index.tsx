import React from "react";
import Image from "next/image";

interface Block {
  title_prefix: string;
  highlight: string;
  background_img: string;
  background_imgTwo: string;
}

const InnovationHeroSection = (block: Block) => {
  const { title_prefix, highlight, background_img, background_imgTwo } = block;
  return (
    <div>
      <div>
        <h1>
          {title_prefix} <span>{highlight}</span>
        </h1>
      </div>
      <div>
        <Image
          src={background_img}
          alt="Background Image One"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src={background_imgTwo}
          alt="Background Image Two"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default InnovationHeroSection;
