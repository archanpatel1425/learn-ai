import Link from 'next/link';
import React from 'react';

// interface Block {
//   title: string;
//   btn_text: string;
//   btn_link: string;
// }
const CareerCTASection = (block) => {
  const { title, btn_text, btn_link } = block;
  return (
    <div className="mt-12">
      <h2>{title}</h2>
      <Link href={btn_link}>
        <button>{btn_text}</button>
      </Link>
    </div>
  );
};

export default CareerCTASection;
