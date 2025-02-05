import React from "react";

const WhyMatters = ({ block, dataBinding }) => {
  const { title, description } = block;
  return (
    <div className="mt-12" data-cms-bind={dataBinding}>
      <div className="mt-12">
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default WhyMatters;
