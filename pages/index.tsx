import AOS from "aos";
import type { NextPage } from "next";
import { useEffect } from "react";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Footer from "../components/organisms/Footer";
import MainBanner from "../components/organisms/MainBanner";
import Navbar from "../components/organisms/Navbar";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import TransactionStep from "../components/organisms/TransactionStep";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      {/* <!-- Navbar --> */}
      <Navbar />

      <MainBanner />

      {/* <!-- 3 Column - Feature --> */}
      <TransactionStep />

      {/* <!-- 5 Column - Featured-game --> */}
      <FeaturedGame />

      {/* <!-- Reached --> */}
      <Reached />

      {/* <!-- Story --> */}
      <Story />

      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
};

export default Home;
