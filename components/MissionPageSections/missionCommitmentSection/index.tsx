import React from "react";

interface Block {
  title: string;
  description: string;
}

const MissionCommitmentSection = (block: Block) => {
  const { title, description } = block;
  return (
    <div className="mt-12">
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  );
};

export default MissionCommitmentSection;
