import Link from "next/link";
import React from "react";

const Contact = ({ block, dataBinding }) => {
  const { button_text, button_link, title } = block;
  return (
    <div className="mt-12" data-cms-bind={dataBinding}> 
      <h2>{title}</h2>
      <Link href={button_link || "#"}>{button_text}</Link>
    </div>
  );
};

export default Contact;
