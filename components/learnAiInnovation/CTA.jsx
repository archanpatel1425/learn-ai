import React from "react";

const CTA = ({ block, dataBinding }) => {
    const { description, btn_text, btn_link } = block;
    return (
        <div className="mt-12" data-cms-bind={dataBinding}>
            <p>{description}</p>
            <a href={btn_link}>
                <button>{btn_text}</button>
            </a>
        </div>
    );
};

export default CTA;
