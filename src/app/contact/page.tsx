import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center bg-[#000000] min-h-screen relative">
      <h1 className="z-[999] text-white text-[121px] font-[400] leading-[119.31px]">
        Hai sa construim impreuna
      </h1>
      <div className="absolute w-full flex items-center justify-end py-[30px] relative">
        <div className="absolute w-full">
          <img
            height={1249}
            width={833}
            className="object-cover"
            src="/assets/contact-img.svg"
            alt="contact-img"
          />
          <Link
            href="/contact/contactinfo"
            className="absolute top-1/2 left-[28%] mt-[130px] px-[20px] py-[20px] transform -translate-x-1/2 -translate-y-1/2 text-white text-[40px] border-2 border-[#FFFFFF1A] font-[400] leading-[49.2px] bg-[#FFFFFF52] rounded-[70px]"
            style={{ zIndex: 10 }}
          >
            Completeaza formular
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
