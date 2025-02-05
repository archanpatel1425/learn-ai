import Image from "next/image";
import React from "react";

const working = ({ block, dataBinding }) => {
  const { title, cards } = block;
  return (
    <div className="mt-12" data-cms-bind={dataBinding}>
      <h2>{title}</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className={`card ${card.right ? "right" : "left"}`}>
            <Image
              src={card.image}
              alt={`card-image-${index}`}
              width={100}
              height={100}
            />
            <div>
              <p>
                {card.description_prefix}
                <span className="text-[#9370E4]">
                  {card.description_highlight}
                </span>
                {card.description_middle}
                <span className="text-[#9370E4]">
                  {card.description_highlightTwo}
                </span>
                {card.description_text}
                <span className="text-[#9370E4]">
                  {card.description_highlightThree}
                </span>
                {card.description_suffix}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default working;
