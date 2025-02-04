import React from "react";
import Image from "next/image";

interface Block {
  title: string;
  desc_one: string;
  desc_two: string;
  image: string;
}

const FoundationStudentsSection = (block: Block) => {
  const { title, desc_one, desc_two, image } = block;
  return (
    <div>
      <h2>{title}</h2>
      <p>{desc_one}</p>
      <p>{desc_two}</p>
      <div>
        <Image
          src={image}
          alt="E-learning platform for Kenyan students"
          height={300}
          width={300}
        />
      </div>
    </div>
  );
};

export default FoundationStudentsSection;
