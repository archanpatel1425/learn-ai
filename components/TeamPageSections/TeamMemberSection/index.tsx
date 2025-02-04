import Image from "next/image";
import React from "react";

interface TeamMember {
  image: string;
  image_alt?: string;
  linkedin_logo: string;
  name: string;
  role: string;
}

interface TeamMemberSectionProps {
  title: string;
  team_members: TeamMember[];
}

const TeamMemberSection = (block: TeamMemberSectionProps) => {
  const { title, team_members } = block;
  return (
    <div className="mt-12">
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

export default TeamMemberSection;
