import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center bg-[#000000] h-screen overflow-x-hidden relative">
      <h1 className="absolute md:top-1/2 sm:top-[30%] top-[35%] lg:left-[26px] md:left-[30px] left-[40px] z-[2] text-white lg:text-[120px] md:text-[92px] sm:text-[70px] text-[30px] font-[400] md:leading-[119.31px] sm:leading-[80px] leading-[40px] pe-[30px]">
        Hai sa construim impreuna
      </h1>
      <div className="w-full h-screen flex items-center justify-end relative">
        <div className="w-fit h-screen">
          <img
            height={1270}
            width={780}
            className="md:h-auto md:w-auto h-[100%] w-[100%] object-cover md:p-[30px] p-[20px]"
            src="/assets/contact-img.svg"
            alt="contact-img"
          />
          <div className="w-full absolute 2xl:top-[79%] xl:top-[80%] lg:top-[103%] md:top-[100%] sm:top-[65%] top-[56%] ms-[45px] mx-auto flex items-start justify-start  me-auto transform -translate-y-1/2">
            <Link
              href="/contact/contactinfo"
              className="font-clashdisplay-regular md:p-[20px] sm:p-[15px] p-[10px] text-white lg:text-[40px] md:text-[35px] sm:text-[24px] text-[19px] border-2 border-[#FFFFFF1A] md:font-[400] font-[500] leading-[49.2px] bg-[#FFFFFF52] hover:bg-[#ffffff62] rounded-[70px] transition duration-300 ease-in-out backdrop-blur-sm"
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
