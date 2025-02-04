import React from "react";
import Image from "next/image";

interface Block {
  title: string;
  image: string;
}

const FoundationTextSection = (block: Block) => {
  const { title, image } = block;
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <Image
          src={image}
          alt="Foundation Section Image"
          height={300}
          width={300}
        />
      </div>
    </div>
  );
};

export default FoundationTextSection;
