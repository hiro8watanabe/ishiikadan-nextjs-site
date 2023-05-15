import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About/About";
import { PrimaryBtn } from "../components/Button/PrimaryBtn";
import Feature from "../components/Features/Feature";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import styles from "../styles/Home.module.css";
import { Plans } from "../components/Plans/Plans";
import { News } from "../components/News/News";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="robots" content="noindex" />
        <title>石井花壇 | 温海温泉旅館【公式サイト</title>
        <meta name="keywords" content="海鮮料理,温泉,個室,貸し切り露天風呂" />
        <meta
          name="description"
          content="日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。 伝統的「和」の息づく空間で、至極のひとときをお過ごしください。"
        />
      </Head>

      <Header />
      <main className={styles.main}>
        <Slider />
        <About />
        <Feature />
        <Plans />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
