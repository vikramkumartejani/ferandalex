import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[20px] gap-[46px] py-[89px] md:px-[70px] sm:px-[30px] px-[20px] max-w-[1280px] mx-auto sm:text-left text-center">
          <div className="flex flex-col gap-[25px]">
            <img
              className="w-[230px] sm:mx-0 mx-auto"
              src="/assets/footer-logo.svg"
              alt="logo"
            />
            <p className="text-[#0B2131] text-[20px] font-[400] leading-[32px] tracking-[2%] font-clashdisplay-regular">
              The purpose of a FAQ is generally to provide information on
              frequent questions or concerns.
            </p>
          </div>
          <div className="font-clashdisplay-regular leading-[24px] flex flex-col gap-[22px]">
            <h3 className="text-[#071A34] text-[25px] font-[600]">Company</h3>
            <ul className="font-[500] text-[20px] text-[#090914] flex flex-col gap-[16px]">
              <li>
                <a href="#" className="text-[#090914] text-[20px] font-[500]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div className="font-clashdisplay-regular leading-[24px] flex flex-col gap-[22px]">
            <h3 className="text-[#071A34] text-[25px] font-[600]">Help</h3>
            <ul className="font-[500] text-[20px] text-[#090914] flex flex-col gap-[16px]">
              <li>
                <a href="#" className="text-muted-foreground">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="font-clashdisplay-regular leading-[24px] flex flex-col gap-[22px]">
            <h3 className="text-[#071A34] text-[25px] font-[600]">
              Newsletter
            </h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-[16px] border border-[#E4E4E7] rounded-[10px] font-[500] text-[20px] leading-[24px]"
              />
              <button className="p-[16px] bg-black text-white rounded-[9px] text-[20px] font-[500] leading-[24px]">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        <div className="lg:hidden flex gap-[24px] mx-auto justify-center py-[14px]">
          <a href="#" aria-label="X" className="my-auto">
            <BsTwitterX size={28} />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram size={30} />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook size={30} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin size={30} />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube size={30} />
          </a>
        </div>
        <div className="mx-auto border max-w-[1220px]"></div>
        <div className="flex justify-between items-center md:pe-[30px] flex-wrap">
          <div className="md:mx-0 mx-auto flex md:justify-start md:w-fit w-full justify-center">
            <img width={353} height={103} src="/assets/foot-img.svg" alt="Logo" />
          </div>
          <p className="text-[#090914] sm:text-[20px] md:mx-0 mx-auto text-[16px] py-6 font-[400] leading-[22px] font-clashdisplay-regular">
            © 2024 FERANDALEX SRL, All rights reserved.
          </p>
          <div className="lg:flex hidden gap-[24px]">
            <a href="#" aria-label="X" className="my-auto">
              <BsTwitterX size={28} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={30} />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook size={30} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin size={30} />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
