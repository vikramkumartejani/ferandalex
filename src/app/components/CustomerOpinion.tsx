import React from "react";

const CustomerOpinion = () => {
  return (
    <div className="bg-white flex flex-col gap-[80px] py-[100px] lg:px-[157] md:px-[100px] px-[30px] font-clashdisplay-regular text-[#F26A45] text-[64px] tracking-[9%] leading-[86.24px]">
      <h2 className="font-[700]">OPINIA CLIENTILOR</h2>
      <span className="flex flex-col font-[400] text-black mx-auto max-w-[780px] items-center justify-center">
        <h3 className="text-[64px] leading-[86.24px] tracking-[9%]">
          “Printre putinele firme serioase ramase pe piata”
        </h3>
        <p className="flex items-end justify-end ms-auto italic text-[30px] leading-[40.42px] tracking-[9%]">
          Anton Andrei
        </p>
      </span>
    </div>
  );
};

export default CustomerOpinion;
