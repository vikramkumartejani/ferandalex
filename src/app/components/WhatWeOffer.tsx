"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 -right-52 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src="/assets/arrow-right.svg"
        alt="Right Arrow"
        width={150}
        height={50}
      />
    </div>
  );
};

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 -left-52 z-30 rounded-full p-2 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src="/assets/arrow-lef.svg"
        alt="Right Arrow"
        width={150}
        height={50}
      />
    </div>
  );
};

const WhatWeOffer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
    <div className="bg-black px-4 lg:px-[40px] 2xl:px-[60px] text-white py-[100px] overflow-hidden">
      <h1
        className="text-[#F26A45] font-clashdisplay-bold text-[50px] leading-[86px]"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        CE OFERIM
      </h1>

      {/* Slick slider */}
      <div
        className="flex flex-col justify-center max-w-[900px] mx-auto "
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <Slider {...settings}>
          <div>
            <Image
              src="/assets/what-we-offer.svg"
              alt="Slide 1"
              width={1000}
              height={600}
              className="  w-full h-auto"
            />
          </div>
          <div>
            <Image
              src="/assets/what-we-offer.svg"
              alt="Slide 2"
              width={1000}
              height={600}
              className=" w-full h-auto"
            />
          </div>
          <div>
            <Image
              src="/assets/what-we-offer.svg"
              alt="Slide 3"
              width={1000}
              height={600}
              className="  w-full h-auto"
            />
          </div>
        </Slider>
      </div>
      {/* End  */}

      <div className="mt-[80px] flex justify-center items-start flex-col mx-auto gap-[15px] max-w-[1000px] w-full">
        <h2
          className="text-[40px] leading-[67px] tracking-[0.09em] font-clashdisplay-semibold"
          data-aos="fade-up"
          data-aos-delay="1100"
        >
          CONSTRUCTII
        </h2>
        <p
          className="text-[35px] leading-[50px] tracking-[0.09em] font-clashdisplay-regular"
          data-aos="fade-up"
          data-aos-delay="1400"
        >
          Transformam viziunea in realitate. Oferim servicii complete de
          constructii si amenajari, de la primele idei pana la predarea cheii.
        </p>
      </div>
    </div>
  );
};

export default WhatWeOffer;
