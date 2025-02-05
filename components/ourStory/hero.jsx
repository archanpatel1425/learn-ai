import Image from "next/image";
import React from "react";

const Hero = ({ block, dataBinding }) => {
  const { above_title, title, title_suffix, below_title, background_image } =
    block;
  return (
    <div data-cms-bind={dataBinding}>
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

export default Hero;
