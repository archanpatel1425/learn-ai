import React from "react";

interface Block {
  description: string;
  btn_text: string;
  btn_link: string;
}

const InnovationctaSection = (block: Block) => {
  const { description, btn_text, btn_link } = block;
  return (
    <div className="mt-12">
      <p>{description}</p>
      <a href={btn_link}>
        <button>{btn_text}</button>
      </a>
    </div>
  );
};

export default InnovationctaSection;
