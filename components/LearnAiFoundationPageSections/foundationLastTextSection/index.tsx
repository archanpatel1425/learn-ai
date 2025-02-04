import React from "react";
import Image from "next/image";

interface Block {
  desc_one: string;
  desc_two: string;
  image: string;
}

const FoundationLastTextSection = (block: Block) => {
  const { desc_one, desc_two, image } = block;
  return (
    <div>
      <p>{desc_one}</p>
      <p>{desc_two}</p>
      <div>
        <Image src={image} alt="Focus Image" height={300} width={300} />
      </div>
    </div>
  );
};

export default FoundationLastTextSection;
