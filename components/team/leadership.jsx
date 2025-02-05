import Image from "next/image";
import React from "react";


const Leadership = ({ block, dataBinding }) => {
  const { title, team_members } = block;
  return (
    <div className="mt-12" data-cms-bind={dataBinding}>
      <h2>{title}</h2>
      {team_members.map((item, index) => {
        return (
          <div key={index}>
            <Image
              src={item.image}
              alt={item?.image_alt || ""}
              height={100}
              width={100}
            />
            <Image
              src={item.linkedin_logo}
              alt="LinkedIn Logo"
              height={100}
              width={100}
            />
            <h2>{item.name}</h2>
            <span>{item.role}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Leadership;
