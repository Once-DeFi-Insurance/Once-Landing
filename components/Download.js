import React from "react";
import Image from "next/image";
import Doc from "../assets/imgs/documento.png";
import styles from "../styles/Download.module.scss";

function Download() {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Downloads</h1>
      <div className={styles.documentContianer}>
        <div className={styles.divDoc}>
          <Image alt="logo" src={Doc} width={150} height={150} layout="fixed" />
          <h1>Whitepaper</h1>
          <a
            className={styles.boton}
            href="/OnceWhitePaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default Download;
