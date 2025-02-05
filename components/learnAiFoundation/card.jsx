import Image from "next/image";
import React from "react";


const Card = ({ block, dataBinding }) => {
    const { round_text, round_desc, cards } = block;
    return (
        <div data-cms-bind={dataBinding}>
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

export default Card;
