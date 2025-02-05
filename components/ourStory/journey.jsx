import React from "react";
import Image from "next/image";


const Journey = ({ block, dataBinding }) => {
  const { Journey } = block;
  return (
    <div data-cms-bind={dataBinding}>
      {Journey.map((item, index) => (
        <div key={index}>
          <div>
            <h2>{item.year}</h2>
            <h3>{item.title}</h3>
          </div>
          <div>
            <Image
              src={item.image}
              alt={item.image_alt}
              height={100}
              width={100}
            />
          </div>
          <div>{item.description}</div>
          <div>
            <Image
              src={item.half_circle}
              alt={`Half Circle ${item.year}`}
              height={50}
              width={50}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Journey;
