import React from "react";

const Corporate = () => {
  return (
    <div className="bg-[#F26A45]">
      <div className="overflow-x-hidden">
        <h2 className=" font-clashdisplay-bold md:pt-[160px] pt-[100px] lg:ps-[120px] lg:pe-0 md:px-[81px] sm:px-[25px] px-[20px] text-white md:text-[64px] text-[43px] font-[700] md:leading-[86.24px] leading-[50px] tracking-[0.09em]">
          CORPORATE
        </h2>
        <div className="flex lg:flex-row flex-col  items-end justify-between mb-auto h-full md:text-[30px] text-[24px] text-[#EFE8E9] font-[400] leading-[40.42px] tracking-[9%] font-clashdisplay-regular">
          <div className="relative flex me-auto md:h-[1268px] w-full lg:w-1/2 lg:order-1 order-2">
            <div className="absolute z-2] md:top-[14%] sm:top-[14%] top-[13%] lg:left-[30%] left-2 w-[820px]">
              <span className="relative z-[1]">
                <img
                  className="h-fit lg:w-[1052px] md:w-[750px] sm:w-[620px] w-[300px]"
                  src="/assets/CORPORATE.svg"
                  alt="modern"
                />
              </span>
              <span className="relative z-[2]">
                <img
                  className="lg:w-[700px] md:w-[650px] sm:w-[540px] w-[260px] md:mt-[-15px] sm:mt-[-10px] mt-[-5px]"
                  src="/assets/PROJECTS.svg"
                  alt="architecture"
                />
              </span>
            </div>
            <img
              className="object-cover md:h-full sm:h-[50%] h-[10%] w-full z-[1]"
              src="/assets/corporate.png"
              alt="corporate"
            />
          </div>
          <div className="flex flex-col gap-[60px] lg:px-[30px] md:px-[81px] sm:px-[25px] px-[20px] lg:pt-[120px] md:pt-[80px] pt-[40px] lg:pb-[100px] pb-0 w-full lg:w-[60%] lg:order-2 order-1">
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
