import React from "react";
import Image from "next/image";

interface Block {
  title: string;
  description: string;
  side_image: string;
}

const OurStorypassionateSection = (block: Block) => {
  const { title, description, side_image } = block;
  return (
    <div className="mt-12">
      <div>
        <h2>{title}</h2>
      </div>
      <div>{description}</div>
      <div>
        <Image src={side_image} alt="Passionate" height={100} width={100} />
      </div>
    </div>
  );
};

export default OurStorypassionateSection;
