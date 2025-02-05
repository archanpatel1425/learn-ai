import Link from "next/link";
import React from "react";


const OurMission = ({ block, dataBinding }) => {
    const { title, description, updates } = block;
    return (
        <div className="mt-12" data-cms-bind={dataBinding}>
            <h2>{title}</h2>
            <span>{description}</span>
            {updates.map((item, index) => {
                return (
                    <div key={index}>
                        <span>{item.title}</span>
                        <span>{item.date}</span>
                        <Link href={item.link}>
                            <span>{item.text}</span>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default OurMission;
