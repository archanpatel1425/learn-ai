import Image from "next/image";
import React from "react";

const HomeHero = ({ block, dataBinding }) => {
    const { title, description, image, alt } = block;
    return (
        <div className="mt-12" data-cms-bind={dataBinding}>
            <h2>{title}</h2>
            <p>{description}</p>
            <Image src={image} alt={alt} width={100} height={100} />
        </div>
    );
};

export default HomeHero;
