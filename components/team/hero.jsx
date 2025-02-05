import Image from "next/image";
import React from "react";


const Hero = ({ block, dataBinding }) => {
  const { title, title_suffix, highlight, description, background_image } =
    block;
  return (
    <div className="mt-12" data-cms-bind={dataBinding}>
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

export default Hero;
