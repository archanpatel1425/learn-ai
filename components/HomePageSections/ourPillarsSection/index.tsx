import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Pillar {
  title: string;
  link: string;
  btn: string;
  icon: string;
}

interface Block {
  title: string;
  description: string;
  pillars: Pillar[];
  btn: string;
}

const OurPillarsSection = (block: Block) => {
  const { title, description, pillars } = block;
  return (
    <div className="mt-12">
      <h2>{title}</h2>
      <span>{description}</span>
      {pillars.map((item, index) => {
        return (
          <div key={index}>
            <span>{item?.title}</span>
            <Image src={item?.icon} alt="icon" height={100} width={100} />
            <Link href={item?.link}>
              <span>{item?.btn}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default OurPillarsSection;
