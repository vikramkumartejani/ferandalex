'use client'
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <div className="relative w-full ">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-10 bg-[#FFFFFF2B] border border-[#FFFFFF1A] text-white px-4 lg:px-[40px] 2xl:px-[90px] h-[100px]">
            <div className="flex w-full justify-between items-center my-auto h-full">
                <div className="flex items-center">
                <Image src='/assets/Logo.svg' alt="Logo" width={200} height={31} />
                </div>
                <div className="hidden xlg:flex items-center">
                <ul className="flex">
                    <li><Link href='/' className="font-clashdisplay-light text-[30px] leading-[40px] px-5">Despre noi</Link></li>
                    <li><Link href='/' className="font-clashdisplay-light text-[30px] leading-[40px] px-5">Servicii</Link></li>
                    <li><Link href='/' className="font-clashdisplay-light text-[30px] leading-[40px] px-5">Contact</Link></li>
                </ul>
                <button className="border-2 border-[#FFFFFF] rounded-[45px] px-8 py-3 text-[30px] leading-[40px] font-clashdisplay-regular">Discuta cu noi</button>
                </div>
                <div className="xlg:hidden flex">
                <button onClick={toggleMobileMenu}>
                    <Image src='/assets/menu.svg' alt="Menu" width={60} height={60} className="md:w-[60px] md:h-[60px] w-[50px] h-[50px]" />
                </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-0 left-0 right-0 bottom-0 h-[100vh] mobile-menu-bg z-50 text-white p-5 md:px-14 md:py-10">
                    <div className="flex justify-end">
                        <button onClick={toggleMobileMenu}>
                            <Image src='/assets/close.svg' alt="Close" width={60} height={60} className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]" />
                        </button>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-16 h-full my-auto'>
                        <ul className="flex flex-col items-center justify-center gap-10">
                            <li><Link href='/' className="font-clashdisplay-light text-[35px] md:text-[50px] leading-[40px] py-2">Home</Link></li>
                            <li><Link href='/' className="font-clashdisplay-light text-[35px] md:text-[50px] leading-[40px] py-2">Despre noi</Link></li>
                            <li><Link href='/' className="font-clashdisplay-light text-[35px] md:text-[50px] leading-[40px] py-2">Servicii</Link></li>
                            <li><Link href='/' className="font-clashdisplay-light text-[35px] md:text-[50px] leading-[40px] py-2">Contact</Link></li>
                        </ul>
                        <button className="border-2 border-[#FFFFFF] rounded-[45px] px-10 md:px-14 py-5 md:py-8 text-[35px] md:text-[50px] leading-[40px] font-clashdisplay-regular mt-4">Discuta cu noi</button>
                    </div>
                </div>
            )}
        </nav>
      
        {/* Video Background */}
        <video className="w-full " autoPlay loop muted>
            <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
      
        {/* Overlay for video */}
        <div className="gradident absolute inset-0" />
        
        {/* Content on top of video */}
        <div className="absolute inset-0 flex items-center justify-center ">
            <div className="text-white text-center flex items-center justify-center bg-red-500">
                <h1 className="text-4xl font-bold mb-4">Depasim orizonturile</h1>
                <p className="text-lg">Your description or call to action</p>
            </div>
        </div>
    </div>
  );
};

export default Hero;
