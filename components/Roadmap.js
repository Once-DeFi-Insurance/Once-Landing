import React from "react";
import Image from "next/image";
import hexa from "../assets/imgs/hexa.png";
import styles from "../styles/Roadmap.module.scss";

function Roadmap() {
  return (
    <div className={styles.section}>
      <svg
        viewBox="0 0 1280 338"
        className={styles.top}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="main" stroke="none" strokeWidth="1" fillRule="evenodd">
          <path
            d="M1280,208.886425 L956.227132,80.8085307 C901.387269,59.1150077 840.691782,57.2610626 784.630132,75.5670961 L48.0014718,316.101381 C31.110148,321.616972 15.0479432,328.822426 -1.77635684e-15,337.512753 L0,0 L1280,0 L1280,208.886425 Z"
            id="Combined-Shape"
            className={styles.top}
          ></path>
        </g>
      </svg>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Roadmap</h1>
      </div>

      <div className={styles.card}>
        <div className={styles.hexa}>
          <h1 className={styles.Title}>
            Q2 <br /> 2022
          </h1>
        </div>
        <ul>
          <li className={styles.Texto}>Website</li>
          <li className={styles.Texto}>Smart contracts</li>
          <li className={styles.Texto}>Communities creation</li>
          <li className={styles.Texto}>Token engineering</li>
        </ul>
      </div>

      <div className={styles.card}>
        <div className={styles.hexa}>
          <h1 className={styles.Title}>
            Q3 <br /> 2022
          </h1>
        </div>
        <ul>
          <li className={styles.Texto}>Token deployment</li>
          <li className={styles.Texto}>Backend wiring</li>
          <li className={styles.Texto}>Airdrops</li>
        </ul>
      </div>

      <div className={styles.card}>
        <div className={styles.hexa}>
          <h1 className={styles.Title}>
            Q4 <br /> 2022
          </h1>
        </div>
        <ul>
          <li className={styles.Texto}>Brand awareness</li>
          <li className={styles.Texto}>Coin listing</li>
          <li className={styles.Texto}>Launchpad</li>
          
        </ul>
      </div>

      <div className={styles.card}>
        <div className={styles.hexa}>
          <h1 className={styles.Title}>
            Q1 <br /> 2023
          </h1>
        </div>
        <ul>
          <li className={styles.Texto}>Dapp Launch</li>
          <li className={styles.Texto}>Partnerships</li>
        </ul>
      </div>
    </div>
  );
}

export default Roadmap;
