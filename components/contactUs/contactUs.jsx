import Image from "next/image";
import Link from "next/link";
import React from "react";


const ContactUsPageSection = ({ block, dataBinding }) => {
    const {
        title,
        description,
        insta_image,
        insta_url,
        linkedin_image,
        linkedin_url,
        submit_btn,
    } = block;
    return (
        <div data-cms-bind={dataBinding}>
            <div>
                <Link href={insta_url}>
                    <Image src={insta_image} alt="Insta" height={100} width={100} />
                </Link>
                <Link href={linkedin_url}>
                    <Image src={linkedin_image} alt="linkedin" height={100} width={100} />
                </Link>
            </div>
            <div>
                {title}
                {description}
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Email" />
                <input type="number" placeholder="Phone No" />
                <input type="text" placeholder="Reason For Enquiry" />
                <input type="textarea" placeholder="Enter Your Message" />
                <button>{submit_btn}</button>
            </div>
        </div>
    );
};

export default ContactUsPageSection;
