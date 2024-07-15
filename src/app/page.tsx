"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SolutionsForAnyProject from "./components/SolutionsForAnyProject";
import WhatWeOffer from "./components/WhatWeOffer";
import OurVision from "./components/OurVision";
import Corporate from "./components/Corporate";
import CustomerOpinion from "./components/CustomerOpinion";

const Home: React.FC = () => {
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling animation
    });
  };

  return (
    <div>
      <Hero />
      <SolutionsForAnyProject />
      <OurVision />
      <Corporate />
      <WhatWeOffer />
      <CustomerOpinion />
      <Footer />
      <div className="fixed bottom-5 right-5 lg:bottom-[80px]  lg:right-[80px] flex w-full justify-end ms-auto">
        <button onClick={handleGoToTop}>
          <img src="/assets/up-arrow.svg" alt="Go to top" width="68.38px" />
        </button>
      </div>
    </div>
  );
};

export default Home;
