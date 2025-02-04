import React from "react";
import Image from "next/image";

interface Card {
  image: string;
  title: string;
}

interface Block {
  round_text: string;
  round_desc: string;
  cards: Card[];
}

const FoundationCardSection = (block: Block) => {
  const { round_text, round_desc, cards } = block;
  return (
    <div>
      <div>
        <h3>{round_text}</h3>
        <p>{round_desc}</p>
      </div>

      <div>
        {cards.map((card, index) => (
          <div key={index}>
            <Image
              src={card.image}
              alt={`Foundation Card Image ${index + 1}`}
              height={200}
              width={200}
            />
            <h4>{card.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundationCardSection;
