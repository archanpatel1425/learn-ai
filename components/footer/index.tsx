import React from "react";
import FooterData from "../../data/footer.json";
import Link from "next/link";

interface LinkItem {
  url: string;
  text?: string;
  platform?: string;
}

interface FooterDataType {
  title: string;
  description: string;
  social_links: LinkItem[];
  main_links: LinkItem[];
  other_links: LinkItem[];
}

const Footer = () => {
  const { title, description, social_links, main_links, other_links } =
    FooterData as FooterDataType;

  return (
    <div className="mt-12">
      <h2>{title}</h2>
      <span>{description}</span>
      {social_links?.map((item, index) => {
        return (
          <div key={index}>
            <Link href={item.url || "#"}>
              <span>{item.platform}</span>
            </Link>
          </div>
        );
      })}

      {main_links?.map((item, index) => {
        return (
          <div key={index}>
            <Link href={item.url || "#"}>
              <span>{item.text}</span>
            </Link>
          </div>
        );
      })}

      {other_links?.map((item, index) => {
        return (
          <div key={index}>
            <Link href={item?.url || "#"}>
              <span>{item.text}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
