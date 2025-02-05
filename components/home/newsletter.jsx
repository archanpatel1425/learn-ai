import React from "react";

const Newsletter = ({ block, dataBinding }) => {
    const { title, description, form } = block;
    return (
        <div className="mt-12" data-cms-bind={dataBinding}>
            <h2>{title}</h2>
            <span>{description}</span>
            <input type="text" placeholder={form.placeholder} />
            <button>{form.button_text}</button>
        </div>
    );
};

export default Newsletter;
