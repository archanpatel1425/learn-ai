import Image from "next/image";
import React from "react";


const ColoringCards = ({ block, dataBinding }) => {
    const { cards } = block;
    return (
        <div data-cms-bind={dataBinding}>
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

export default ColoringCards;
