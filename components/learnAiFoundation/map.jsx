import Image from "next/image";
import React from "react";


const Map = ({ block, dataBinding }) => {
    const { map_img, prefix_text, highlight, suffix } = block;
    return (
        <div data-cms-bind={dataBinding}>
            <p>
                {prefix_text} <span className="text-[#9370E4]">{highlight}</span>{" "}
                {suffix}
            </p>
            <div>
                <Image
                    src={map_img}
                    alt="Africa Map"
                    layout="responsive"
                    width={1000}
                    height={600}
                />
            </div>
        </div>
    );
};

export default Map;
