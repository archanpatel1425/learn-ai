import Image from "next/image";
import React from "react";

interface Card {
  title: string;
  image: string;
}

interface Block {
  title: string;
  description: string;
  cards: Card[];
}

const CareerApplySection = (block: Block) => {
  const { title, description, cards } = block;
  return (
    <div className="mt-12">
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        {cards.map((card, index) => (
          <div key={index}>
            <Image
              src={card.image}
              alt={`apply-step-image-${index}`}
              height={100}
              width={100}
            />
            <div>
              <h3>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerApplySection;
