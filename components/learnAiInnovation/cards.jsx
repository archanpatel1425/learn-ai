import Image from "next/image";
import React from "react";

const Cards = ({ block, dataBinding }) => {
    const { cards } = block;
    return (
        <div data-cms-bind={dataBinding}>
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

export default Cards;
