import Image from "next/image";
import React from "react";

const CTA = ({ block, dataBinding }) => {
  const { cards } = block;
  return (
    <div className="mt-12" data-cms-bind={dataBinding}>
      {cards.map((item, index) => {
        return (
          <div key={index}>
            <Image src={item.icon} alt="icon" height={100} width={100} />
            <h2>{item.title}</h2>
            <button>{item.button_text}</button>
            <p>{item.hover_text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CTA;
