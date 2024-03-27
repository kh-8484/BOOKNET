import About from "../../components/Home/About/About";
import Footer from "../../components/Home/Footer/Footer";
import Hero from "../../components/Home/Hero/Hero";
import Navbar from "../../components/Home/Navbar/Navbar";
import Queries from "../../components/Home/Queries/Queries";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Queries />
      <Footer />
    </>
  );
};

export default Home;
