import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SolutionsForAnyProject from './components/SolutionsForAnyProject';
import WhatWeOffer from './components/WhatWeOffer';

const Home: React.FC = () => {
  return (
    <>
      <Hero/>
      <SolutionsForAnyProject/>
      <WhatWeOffer/>
      <Footer />
    </>
  );
};

export default Home;
