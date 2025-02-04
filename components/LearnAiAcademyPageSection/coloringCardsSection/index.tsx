import React from "react";
import Image from "next/image";

interface Card {
  title: string;
  description: string;
  descriptionTwo: string;
  btn_text: string;
  btn_link: string;
  image?: string;
}

interface Block {
  cards: Card[];
}

const ColoringCardsSection = (block: Block) => {
  const { cards } = block;
  return (
    <div>
      {cards.map((card, index) => (
        <div key={index}>
          {card.title && <h3>{card.title}</h3>}
          <p>{card.description}</p>
          <p>{card.descriptionTwo}</p>
          <a href={card.btn_link}>
            <button>{card.btn_text}</button>
          </a>
          {card.image && (
            <div>
              <Image
                src={card.image}
                alt={`Image for ${card.title}`}
                height={100}
                width={100}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ColoringCardsSection;
