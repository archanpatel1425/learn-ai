import Image from "next/image";
import Link from "next/link";
import React from "react";


const ReshapingCareer = ({ block, dataBinding }) => {
    const { title, description, btn_text, btn_link, Images } = block;
    return (
        <div data-cms-bind={dataBinding}>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link href={btn_link}>
                <button>{btn_text}</button>
            </Link>

            <div>
                {Images.map((img, index) => (
                    <div key={index}>
                        <Image
                            src={img.image}
                            alt={`Reshaping Career Image ${index + 1}`}
                            height={300}
                            width={300}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReshapingCareer;
