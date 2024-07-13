import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center bg-[#000000] min-h-screen relative">
      <h1 className="absolute z-[999] text-white text-[121px] font-[400] leading-[119.31px]">
        Hai sa construim impreuna
      </h1>
      <div className="w-full flex items-center justify-end py-[30px] relative">
        <div className="relative z-[1]">
          <img
            height={1249}
            width={833}
            src="/assets/contact-img.svg"
            alt="contact-img"
          />
          <button
            className="absolute top-1/2 left-[28%] mt-[130px] px-[20px] py-[20px] transform -translate-x-1/2 -translate-y-1/2 text-white text-[40px] border-2 border-[#FFFFFF1A] font-[400] leading-[49.2px] bg-[#FFFFFF52] rounded-[70px]"
            style={{ zIndex: 10 }}
          >
            Completeaza formular
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
