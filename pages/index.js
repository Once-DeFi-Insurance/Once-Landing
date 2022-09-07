import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import Comunity from "../components/Comunity";
import Download from "../components/Download";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Swiper from "../components/Swiper";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Once Assurance</title>
        <meta
          name="description"
          content="Life Insurance in crypto, Trade you life as a token."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Hero />
        <About />
        <Swiper />
        <Roadmap />
        <Comunity />
        <Download />
      </main>

      <footer className={styles.footer}>
        <h3>©Once Assurance 2022</h3>
      </footer>
    </div>
  );
}
