import Header from "../Header/Header";
import Hero from "./Hero";
import Exercises from "./Exercises";
import Start from "./Start";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Calculate from "./Calculate";
import RegistrationModal from "../Modal/Registration-Modal";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Exercises />
      <Start />
      <Calculate />
      <Pricing />
      <Testimonials />
      <Footer />

      <RegistrationModal />
    </>
  );
};

export default Home;
