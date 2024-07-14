import React from "react";

const Corporate = () => {
  return (
    <div className="bg-[#F26A45]">
      <div className="overflow-x-hidden">
        <h2 className="text-white pt-[160px] lg:ps-[120px] lg:pe-0 px-[81px] text-[#F26A45] text-[64px] font-[700] leading-[86.24px] tracking-[1%] font-clashdisplay-regular">
          CORPORATE
        </h2>
        <div className="flex lg:flex-row flex-col  items-end justify-between mb-auto h-full text-[30px] text-[#EFE8E9] font-[400] leading-[40.42px] tracking-[9%] font-clashdisplay-regular">
          <div className="relative flex me-auto h-[1268px] w-full lg:w-1/2 lg:order-1 order-2">
            <div className="absolute z-2] top-[14%] lg:left-[30%] left-2 w-[820px]">
              <span className="relative z-[1]">
                <img
                  className="h-fit w-[1052px]"
                  src="/assets/CORPORATE.svg"
                  alt="modern"
                />
              </span>
              <span className="relative z-[2]">
                <img
                  className="w-[700px] mt-[-15px]"
                  src="/assets/PROJECTS.svg"
                  alt="architecture"
                />
              </span>
            </div>
            <img
              className="object-cover h-full w-full z-[1]"
              height={"100%"}
              src="/assets/corporate.png"
              alt="corporate"
            />
          </div>
          <div className="flex flex-col gap-[60px] lg:px-[30px] px-[81px] pt-[120px] lg:pb-[100px] pb-[90px] w-full lg:w-[60%] lg:order-2 order-1">
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
