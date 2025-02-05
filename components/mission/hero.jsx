import React from "react";

const Hero = ({ block, dataBinding }) => {
  const { title, title_suffix, highlight } = block;
  return (
    <div className="mt-12" data-cms-bind={dataBinding}>
      <h2>
        {title}
        {highlight}
        {title_suffix}
      </h2>
    </div>
  );
};

export default Hero;
