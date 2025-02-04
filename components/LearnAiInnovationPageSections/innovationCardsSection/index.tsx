import React from "react";
import Image from "next/image";

interface Card {
  image?: string;
  title: string;
  north_image?: string;
  description?: string;
}

interface Block {
  cards: Card[];
}

const InnovationCardsSection = (block: Block) => {
  const { cards } = block;
  return (
    <div>
      {cards.map((card, index) => (
        <div key={index}>
          {card.image && (
            <Image src={card.image} alt="Card image" height={100} width={100} />
          )}
          <h3>{card.title}</h3>
          {card.description && <p>{card.description}</p>}
          {card.north_image && (
            <Image
              src={card.north_image}
              alt="North logo"
              height={50}
              width={50}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default InnovationCardsSection;
