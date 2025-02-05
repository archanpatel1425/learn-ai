import Image from 'next/Image';
import React from 'react';


// interface Card {
//   description_prefix: string;
//   description_highlight: string;
//   description_middle?: string;
//   description_highlightTwo?: string;
//   description_text: string;
//   description_highlightThree?: string;
//   description_suffix: string;
//   right: boolean;
//   image: string;
// }

// interface Block {
//   title: string;
//   cards: Card[];
// }

const CareerworkingSection = (block) => {
  const { title, cards } = block;
  return (
    <div className="mt-12">
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

export default CareerworkingSection;
