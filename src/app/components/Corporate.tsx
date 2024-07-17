"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Corporate: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="bg-[#F26A45]">
      <div className="overflow-hidden">
        <h2
          className="font-clashdisplay-bold md:pt-[160px] pt-[100px] sm:pb-[80px] pb-[70px] lg:ps-[120px] lg:pe-0 md:px-[81px] sm:px-[50px] px-[40px] text-white md:text-[64px] sm:text-[43px] text-[33px] font-[700] md:leading-[86.24px] leading-[50px] tracking-[0.09em]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          CORPORATE
        </h2>
        <div
          className="flex lg:flex-row flex-col items-end justify-between mb-auto h-full md:text-[30px] sm:text-[24px] text-[18px] text-[#EFE8E9] font-[400] md:leading-[40.42px] sm:leading-[35px] leading-[30px] tracking-[9%] font-clashdisplay-regular"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div
            className="relative flex me-auto lg:h-[1268px] w-full lg:w-1/2 lg:order-1 order-2"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="absolute z-2 md:top-[13%] sm:top-[14%] top-[25%] lg:left-[30%] left-2 w-[820px]">
              <span className="relative z-[2] md:z-0">
                <img
                  className="h-fit lg:w-[1052px]  md:w-[750px] sm:w-[620px] w-[300px]"
                  src="/assets/CORPORATE.svg"
                  alt="modern"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                />
              </span>
              <span className="relative z-[2]">
                <img
                  className="lg:w-[700px] md:w-[650px] sm:w-[540px] w-[260px] md:mt-[-15px] sm:mt-[-10px] mt-[-5px]"
                  src="/assets/PROJECTS.svg"
                  alt="architecture"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                />
              </span>
            </div>
            <img
              className="object-cover lg:h-full lg:w-full w-[80%] md:h-[80%] sm:h-[50%] h-[10%] md:w-full z-[1]"
              src="/assets/corporate.png"
              alt="corporate"
              data-aos="fade-up"
              data-aos-delay="600"
            />
          </div>
          <div
            className="flex flex-col gap-[60px] leading-[22px] md:leading-normal lg:px-[30px] md:px-[81px] sm:px-[25px] px-[20px] lg:pt-[120px] md:pt-[80px] pt-[40px] lg:pb-[100px] pb-0 w-full lg:w-[60%] lg:order-2 order-1"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <p>
              Echipa noastra de experti in constructii si amenajari interioare
              ofera servicii complete pentru companiile care îsi doresc sa
              creeze un mediu de lucru modern si eficient. De la proiectarea si
              construirea cladirilor de birouri pana la amenajarea interioara si
              exterioara a spatiilor, ne adaptam nevoilor si bugetului fiecarui
              client.
            </p>
            <p>
              Indiferent daca aveti nevoie de un spatiu nou construit sau doriti
              sa renovati si sa modernizati birourile existente, suntem aici
              pentru a va ajuta sa creati un mediu de lucru care sa inspire si
              sa motiveze angajatii.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
