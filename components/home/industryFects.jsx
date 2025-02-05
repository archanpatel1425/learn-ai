import React from "react";


const IndustryFects = ({ block, dataBinding }) => {
    const { title, numbers } = block;
    return (
        <div className="mt-12" data-cms-bind={dataBinding}>
            <h2>{title}</h2>
            {numbers.map((item, index) => {
                return (
                    <div key={index}>
                        <span>
                            {item.prefix}
                            {item.number}
                            {item.suffix}
                        </span>
                        <span>{item.text}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default IndustryFects;
