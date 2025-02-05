import Link from "next/link";
import React from "react";
import headerData from "../../data/header.json";
import Image from "next/Image";

const Header = () => {
  const { logo, SocialIcons, items } = headerData;

  return (
    <div>
      <Image alt={"Logo Image"} src={logo} height={100} width={100} />

      {items &&
        items?.map((item, index) => {
          return (
            <div key={index}>
              {item?.link ? (
                <Link href={item?.link || "#"}>{item?.text}</Link>
              ) : (
                <div>
                  <span>{item?.text}</span>
                  <span>{item?.description}</span>

                  {item?.cta?.map((ctaItem, ctaIndex) => (
                    <Link href={ctaItem?.link} key={ctaIndex}>
                      {ctaItem?.label}
                    </Link>
                  ))}

                  {item?.submenu?.map((submenuItem, submenuIndex) => (
                    <Link href={submenuItem?.link} key={submenuIndex}>
                      {submenuItem?.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}

      {SocialIcons?.map((item, index) => (
        <Link href={item?.link} key={index}>
          {item?.icon}
        </Link>
      ))}
    </div>
  );
};

export default Header;
