import React from "react";

const HoverCard = ({ block, dataBinding }) => {
    const { title, hoverCards } = block;
    return (
        <div className="mt-12" data-cms-bind={dataBinding}>
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

export default HoverCard;
