"use client";
import Link from "next/link";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [jobFunction, setJobFunction] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log(name, company, phone, jobFunction, description);
  };

  return (
    <div className="bg-[#000000] h-full relative">
      <div className="absolute h-full w-full z-[1] ">
        <img
          height={"100%"}
          width={"100%"}
          className="object-cover h-full w-full p-[30px]"
          src="/assets/contact-img2.svg"
          alt="contact-img"
        />
      </div>
      <div className="flex lg:flex-row flex-col md:items-center relative lg:ps-[50px] md:ps-0 ps-[50px] z-[2] pt-[200px] pb-[178px]">
        <form
          onSubmit={handleSubmit}
          className="w-2/3 flex flex-col justify-center text-white"
        >
          <div className="flex flex-col md:gap-[91px] gap-[20px]">
            <div className="flex md:flex-row flex-col lg:gap-[130px] gap-[20px]">
              <div className="flex flex-col flex-1 gap-[26px]">
                <label
                  htmlFor="name"
                  className="block text-[40px] font-[400] leading-[49.2px]"
                >
                  Nume
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow backdrop-blur-sm appearance-none h-[73px] border-2 border-[#FFFFFF1A] rounded-[70px] bg-[#FFFFFF4D] w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[26px]">
                <label
                  htmlFor="phone"
                  className="block text-[40px] font-[400] leading-[49.2px]"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="shadow appearance-none h-[73px] border-2 border-[#FFFFFF1A] rounded-[70px] bg-[#FFFFFF4D] w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col lg:gap-[130px] gap-[20px]">
              <div className="flex flex-1 flex-col gap-[26px]">
                <label
                  htmlFor="company"
                  className="block text-[40px] font-[400] leading-[49.2px]"
                >
                  Companie
                </label>
                <input
                  type="text"
                  id="company"
                  className="shadow backdrop-blur-sm appearance-none h-[73px] border-2 border-[#FFFFFF1A] rounded-[70px] bg-[#FFFFFF4D] w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[26px]">
                <label
                  htmlFor="jobFunction"
                  className="block text-[40px] font-[400] leading-[49.2px]"
                >
                  Funcție
                </label>
                <input
                  type="text"
                  id="jobFunction"
                  className="shadow backdrop-blur-sm appearance-none h-[73px] border-2 border-[#FFFFFF1A] rounded-[70px] bg-[#FFFFFF4D] w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={jobFunction}
                  onChange={(e) => setJobFunction(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-grow">
              <div className="flex flex-col gap-[26px] flex-grow">
                <label
                  htmlFor="description"
                  className="block text-[40px] font-[400] leading-[49.2px]"
                >
                  Descriere proiect
                </label>
                <textarea
                  id="description"
                  className="shadow backdrop-blur-sm appearance-none border-2 border-[#FFFFFF1A] rounded-[70px] bg-[#FFFFFF4D] h-[251px] w-full py-[20px] px-[30px] leading-tight focus:outline-none focus:shadow-outline"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
        <div className="flex items-center justify-center mx-auto lg:py-0 py-[40px]">
          <Link
            href="/contact/thankyou"
            className="text-[70px] font-[400] leading-[69.02px] text-white backdrop-blur-sm"
          >
            Trimite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
