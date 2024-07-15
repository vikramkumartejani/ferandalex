import Link from "next/link";
import React from "react";

const ThankYou = () => {
  return (
    <div className="flex items-center bg-[#000000] h-screen overflow-x-hidden relative">
      <div className="w-full h-screen flex items-center justify-end relative">
        <div className="w-full h-screen">
          <img
            height={"100%"}
            width={"100%"}
            className="object-cover md:p-[30px] sm:p-[20px] p-[10px] h-[1172px] w-full"
            src="/assets/contact-img2.svg"
            alt="contact-img"
          />
          <div className="w-full absolute top-1/2 flex flex-col  items-center justify-center sm:gap-[30px] gap-[18px] px-[30px]">
            <h1 className="max-w-[800px] text-center justify-center text-white md:text-[121px] sm:text-[89px] text-[40px] font-[400] md:leading-[119.31px] sm:leading-[100px] leading-[50px]">
              Iti multumim pentru interes!
            </h1>
            <p className="text-white md:text-[40px] sm:text-[30px] text-[20px] leading-[49.2px] font-[400] font-clashdisplay-regular">
              Te vom contacta in curand.
            </p>
            <Link
              href="/contact"
              className="font-clashdisplay-regular md:px-[40px] sm:px-[30px] px-[20px] md:py-[20px] sm:py-[15px] py-[10px] text-white md:text-[40px] sm:text-[34px] text-[28px] border-2 border-[#FFFFFF1A] font-[400] leading-[49.2px] bg-[#FFFFFF52] hover:bg-[#ffffff62] rounded-[70px] transition duration-300 ease-in-out"
              style={{ zIndex: 10 }}
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
