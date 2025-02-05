import Image from "next/image";
import React from "react";



const LastText = ({ block, dataBinding }) => {
    const { desc_one, desc_two, image } = block;
    return (
        <div data-cms-bind={dataBinding}>
            <p>{desc_one}</p>
            <p>{desc_two}</p>
            <div>
                <Image src={image} alt="Focus Image" height={300} width={300} />
            </div>
        </div>
    );
};

export default LastText;
