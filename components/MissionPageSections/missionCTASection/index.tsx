import Image from "next/image";
import React from "react";

interface CardProps {
  icon: string;
  title: string;
  button_text: string;
  hover_text: string;
}

interface Block {
  cards: CardProps[];
}

const MissionCTASection = (block: Block) => {
  const { cards } = block;
  return (
    <div className="mt-12">
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

export default MissionCTASection;
