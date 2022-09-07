import React from "react";
import Image from "next/image";
import styles from "../styles/Comunity.module.scss";
import telegram from "../assets/imgs/telegram.png";
import discord from "../assets/imgs/discord.png";
import twitter from "../assets/imgs/twitter.png";
import linkedin from "../assets/imgs/linkedin.png";
import list from "../assets/imgs/whitelist.png";

function Comunity() {
  return (
    <div className={styles.section}>
      <h1 className={styles.mainTitle}>Join the community</h1>
      <div className={styles.boton}>
        <a
          href="https://discord.gg/nM4rhRTJBD"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.divLogos}>
            <Image
              src={discord}
              width={250}
              height={250}
              layout="intrinsic"
              alt="telegram logo"
            />
            <div className={styles.textoDerecha}>
              <h1 className={styles.title}>Join the community</h1>
              <h2 className={styles.texto}>
                Get involved in specialized channels
              </h2>
            </div>
          </div>
        </a>
      </div>

      <div className={styles.boton}>
        <a
          href="https://t.me/+iJJvES5jUKU5Y2M5"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.divLogosIzq}>
            <div className={styles.textoIzquierda}>
              <h1 className={styles.title}>Join our Telegram</h1>
              <h2 className={styles.texto}>
                Get to know the community’s voice
              </h2>
            </div>
            <Image
              src={telegram}
              width={250}
              height={250}
              layout="intrinsic"
              alt="telegram logo"
            />
          </div>
        </a>
      </div>

      <div className={styles.boton}>
        <a
          href="https://twitter.com/assuranceonce?s=11&t=6VyL26DtyQX6xjISX0lYng"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.divLogos}>
            <Image
              src={twitter}
              width={250}
              height={250}
              layout="intrinsic"
              alt="twitter logo"
            />
            <div className={styles.textoDerecha}>
              <h1 className={styles.title}>Follow us on Twitter</h1>
              <h2 className={styles.texto}>See you in our spaces</h2>
            </div>
          </div>
        </a>
      </div>

      <div className={styles.boton}>
        <a
          href="https://www.linkedin.com/company/once-assurance/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.divLogosIzq}>
            <div className={styles.textoIzquierda}>
              <h1 className={styles.title}>Follow our LinkedIn</h1>
              <h2 className={styles.texto}>
                The most traditional part of once
              </h2>
            </div>
            <Image
              src={linkedin}
              width={250}
              height={250}
              layout="intrinsic"
              alt="linkedin logo"
            />
          </div>
        </a>
      </div>

      <h1 className={styles.mainTitle}>Sign up for the white list</h1>

      <div className={styles.boton}>
        <a
          href="https://forms.gle/asGaX6y8pQPQXruZA"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className={styles.divLogos}>
            <Image
              src={list}
              width={250}
              height={250}
              layout="intrinsic"
              alt="document icon"
            />
            <div className={styles.textoDerecha}>
              <h1 className={styles.title}>Join our WhiteList</h1>
              <h2 className={styles.texto}>Feel the Dapp’s development</h2>
            </div>
          </div>
        </a>
      </div>

      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2500/svg"
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

export default Comunity;
