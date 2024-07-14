import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SolutionsForAnyProject from "./components/SolutionsForAnyProject";
import WhatWeOffer from "./components/WhatWeOffer";
import OurVision from "./components/OurVision";
import Corporate from "./components/Corporate";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <SolutionsForAnyProject />
      <OurVision />
      <Corporate />
      <WhatWeOffer />
      <Footer />
    </>
  );
};

export default Home;
