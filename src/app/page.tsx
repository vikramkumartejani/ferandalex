import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SolutionsForAnyProject from './components/SolutionsForAnyProject';

const Home: React.FC = () => {
  return (
    <>
      <Hero/>
      <SolutionsForAnyProject/>
      <Footer />
    </>
  );
};

export default Home;
