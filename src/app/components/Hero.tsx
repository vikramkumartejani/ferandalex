import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video className="w-full h-screen" autoPlay loop muted>
        <source src="/assets/hero.mp4" className="h-screen" type="video/mp4" />
      </video>

      {/* Overlay for video */}
      <div className="gradident absolute inset-0 h-screen" />

      {/* Content on top of video */}
      <div className="absolute inset-0 flex items-center justify-center mt-40">
        <div className=" text-white flex flex-col gap-5 lg:gap-10  w-full 2xl:px-[100px] lg:px-[50px] px-4 pt-[100px] pb-[40px]">
          <Image src="/assets/des.svg" alt="title" width={1000} className=" " height={10} />
          <div className="relative max-w-[300px] flex items-end justify-end w-full">
            <Image
              src="/assets/IMPREUNA.svg"
              alt="text"
              width={400}
              height={10}
              className="lg:w-[400px] w-[200px]"
            />
            <Image
              src="/assets/line.svg"
              alt="text"
              width={100}
              height={10}
              className="absolute -bottom-14 lg:-bottom-20 lg:w-[400px] w-[200px]"
            />
          </div>

          <div className="w-full flex lg:flex-row flex-col-reverse justify-between mt-10">
            <h1 className="text-[20px] md:text-[30px] lg:text-[35px] leading-[49px] font-clashdisplay-regular flex items-center gap-1.5">Hai sa discutam proiectul tau<IoIosArrowRoundForward className="text-3xl lg:text-5xl" /></h1>
            <div className="flex items-center gap-1">
              <button className=" font-clashdisplay-regular text-[35px] leading-[49px] ">Play</button>
              <span className="font-clashdisplay-regular text-[35px] leading-[49px] lg:block hidden">/</span>
              <button className="lg:block hidden font-clashdisplay-regular text-[35px] leading-[49px] ">Pause</button>
              <Image src='/assets/Pause.svg' alt="Pasue / Play" width={48} height={54} />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Hero;
