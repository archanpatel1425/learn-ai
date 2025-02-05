import React from "react";

const Statement = ({ block, dataBinding }) => {

  const { title, description } = block;
  return (
    <div className="mt-12" data-cms-bind={dataBinding}>
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  );
};

export default Statement;
