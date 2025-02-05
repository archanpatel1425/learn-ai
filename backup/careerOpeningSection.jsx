import Image from "next/Image";
import React from "react";

// interface Card {
//   title: string;
//   description: string;
//   image: string;
//   button_text: string;
// }

// interface Block {
//   title: string;
//   description: string;
//   cards: Card[];
// }

const CareerOpeningSection = (block) => {
  const { title, description, cards } = block;
  return (
    <div className="mt-12">
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

export default CareerOpeningSection;
