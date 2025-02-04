import React from "react";
import Image from "next/image";

interface Block {
  title_prefix: string;
  highlight: string;
  background_img: string;
  background_imgTwo: string;
}

const AcademyHeroSection = (block: Block) => {
  const { title_prefix, highlight, background_img, background_imgTwo } = block;
  return (
    <div>
      <div>
        <h2>
          {title_prefix} <span>{highlight}</span>
        </h2>
      </div>
      <div>
        <Image
          src={background_img}
          alt="Academy Background Image 1"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <div>
        <Image
          src={background_imgTwo}
          alt="Academy Background Image 2"
          layout="responsive"
          width={1000}
          height={500}
        />
      </div>
    </div>
  );
};

export default AcademyHeroSection;
