import Link from "next/link";
import React from "react";


const CareerCTASection = ({ block, dataBinding }) => {
    const { title, btn_text, btn_link } = block;
    return (
        <div className="mt-12" data-cms-bind={dataBinding}>
            <h2>{title}</h2>
            <Link href={btn_link}>
                <button>{btn_text}</button>
            </Link>
        </div>
    );
};

export default CareerCTASection;
