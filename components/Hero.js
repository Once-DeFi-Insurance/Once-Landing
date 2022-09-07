import React from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.scss";
import ilustracion from "../assets/imgs/banner-art.png";
function Hero() {
  return (
    <div className={styles.section}>
      <div>
        <h1 className={styles.titulo}>
          Once, Life insurance in crypto, Trade your life as a token .
        </h1>
        <p className={styles.texto}>
          Our protocol is based on an algorithm that ensures liquidity and gives
          you the best possible premium.
          <br />
          <br /> We keep you sensitive data protected while also giving full
          visibility of what happens in our protocol.
          <br />
          <br /> Take the power of truly owning your life insurance policy.
        </p>
      </div>
      <div className={styles.ilustracion}>
        <Image
          src={ilustracion}
          width="400"
          height="400"
          layout="responsive"
          alt="banner art"
        />
      </div>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1280 237"
        xmlSpace="preserve"
        className={styles.curvo}
      >
        <g id="Page-1">
          <path
            id="Combined-Shape"
            className={styles.curvo}
            d="M1280,0.8V237H0V83c9.9,2.9,20,5.1,30.3,6.8l774.9,123.9c58.2,9.3,117.9-2,168.7-32
		L1280,0.8z"
          />
        </g>
      </svg>
    </div>
  );
}

export default Hero;
