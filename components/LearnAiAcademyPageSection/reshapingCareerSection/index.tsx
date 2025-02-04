import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageItem {
  image: string;
}

interface Block {
  title: string;
  description: string;
  btn_text: string;
  btn_link: string;
  Images: ImageItem[];
}

const ReshapingCareerSection = (block: Block) => {
  const { title, description, btn_text, btn_link, Images } = block;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={btn_link}>
        <button>{btn_text}</button>
      </Link>

      <div>
        {Images.map((img, index) => (
          <div key={index}>
            <Image
              src={img.image}
              alt={`Reshaping Career Image ${index + 1}`}
              height={300}
              width={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReshapingCareerSection;
