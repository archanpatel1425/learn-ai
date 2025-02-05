import Image from "next/image";
import React from "react";


const Student = ({ block, dataBinding }) => {
    const { title, desc_one, desc_two, image } = block;
    return (
        <div data-cms-bind={dataBinding}>
            <h2>{title}</h2>
            <p>{desc_one}</p>
            <p>{desc_two}</p>
            <div>
                <Image
                    src={image}
                    alt="E-learning platform for Kenyan students"
                    height={300}
                    width={300}
                />
            </div>
        </div>
    );
};

export default Student;
