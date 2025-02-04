import React from "react";

interface NumberProps {
  prefix: string;
  suffix: string;
  number: number;
  text: string;
}

interface Block {
  title: string;
  numbers: NumberProps[];
}

const IndustryFectsSection = (block: Block) => {
  const { title, numbers } = block;
  return (
    <div className="mt-12">
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

export default IndustryFectsSection;
