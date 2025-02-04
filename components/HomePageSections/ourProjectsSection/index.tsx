import React from "react";

interface Subsection {
  title: string;
  description: string;
}

interface Section {
  title: string;
  heading?: string;
  description?: string;
  subsections?: Subsection[];
}

interface Block {
  title: string;
  description: string;
  sections: Section[];
}

const OurProjectsSection = (block: Block) => {
  const { title, description, sections } = block;
  return (
    <div className="mt-12">
      <h2>{title}</h2>
      <span>{description}</span>
      {sections.map((item, index) => {
        return (
          <div key={index}>
            <h4>{item?.title}</h4>
            <h2>{item?.heading && item?.heading}</h2>
            <span>{item?.description && item?.description}</span>
            {item?.subsections &&
              item?.subsections.map((subItem, subIndex) => {
                return (
                  <div key={subIndex}>
                    <h2>{subItem?.title}</h2>
                    <p>{subItem?.description}</p>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default OurProjectsSection;
