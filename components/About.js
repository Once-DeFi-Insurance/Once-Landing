import React from "react";
import styles from "../styles/About.module.scss";

function About() {
  return (
    <div className={styles.section}>
      <div className={styles.izquierda}>
        <div className={styles.izquierdaContainer}>
          <h1 className={styles.izquierdaTitle}>ONCE SAVING FOR THE FUTURE</h1>
          <h2 className={styles.izquierdaTexto}>
            The Extra-Life token is a real person’s life representation in the
            digital world in an NFT format. You can generate your Extra-Life
            token by using ANIMA. If you want, this NFT can be placed in the
            marketplace.
          </h2>
          <br></br>
          <br></br>
        </div>
      </div>
      <div className={styles.derecha}>
        <div className={styles.derechaContainer}>
          <svg
            width="404px"
            height="452px"
            viewBox="0 0 404 452"
            version="1.1"
            className={styles.hexa}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <linearGradient
                x1="34.1218989%"
                y1="15.1303808%"
                x2="20.0910756%"
                y2="110.664023%"
                id="linearGradient-1"
              >
                <stop stopColor="#C8E6C9" offset="0%"></stop>
                <stop stopColor="#FFECB3" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <path
                d="M2,136.921005 L2,314.197531 C2,330.732338 10.8296846,346.011946 25.1636364,354.27935 L178.836364,442.917242 C193.170315,451.184645 210.829685,451.184645 225.163636,442.917242 L378.836364,354.27935 C393.170315,346.011946 402,330.732338 402,314.197531 L402,136.921005 C402,120.385457 393.170315,105.10659 378.836364,96.8384449 L225.163636,8.2005525 C210.829685,-0.066850833 193.170315,-0.066850833 178.836364,8.2005525 L25.1636364,96.8384449 C10.8296846,105.10659 2,120.385457 2,136.921005"
                id="Fill-1"
                stroke="url(#linearGradient-1)"
                strokeWidth="4"
              ></path>
            </g>
          </svg>
          <iframe
            width="560"
            height="315"
            className={styles.video}
            src="https://www.youtube.com/embed/5rfWWYLCIsE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About;
