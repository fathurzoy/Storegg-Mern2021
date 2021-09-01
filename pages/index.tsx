import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";
import Footer from "../components/organisms/Footer";

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
