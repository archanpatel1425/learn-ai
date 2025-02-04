import React from "react";
import Image from "next/image";

interface Block {
  map_img: string;
  prefix_text: string;
  highlight: string;
  suffix: string;
}

const FoundationMapSection = (block: Block) => {
  const { map_img, prefix_text, highlight, suffix } = block;
  return (
    <div>
      <p>
        {prefix_text} <span className="text-[#9370E4]">{highlight}</span>{" "}
        {suffix}
      </p>
      <div>
        <Image
          src={map_img}
          alt="Africa Map"
          layout="responsive"
          width={1000}
          height={600}
        />
      </div>
    </div>
  );
};

export default FoundationMapSection;
