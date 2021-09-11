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
import Head from "next/head";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Head>
        <title>StoreGG - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="StoreGG - Get a New Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta property="og:image" content="https://imageurlkalian" />
        <meta property="og:url" content="https://storegg.com" />
      </Head>
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
