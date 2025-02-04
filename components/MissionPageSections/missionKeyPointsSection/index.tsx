import Image from "next/image";
import React from "react";

interface PointProps {
  image: string;
  image_alt: string;
  title: string;
  description: string;
}

interface Block {
  points: PointProps[];
}

const MissionKeyPointsSection = (block: Block) => {

  const { points } = block;
  return (
    <div className="mt-12">
      {points.map((item, index) => {
        return (
          <div key={index}>
            <Image
              src={item.image}
              alt={item.image_alt}
              height={100}
              width={100}
            />
            <h2>{item.title}</h2>
            <span>{item.description}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MissionKeyPointsSection;
