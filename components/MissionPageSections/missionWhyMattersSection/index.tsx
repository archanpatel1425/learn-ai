import React from "react";

interface Block {
  title: string;
  description: string;
}

const MissionWhyMattersSection = (block: Block) => {
  const { title, description } = block;
  return (
    <div className="mt-12">
      <div className="mt-12">
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default MissionWhyMattersSection;
