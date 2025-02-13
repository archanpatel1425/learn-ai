import Image from "next/image";
import React from "react";

interface Answer {
  title: string;
  description: string;
  Image: string;
}

interface Block {
  title: string;
  Answers: Answer[];
}

const CareerWhyJoinSection = (block: Block) => {
  const { title, Answers } = block;
  return (
    <div className="mt-12">
      <h2>{title}</h2>
      <div className="answers-container">
        {Answers.map((answer, index) => (
          <div key={index}>
            <Image
              src={answer.Image}
              alt={`answer-image-${index}`}
              className="answer-image"
              width={100}
              height={100}
            />
            <div>
              <h3 className="text-[#9370E4]">{answer.title}</h3>
              <p>{answer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerWhyJoinSection;
