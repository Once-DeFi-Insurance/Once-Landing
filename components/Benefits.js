import React from "react";
import Image from "next/image";
import pana from "../assets/imgs/pana.png";
import styles from "../styles/Benefits.module.scss";

function Benefits() {
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
      <div className={styles.izquierda}>
        <div className={styles.izquierdaContainer}>
          <h1 className={styles.izquierdaTitle}>Key Benefits</h1>
          <h2 className={styles.izquierdaTexto}>
            Block-chain based that keeps clients secrecy
          </h2>
          <br></br>
          <br></br>
          <Image
            src={pana}
            height="350"
            width="350"
            layout="fixed"
            alt="beneficios"
          />
        </div>
      </div>
      <div className={styles.derecha}>
        <div className={styles.derechaContainer}>
          <h1 className={styles.derechaTitle}>Managerial costs</h1>
          <ul>
            <li className={styles.derechaTexto}>Reduces operation costs</li>
            <li className={styles.derechaTexto}>Derive in better premiums</li>
          </ul>
        </div>

        <div className={styles.derechaContainer}>
          <h1 className={styles.derechaTitle}>Information visibility</h1>
          <ul>
            <li className={styles.derechaTexto}>
              Ruled by code rather than people
            </li>
            <li className={styles.derechaTexto}>
              Open to everyone to validate
            </li>
          </ul>
        </div>

        <div className={styles.derechaContainer}>
          <h1 className={styles.derechaTitle}>Unique Value proposition</h1>
          <ul>
            <li className={styles.derechaTexto}>
              Allowing users to trade ther lives
            </li>
            <li className={styles.derechaTexto}>
              Letting them have a voice in the DAO
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
