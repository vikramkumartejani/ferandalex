"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animations
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="flex items-center justify-center bg-[#000000] min-h-screen lg:h-screen h-[800px]  overflow-hidden relative sm:m-[20px] m-[10px]">
      <h1
        data-aos="fade-up"
        data-aos-delay="700"
        className="text-white lg:text-[90px] md:text-[80px] sm:text-[60px] text-[38px] sm:leading-[85px] leading-[60px] font-bold absolute md:left-[30px] sm:left-[10px] left-0 xlg:top-[35%] lg:top-[35%] top-[23%] z-10"
      >
        Hai sa construim impreuna
      </h1>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full lg:h-screen h-full flex items-center justify-end ">
          <div
            className="h-full w-[70%] md:w-[60%] lg:w-[45%] relative"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <img
              className="h-[1310px] w-full object-cover"
              src="/assets/contact-img.svg"
              alt="contact-img"
            />
            <div className="absolute inset-0 flex w-fit md:mx-0 mx-auto flex-col items-start justify-center xlg:top-[47.5%] lg:top-[47%] md:top-[20%] sm:top-[13%] top-[-6%] gap-6 md:ps-4">
              <Link
                href="/contact/contactinfo"
                className="font-clashdisplay-regular w-full sm:px-6 sm:py-3 px-[10px] py-[4px] text-white text-center lg:text-[30px] md:text-[22px] sm:text-[18px] text-[15px] border-2 border-[#FFFFFF1A] rounded-[70px] bg-[#FFFFFF52] hover:bg-[#ffffff62] transition duration-300 ease-in-out backdrop-blur-sm"
              >
                Completeaza formular
              </Link>
              <Link
                href="/contact/contactinfo"
                className="font-clashdisplay-regular w-full sm:px-6 sm:py-3 px-[10px] py-[4px] text-white text-center lg:text-[30px] md:text-[22px] sm:text-[18px] text-[15px] border-2 border-[#FFFFFF1A] rounded-[70px] bg-[#FFFFFF52] hover:bg-[#ffffff62] transition duration-300 ease-in-out backdrop-blur-sm"
              >
                Scrie-ne pe e-mail
              </Link>
              <Link
                href="/contact/contactinfo"
                className="font-clashdisplay-regular w-full sm:px-6 sm:py-3 px-[10px] py-[4px] text-white text-center lg:text-[30px] md:text-[22px] sm:text-[18px] text-[15px] border-2 border-[#FFFFFF1A] rounded-[70px] bg-[#FFFFFF52] hover:bg-[#ffffff62] transition duration-300 ease-in-out backdrop-blur-sm"
              >
                Suna-ne
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
