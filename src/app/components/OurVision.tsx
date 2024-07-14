import React from "react";

const OurVision = () => {
  return (
    <div className="overflow-x-hidden">
      <h2 className="text-white pt-[160px] lg:ps-[120px] px-[81px] text-[#F26A45] text-[64px] font-[700] leading-[86.24px] tracking-[1%] font-clashdisplay-regular">
        Viziunea noastra
      </h2>
      <div className="flex lg:flex-row flex-col lg:order-1 order-2 items-end justify-between mb-auto h-full text-[#EFE8E9] text-[30px] font-[400] leading-[40.42px] tracking-[9%] font-clashdisplay-regular">
        <div className="flex flex-col gap-[60px] ps-[81px] py-[200px] w-full lg:w-[60%]">
          <p>
            Viziunea noastra asupra arhitecturii moderne se bazeaza pe eleganta
            si simplitate. Credem ca designul bine gandit îmbunatateste atat
            estetica, cat și functionalitatea spatiilor, creand armonie și
            confort.
          </p>
          <p>
            Abordam fiecare proiect respectand calitatea materialelor, combinand
            tehnologia avansata cu maiestria traditionala. Colaboram strans cu
            clientii pentru a transforma viziunea lor în realitate, asigurand o
            executie perfecta a lucrarii.
          </p>
        </div>
        <div className="relative flex me-auto h-[1268px] w-full lg:w-1/2 lg:order-2 order-1">
          <div className="absolute z-[999] top-[14%] right-0 w-[820px]">
            <img
              className="h-fit w-[464px] ms-[px]"
              src="/assets/MODERN.svg"
              alt="modern"
            />
            <img
              className="w-[1276px] mt-[-25px]"
              src="/assets/architectureText.svg"
              alt="architecture"
            />
          </div>
          <img
            className="object-cover h-full w-full"
            height={"100%"}
            src="/assets/architecture.svg"
            alt="architecture"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
