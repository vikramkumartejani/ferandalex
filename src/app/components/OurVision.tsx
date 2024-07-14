import React from "react";

const OurVision = () => {
  return (
    <div className="min-h-[1514px]">
      <h2 className="text-white pt-[160px] ps-[120px] text-[#F26A45] text-[64px] font-[700] leading-[86.24px] tracking-[1%] font-clashdisplay-regular">
        Viziunea noastra
      </h2>
      <div className="flex items-end justify-between mb-auto h-full text-white ps-[81px] text-[30px] font-[400] leading-[40.42px] tracking-[9%] font-clashdisplay-regular">
        <div className="flex flex-col gap-[60px]">
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
        <div className="flex me-auto h-full">
          <img
            className=""
            height={"1268px"}
            src="/assets/architecture.svg"
            alt="architecture"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
