import Image from "next/Image";
import React from "react";

// interface Block {
//     title_prefix: string;
//     highlight: string;
//     title_suffix: string;
//     highlightTwo: string;
//     title_suffixTwo: string;
//     description: string;
//     background_img: string;
//     background_imgTwo: string;
// }

const CareerHeroSection = (block) => {
    const {
        title_prefix,
        highlight,
        title_suffix,
        highlightTwo,
        title_suffixTwo,
        description,
        background_img,
        background_imgTwo,
    } = block;
    return (
        <div className="mt-12">
            <h2>
                {title_prefix}
                {highlight}
                {title_suffix}
                {highlightTwo}
                {title_suffixTwo}
            </h2>
            <span>{description}</span>
            <Image src={background_img} alt="bg image" height={100} width={100} />
            <Image src={background_imgTwo} alt="bg image" height={100} width={100} />
        </div>
    );
};

export default CareerHeroSection;
