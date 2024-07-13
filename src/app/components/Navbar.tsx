"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full h-auto ">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-10 bg-[#FFFFFF2B] border border-[#FFFFFF1A] text-white px-4 lg:px-[40px] 2xl:px-[90px] h-[100px] backdrop-blur-sm">
        <div className="flex w-full justify-between items-center my-auto h-full">
          <div className="flex items-center">
            <Image src="/assets/Logo.svg" alt="Logo" width={200} height={31} />
          </div>
          <div className="hidden xlg:flex items-center">
            <ul className="flex">
              <li>
                <Link
                  href="/"
                  className="font-clashdisplay-light text-[30px] leading-[40px] px-5"
                >
                  Despre noi
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-clashdisplay-light text-[30px] leading-[40px] px-5"
                >
                  Servicii
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-clashdisplay-light text-[30px] leading-[40px] px-5"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button className="border-2 border-[#FFFFFF] rounded-[45px] px-8 py-3 text-[30px] leading-[40px] font-clashdisplay-regular">
              Discuta cu noi
            </button>
          </div>
          <div className="xlg:hidden flex">
            <button onClick={toggleMobileMenu}>
              <Image
                src="/assets/menu.svg"
                alt="Menu"
                width={60}
                height={60}
                className="md:w-[60px] md:h-[60px] w-[50px] h-[50px]"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 right-0 bottom-0 h-[100vh] mobile-menu-bg z-50 text-white p-5 md:px-14 md:py-10">
            <div className="flex justify-end">
              <button onClick={toggleMobileMenu}>
                <Image
                  src="/assets/close.svg"
                  alt="Close"
                  width={60}
                  height={60}
                  className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
                />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-16 h-full my-auto">
              <ul className="flex flex-col items-center justify-center gap-10">
                <li>
                  <Link
                    href="/"
                    className="font-clashdisplay-light text-[35px] md:text-[50px] leading-[40px] py-2"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="font-clashdisplay-light text-[35px] md:text-[50px] leading-[40px] py-2"
                  >
                    Despre noi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="font-clashdisplay-light text-[35px] md:text-[50px] leading-[40px] py-2"
                  >
                    Servicii
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="font-clashdisplay-light text-[35px] md:text-[50px] leading-[40px] py-2"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <button className="border-2 border-[#FFFFFF] rounded-[45px] px-10 md:px-14 py-5 md:py-8 text-[35px] md:text-[50px] leading-[40px] font-clashdisplay-regular mt-4">
                Discuta cu noi
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
