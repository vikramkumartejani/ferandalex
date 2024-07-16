"use client";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SolutionsForAnyProject from "./components/SolutionsForAnyProject";
import WhatWeOffer from "./components/WhatWeOffer";
import OurVision from "./components/OurVision";
import Corporate from "./components/Corporate";
import CustomerOpinion from "./components/CustomerOpinion";
import AOS from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Hero />
      <SolutionsForAnyProject />
      <OurVision />
      <Corporate />
      <WhatWeOffer />
      <CustomerOpinion />
      <Footer />
      {showButton && (
        <div className="fixed bottom-5 right-5 lg:bottom-[40px] lg:right-[40px] flex w-full justify-end ms-auto">
          <button onClick={handleGoToTop}>
            <img
              src="/assets/up-arrow.svg"
              alt="Go to top"
              width="68.38px"
              data-aos="fade-up"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
