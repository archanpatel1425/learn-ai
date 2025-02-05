import Image from "next/image";
import React from "react";


const Opening = ({ block, dataBinding }) => {
  const { title, description, cards } = block;
  return (
    <div className="mt-12" data-cms-bind={dataBinding}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="openings-container">
        {cards.map((card, index) => (
          <div key={index} className="opening-card">
            <Image
              src={card.image}
              alt={`opening-image-${index}`}
              className="opening-image"
              width={100}
              height={100}
            />
            <div className="opening-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button className="find-out-more-button">
                {card.button_text}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opening;
