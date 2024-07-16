"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute hidden top-1/2 transform text-[40px] font-bold -translate-y-1/2 -right-52 cursor-pointer"
      onClick={onClick}
      data-aos="fade-up"
    >
      Next
    </div>
  );
};

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute hidden top-1/2 transform -translate-y-1/2 text-[40px] font-bold -left-52 z-30 rounded-full p-2 cursor-pointer"
      onClick={onClick}
      data-aos="fade-up"
    >
      Previous
    </div>
  );
};

const Page = () => {
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling animation
    });
  };
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  // };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: function (currentSlide: number, nextSlide: number) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide: number) {
      console.log("after change", currentSlide);
    },
  };

  return (
    <div className="text-white font-clashdisplay-regular">
      <section
        data-aos="fade-down"
        data-aos-delay="1000"
        className="relative h-[400px] md:h-full w-full"
      >
        <img
          src="/assets/section-shape2.png"
          alt=""
          className="absolute md:hidden top-0 bottom-0 md:-top-10 left-0 h-[400px] md:h-full w-full"
        />
        <img
          src="/assets/service-bg.jpg"
          alt=""
          className="h-[400px] md:hidden w-full"
        />
        <img
          src="/assets/service-background.png"
          alt=""
          className="hidden md:block h-full object-cover w-full"
        />

        <img
          src="/assets/SERVICII.svg"
          alt=""
          className="absolute top-[60%] lg:top-2/3 ml-[5%] w-24 h-auto lg:w-auto uppercase"
          data-aos="fade-up"
        />
      </section>

      <section className="px-[5%] lg:px-[10%] py-[10%] space-y-[15%] mx-[5%] lg:mx-[15%] border-l border-r border-white">
        <Slider {...settings} className="max-h-[900px] custom-slider">
          <div className="relative">
            <div
              className="relative max-h-[900px] rounded-3xl lg:rounded-[140px] overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/assets/service-section-bg.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <div
                data-aos="fade-down"
                className="absolute bottom-0 w-full bg-white/20 rounded-t-3xl lg:rounded-t-[140px] h-[50%] flex items-center justify-center text-[40px] lg:text-[120px] text-center backdrop-blur-sm"
              >
                Constructii
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="relative max-h-[900px] rounded-3xl lg:rounded-[140px] overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/assets/service-section-bg.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <div
                data-aos="fade-down"
                className="absolute bottom-0 w-full bg-white/20 rounded-t-3xl lg:rounded-t-[140px] h-[50%] flex items-center justify-center text-[40px] lg:text-[120px] text-center backdrop-blur-sm"
              >
                Constructii
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="relative max-h-[900px] rounded-3xl lg:rounded-[140px] overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/assets/service-section-bg.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <div
                data-aos="fade-down"
                className="absolute bottom-0 w-full bg-white/20 rounded-t-3xl lg:rounded-t-[140px] h-[50%] flex items-center justify-center text-[40px] lg:text-[120px] text-center backdrop-blur-sm"
              >
                Constructii
              </div>
            </div>
          </div>
        </Slider>
        <p
          data-aos="fade-up"
          className="px-[5%] lg:px-[20%] text-[15px] lg:text-[30px] leading-[20px] lg:leading-[37px]"
        >
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

      <section className="border-t border-white">
        <div className="mx-[5%] lg:mx-[15%] border-l border-r border-white">
          <div className="relative">
            <div
              className="relative hidden lg:block overflow-hidden"
              data-aos="fade-in"
            >
              <img
                src="/assets/service-section-bg2.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <img
                src="/assets/interior-design.svg"
                alt=""
                data-aos="fade-up"
                className="absolute top-[15%] right-0"
              />
            </div>

            <div
              className="relative lg:hidden h-[500px] overflow-hidden"
              data-aos="fade-in"
            >
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
            </div>
          </div>
          <p
            data-aos="fade-up"
            className="px-[10%] lg:px-[20%] text-[15px] lg:text-[30px] leading-[20px] lg:leading-[37px] py-[12%]"
          >
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

      <section className="border-t border-white">
        <div className="mx-[5%] lg:mx-[15%] border-l border-r border-white">
          <div className="relative">
            <div
              className="relative hidden lg:block overflow-hidden"
              data-aos="zoom-in"
            >
              <img
                src="/assets/service-section-bg3.jpeg"
                alt="Service Background"
                data-aos="zoom-out"
                className="object-cover w-full h-full"
              />
              <img
                src="/assets/CLEANING.svg"
                alt=""
                data-aos="fade-up"
                className="absolute top-[15%] right-0"
              />
              <div
                data-aos="fade-up"
                className="absolute bottom-0 w-full bg-black/30 py-[15%] px-[5%] flex items-center justify-center text-[30px] leading-[37px] text-start backdrop-blur-sm"
              >
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

            <div
              className="relative lg:hidden h-[1000px] overflow-hidden"
              data-aos="fade-in"
            >
              <img
                src="/assets/service-section-bg3.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <img
                src="/assets/cleaning.svg"
                alt=""
                className="absolute top-[15%] w-[90%] h-auto right-0"
              />
              <div className="absolute bottom-0 w-full bg-black/30 py-[15%] px-[5%] flex items-center justify-center text-[15px] leading-[20px] text-start backdrop-blur-sm">
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
        <div className="mx-[5%] lg:mx-[15%] border-l border-r border-white">
          <div className="flex py-[2%] pt-[4%] justify-end items-end">
            <img
              src="/assets/GALLERY.svg"
              alt=""
              className="w-[90%] lg:w-auto"
              data-aos="fade-up"
            />
          </div>

          {/* Slick slider */}
          <div
            className="flex flex-col justify-center w-full mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Slider {...settings}>
              <div>
                <Image
                  src="/assets/service-section-carousel-img.svg"
                  alt="Slide 1"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <div>
                <Image
                  src="/assets/service-section-carousel-img.svg"
                  alt="Slide 2"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <div>
                <Image
                  src="/assets/service-section-carousel-img.svg"
                  alt="Slide 3"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </Slider>
          </div>
          {/* End  */}
        </div>
      </section>

      <div className="fixed bottom-5 right-5 lg:bottom-[80px]  lg:right-[80px] flex w-full justify-end ms-auto">
        <button onClick={handleGoToTop}>
          <img src="/assets/up-arrow.svg" alt="Go to top" width="68.38px" />
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
