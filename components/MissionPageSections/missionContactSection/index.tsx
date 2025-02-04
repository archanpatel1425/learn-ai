import Link from "next/link";
import React from "react";

interface Block {
  title: string;
  button_text: string;
  button_link: string;
}

const MissionContactSection = (block: Block) => {
  const { button_text, button_link, title } = block;
  return (
    <div className="mt-12">
      <h2>{title}</h2>
      <Link href={button_link || "#"}>{button_text}</Link>
    </div>
  );
};

export default MissionContactSection;
