import React from "react";

interface Block {
  title: string;
  title_suffix: string;
  highlight: string;
}

const MissionHeroSection = (block: Block) => {
  const { title, title_suffix, highlight } = block;
  return (
    <div className="mt-12">
      <h2>
        {title}
        {highlight}
        {title_suffix}
      </h2>
    </div>
  );
};

export default MissionHeroSection;
