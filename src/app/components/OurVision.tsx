"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurVision: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <h2
        className="pt-[50px] md:pt-[160px] lg:px-[120px] md:px-[80px] px-[25px] text-[#F26A45] md:text-[64px] text-[35px] font-[700] md:leading-[86.24px] leading-[50px] tracking-[1%] font-clashdisplay-regular"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Viziunea noastra
      </h2>
      <div
        className="flex lg:flex-row flex-col lg:order-1 order-2 items-end  mb-auto h-full text-[#EFE8E9] md:text-[30px] text-[22px] font-[400] leading-[30px] md:leading-[40.42px] tracking-[9%] font-clashdisplay-regular"
        data-aos="fade-up"
      >
        <div
          className="flex  flex-col gap-[60px] lg:ps-[81px] md:ps-[80px] ps-[25px] pe-[25px] lg:pe-0 md:pe-[80px] md:py-[250px] py-[50px] w-full lg:w-[60%]"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
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

        <div
          className="relative me-auto h-[1268px] w-full lg:w-1/2 lg:order-2 order-1 vision-large"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <div className="absolute z-[999] lg:top-[14%] lg:right-0 w-[820px]">
            <img
              className="h-fit lg:w-[464px] w-[400px] ms-[5px]"
              src="/assets/MODERN.svg"
              alt="modern"
              data-aos="zoom-in"
              data-aos-delay="1400"
            />
            <img
              className="lg:w-[1276px] md:w-[768px] mt-[-25px]"
              src="/assets/architectureText.svg"
              alt="architecture"
              data-aos="zoom-in"
              data-aos-delay="1600"
            />
          </div>
          <img
            className="object-cover h-full w-full"
            height={"100%"}
            src="/assets/architecture.svg"
            alt="architecture"
            data-aos="fade-up"
            data-aos-delay="1800"
          />
        </div>

        <div
          className="relative me-auto md:h-[1268px] h-[600px] w-full lg:w-1/2 lg:order-2 order-1 vision-small"
          data-aos="fade-up"
          data-aos-delay="2000"
        >
          <div className="absolute z-[999] lg:top-[14%] top-[35%] lg:right-0 lg:w-[820px] md:w-[740px] sm:w-[600px] w-[300px] mx-auto left-1/2 transform -translate-x-1/2">
            <img
              className="h-fit lg:w-[464px] md:w-[400px] sm:w-[332px] w-[200px] md:ms-[16px] sm:ms-[10px] ms-[5px]"
              src="/assets/MODERN.svg"
              alt="modern"
              data-aos="zoom-in"
              data-aos-delay="2200"
            />
            <img
              className="lg:w-[1276px] md:w-[758px] sm:mt-[-11px] mt-[-7px]"
              src="/assets/architectureText.svg"
              alt="architecture"
              data-aos="zoom-in"
              data-aos-delay="2400"
            />
          </div>
          <img
            className="object-cover h-full w-full"
            height={"100%"}
            src="/assets/architecture.svg"
            alt="architecture"
            data-aos="fade-up"
            data-aos-delay="2600"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
