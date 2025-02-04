import Link from "next/link";
import React from "react";

interface UpdateProps {
  title: string;
  date: string;
  link: string;
  text: string;
}

interface Block {
  title: string;
  description: string;
  updates: UpdateProps[];
}

const OurMissionSection = (block: Block) => {
  const { title, description, updates } = block;
  return (
    <div className="mt-12">
      <h2>{title}</h2>
      <span>{description}</span>
      {updates.map((item, index) => {
        return (
          <div key={index}>
            <span>{item.title}</span>
            <span>{item.date}</span>
            <Link href={item.link}>
              <span>{item.text}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default OurMissionSection;
