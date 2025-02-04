import React from "react";

interface HoverCard {
  title: string;
  titlt_highlight?: string;
  hover_text: string;
  card_bg: string;
}

interface Block {
  title: string;
  hoverCards: HoverCard[];
}

const InnovationhoverCardSection = (block: Block) => {
  const { title, hoverCards } = block;
  return (
    <div className="mt-12">
      <h2>{title}</h2>
      <div>
        {hoverCards.map((card, index) => (
          <div key={index}>
            <div>
              {card.titlt_highlight && <h3>{card.titlt_highlight}</h3>}
              <h4>{card.title}</h4>
              <p>{card.hover_text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InnovationhoverCardSection;
