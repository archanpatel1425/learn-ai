import Image from "next/image";
import React from "react";


const Hero = ({ block, dataBinding }) => {
    const { title_prefix, highlight, background_img, background_imgTwo } = block;
    return (
        <div data-cms-bind={dataBinding}>
            <div>
                <h1>
                    {title_prefix} <span>{highlight}</span>
                </h1>
            </div>
            <div>
                <Image
                    src={background_img}
                    alt="Background Image One"
                    layout="responsive"
                    width={100}
                    height={100}
                />
            </div>
            <div>
                <Image
                    src={background_imgTwo}
                    alt="Background Image Two"
                    layout="responsive"
                    width={100}
                    height={100}
                />
            </div>
        </div>
    );
};

export default Hero;
