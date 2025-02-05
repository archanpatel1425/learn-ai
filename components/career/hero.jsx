import Image from "next/image";
import React from "react";

const Hero = ({ block, dataBinding }) => {
  const {
    title_prefix,
    highlight,
    title_suffix,
    highlightTwo,
    title_suffixTwo,
    description,
    background_img,
    background_imgTwo,
  } = block;
  return (
    <div className="mt-12" data-cms-bind={dataBinding}>
      <h2>
        {title_prefix}
        {highlight}
        {title_suffix}
        {highlightTwo}
        {title_suffixTwo}
      </h2>
      <span>{description}</span>
      <Image src={background_img} alt="bg image" height={100} width={100} />
      <Image src={background_imgTwo} alt="bg image" height={100} width={100} />
    </div>
  );
};

export default Hero;
