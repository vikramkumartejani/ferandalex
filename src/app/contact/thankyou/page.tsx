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
            className="object-cover p-[30px] h-[1172px] w-full"
            src="/assets/contact-img2.svg"
            alt="contact-img"
          />
          <div className="w-full absolute top-1/2 flex flex-col  items-center justify-center gap-[30px] px-[30px]">
            <h1 className="max-w-[800px] text-center justify-center text-white text-[121px] font-[400] leading-[119.31px]">
              Iti multumim pentru interes!
            </h1>
            <p className="text-white text-[40px] leading-[49.2px] font-[400] font-clashdisplay-regular">
              Te vom contacta in curand.
            </p>
            <Link
              href="/contact"
              className="font-clashdisplay-regular px-[40px] py-[20px] text-white text-[40px] border-2 border-[#FFFFFF1A] font-[400] leading-[49.2px] bg-[#FFFFFF52] hover:bg-[#ffffff62] rounded-[70px] transition duration-300 ease-in-out"
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
