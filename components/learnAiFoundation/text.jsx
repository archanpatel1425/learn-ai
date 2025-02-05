import Image from "next/image";
import React from "react";

const Text = ({ block, dataBinding }) => {
    const { title, image } = block;
    return (
        <div data-cms-bind={dataBinding}>
            <h2>{title}</h2>
            <div>
                <Image
                    src={image}
                    alt="Foundation Section Image"
                    height={300}
                    width={300}
                />
            </div>
        </div>
    );
};

export default Text;
