import Image from "next/image";
import React from "react";

const KeyPoints = ({ block, dataBinding }) => {

  const { points } = block;
  return (
    <div className="mt-12" data-cms-bind={dataBinding}>
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

export default KeyPoints;
