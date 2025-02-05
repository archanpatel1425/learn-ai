import React from "react";
import Image from "next/image";

const Joinus = ({ block, dataBinding }) => {
  const {
    descriptionOne,
    descriptionTwoPrefix,
    descriptionTwoHighlight,
    descripitonTwoSuffix,
    polygonLeft,
    roundLeft,
    smallRoundLeft,
    RectangleLeft,
    smallRectangleLeft,
    star,
  } = block;
  return (
    <div data-cms-bind={dataBinding}>
      <div>{descriptionOne}</div>
      <div>
        <span>{descriptionTwoPrefix}</span>
        <strong>{descriptionTwoHighlight}</strong>
        <span>{descripitonTwoSuffix}</span>
      </div>

      <div>
        <Image src={polygonLeft} alt="Polygon Left" height={50} width={50} />
        <Image src={roundLeft} alt="Round Left" height={50} width={50} />
        <Image
          src={smallRoundLeft}
          alt="Small Round Left"
          height={50}
          width={50}
        />
        <Image
          src={RectangleLeft}
          alt="Rectangle Left"
          height={50}
          width={50}
        />
        <Image
          src={smallRectangleLeft}
          alt="Small Rectangle Left"
          height={50}
          width={50}
        />
        <Image src={star} alt="Star" height={50} width={50} />
      </div>
    </div>
  );
};

export default Joinus;
