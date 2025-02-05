import React from "react";
import Image from "next/image";


const Passionate = ({ block, dataBinding }) => {
  const { title, description, side_image } = block;
  return (
    <div className="mt-12" data-cms-bind={dataBinding}>
      <div>
        <h2>{title}</h2>
      </div>
      <div>{description}</div>
      <div>
        <Image src={side_image} alt="Passionate" height={100} width={100} />
      </div>
    </div>
  );
};

export default Passionate;
