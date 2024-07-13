import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center bg-[#000000] h-screen overflow-x-hidden relative">
      <h1 className="absolute top-1/2 lg:left-[26px] md:left-[30px] left-[40px] z-[2] text-white text-[121px] font-[400] leading-[119.31px] pe-[30px]">
        Hai sa construim impreuna
      </h1>
      <div className="w-full h-screen flex items-center justify-end relative">
        <div className="w-fit h-screen">
          <img
            height={1270}
            width={780}
            className="object-cover p-[30px]"
            src="/assets/contact-img.svg"
            alt="contact-img"
          />
          <div className="w-full absolute 2xl:top-[79%] xl:top-[80%] lg:top-[103%] top-[114%] ms-[45px] mx-auto flex items-start justify-start  me-auto transform -translate-y-1/2">
            <Link
              href="/contact/contactinfo"
              className="font-clashdisplay-regular p-[20px] text-white text-[40px] border-2 border-[#FFFFFF1A] font-[400] leading-[49.2px] bg-[#FFFFFF52] hover:bg-[#ffffff62] rounded-[70px] transition duration-300 ease-in-out backdrop-blur-sm"
              style={{ zIndex: 10 }}
            >
              Completeaza formular
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
