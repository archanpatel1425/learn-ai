import Image from "next/image";
import React from "react";



const Hero = ({ block, dataBinding }) => {
    const { title_prefix, highlight, background_img, background_imgTwo } = block;
    return (
        <div className="mt-12" data-cms-bind={dataBinding}>
            <div>
                <h2>
                    {title_prefix} <span>{highlight}</span>
                </h2>
            </div>
            <div>
                <Image
                    src={background_img}
                    alt="Foundation Background Image 1"
                    layout="responsive"
                    width={1000}
                    height={500}
                />
            </div>
            <div>
                <Image
                    src={background_imgTwo}
                    alt="Foundation Background Image 2"
                    layout="responsive"
                    width={1000}
                    height={500}
                />
            </div>
        </div>
    );
};

export default Hero;
