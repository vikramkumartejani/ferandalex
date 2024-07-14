"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform text-[40px] font-bold -translate-y-1/2 -right-52 cursor-pointer"
      onClick={onClick}
    >
      Next
    </div>
  );
};

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 text-[40px] font-bold -left-52 z-30 rounded-full p-2 cursor-pointer"
      onClick={onClick}
    >
      Previous
    </div>
  );
};

const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="text-white font-clashdisplay-regular">
      <section className="relative">
        <img
          src="/assets/section-shape2.png"
          alt=""
          className="absolute top-0 left-0"
        />
        <img src="/assets/service-bg.jpg" alt="" />
        <img
          src="/assets/SERVICII.svg"
          alt=""
          className=" absolute top-[60%] lg:top-2/3 ml-[5%] w-24 h-auto lg:w-auto uppercase"
        />
        {/* <h1 className="font-extrabold absolute top-[60%] lg:top-2/3 ml-[5%] uppercase text-[20px] leading-[25px] xl:text-[100px] x;:leading-[96px]">
          SERVICII
        </h1> */}
      </section>

      <section className="px-[5%] lg:px-[10%] py-[10%] space-y-[15%] mx-[5%] lg:mx-[15%] border-l border-r border-white ">
        <div className="relative">
          <div className="relative max-h-[900px] rounded-3xl lg:rounded-[140px] overflow-hidden">
            <img
              src="/assets/service-section-bg.jpeg"
              alt="Service Background"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 w-full bg-white/20 rounded-t-3xl lg:rounded-t-[140px] h-[50%] flex items-center justify-center text-[40px] lg:text-[120px] text-center backdrop-blur-sm">
              Constructii
            </div>
          </div>
        </div>
        <p className="px-[10%] lg:px-[20%] text-[15px] lg:text-[30px] leading-[20px] lg:leading-[37px] ">
          Ferandalex ofera servicii complete de constructii, de la planificare
          si proiectare la executie si finisare. Echipa noastra de specialisti
          cu vasta experienta se ocupa de toate etapele procesului de
          constructie, adaptandu-se nevoilor specifice ale fiecarui client.{" "}
          <br /> <br />
          Fie ca doriti sa construiti o casa noua, sa renovati o cladire veche
          sau sa implementati proiecte de amenajare exterioara, Ferandalex este
          partenerul de incredere de care aveti nevoie.
        </p>
      </section>

      <section className="border-t border-white ">
        <div className="mx-[5%] lg:mx-[15%] border-l border-r  border-white ">
          <div className="relative">
            <div className="relative hidden lg:block  overflow-hidden">
              <img
                src="/assets/service-section-bg2.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <img
                src="/assets/interior-design.svg"
                alt=""
                className="absolute top-[15%] right-0"
              />
              {/* <div className="absolute top-[15%] leading-[100px] font-extrabold right-0 h-[50%] text-[120px] text-start ">
                INTERIOR <br /> <span className="gradient-text">DESIGN</span>
              </div> */}
            </div>

            <div className="relative  lg:hidden h-[500px]  overflow-hidden">
              <img
                src="/assets/service-section-bg2.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <img
                src="/assets/interior-design.svg"
                alt=""
                className="absolute top-[15%] right-0 w-[90%] h-auto"
              />
              {/* <div className="absolute top-[15%] leading-[50px] font-extrabold right-0 h-[50%] text-[60px] text-start ">
                INTERIOR <br /> <span className="gradient-text">DESIGN</span>
              </div> */}
            </div>
          </div>
          <p className="px-[10%] lg:px-[20%] text-[15px] lg:text-[30px] leading-[20px] lg:leading-[37px] py-[12%]">
            Cu o abordare personalizata si o atentie meticuloasa la detalii,
            echipa noastra va va ajuta sa va descoperiti stilul, nevoile si
            aspiratiile pentru a le transpune in designul casei dumneavoastra.
            Avem capacitatea de a vedea potentialul ascuns in fiecare spatiu si
            de a-l transforma intr-un paradis personalizat, cu o functionalitate
            impecabila. <br /> <br /> Lasati-ne pe noi sa va ghidam in aceasta
            calatorie, sa va transformam visul intr-o realitate palpabila,
            vibranta si plina de inspiratie. De la proiectarea si alegerea
            materialelor, la gestionarea proiectelor si supravegherea
            lucrarilor, vom fi alaturi de dumneavoastra la fiecare pas. La
            Ferandalex, credem cu pasiune ca acasa ar trebui sa fie o reflectare
            a identitatii dumneavoastra, un loc unde va puteti exprima liber si
            va puteti simti cu adevarat bine.
          </p>
        </div>
      </section>

      <section className="border-t border-white ">
        <div className="mx-[5%] lg:mx-[15%] border-l border-r  border-white ">
          <div className="relative">
            <div className="relative hidden lg:block overflow-hidden">
              <img
                src="/assets/service-section-bg3.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <img
                src="/assets/CLEANING.svg"
                alt=""
                className="absolute top-[15%] right-0"
              />
              {/* <div className="absolute top-[15%] leading-[100px] font-extrabold right-0 h-[50%] text-[120px] text-start ">
                CLEANING
              </div> */}
              <div className="absolute bottom-0 w-full bg-black/30 py-[15%] px-[5%] flex items-center justify-center text-[30px] leading-[37px] text-start backdrop-blur-sm">
                Pasiunea noastra pentru curatenie se traduce in spatii
                impecabile si confortabile pentru dumneavoastra. Echipa noastra
                de profesionisti se dedica utilizarii celor mai performante
                produse si echipamente pentru a oferi o gama completa de
                servicii de curatenie, adaptate nevoilor individuale. <br />{" "}
                <br /> Fie ca doriti o curatenie generala saptamanala, o
                pregatire minutioasa pentru mutare sau o intretinere atenta a
                suprafetelor delicate, suntem aici sa va oferim solutii
                personalizate. Flexibilitatea programului nostru si angajamentul
                pentru calitate ne fac partenerul ideal pentru a mentine un
                mediu curat si sanatos in locuintele si birourile dumneavoastra.
                Contactati-ne astazi pentru a experimenta diferenta Ferandalex!
              </div>
            </div>

            <div className="relative lg:hidden h-[1000px]  overflow-hidden">
              <img
                src="/assets/service-section-bg3.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <img
                src="/assets/CLEANING.svg"
                alt=""
                className="absolute top-[15%] w-[90%] h-auto right-0"
              />
              {/* <div className="absolute top-[15%] leading-[60px] font-extrabold right-0 h-[50%] text-[55px] text-start ">
                CLEANING
              </div> */}
              <div className="absolute bottom-0 w-full bg-black/30 py-[15%] px-[5%] flex  items-center justify-center text-[15px] leading-[20px] text-start backdrop-blur-sm">
                Pasiunea noastra pentru curatenie se traduce in spatii
                impecabile si confortabile pentru dumneavoastra. Echipa noastra
                de profesionisti se dedica utilizarii celor mai performante
                produse si echipamente pentru a oferi o gama completa de
                servicii de curatenie, adaptate nevoilor individuale. <br />{" "}
                <br /> Fie ca doriti o curatenie generala saptamanala, o
                pregatire minutioasa pentru mutare sau o intretinere atenta a
                suprafetelor delicate, suntem aici sa va oferim solutii
                personalizate. Flexibilitatea programului nostru si angajamentul
                pentru calitate ne fac partenerul ideal pentru a mentine un
                mediu curat si sanatos in locuintele si birourile dumneavoastra.
                Contactati-ne astazi pentru a experimenta diferenta Ferandalex!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white max-h-[1400px] overflow-hidden">
        <div className="mx-[5%] lg:mx-[15%] border-l border-r  border-white ">
          <div className="flex py-[2%] pt-[9%] justify-end items-end">
            <img
              src="/assets/GALLERY.svg"
              alt=""
              className="w-[90%] lg:w-auto"
            />
          </div>
          {/* <h1 className="gradient-text text-[70px] lg:text-[180px] leading-[180px] font-extrabold flex justify-end">
            GALLERY
          </h1> */}

          {/* Slick slider */}
          <div className="flex flex-col justify-center w-full mx-auto ">
            <Slider {...settings}>
              <div>
                <Image
                  src="/assets/service-section-carousel-img.jpeg"
                  alt="Slide 1"
                  width={1000}
                  height={600}
                  className="  w-full h-auto"
                />
              </div>

              <div>
                <Image
                  src="/assets/service-section-carousel-img.jpeg"
                  alt="Slide 1"
                  width={1000}
                  height={600}
                  className="  w-full h-auto"
                />
              </div>

              <div>
                <Image
                  src="/assets/service-section-carousel-img.jpeg"
                  alt="Slide 1"
                  width={1000}
                  height={600}
                  className="  w-full h-auto"
                />
              </div>
            </Slider>
          </div>
          {/* End  */}
        </div>
      </section>
    </div>
  );
};

export default page;
