import React from "react";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import Logo from "../assets/imgs/once-logo.svg";

function Navbar() {
  return (
    <nav className={styles.section}>
      <Image alt="logo" src={Logo} width={60} height={60} />
      <a
        className={styles.btnDapp}
        href="https://onceassurance.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        Open DAPP
      </a>
      {/*<h1 className={styles.title}>Once</h1>*/}
    </nav>
  );
}

export default Navbar;
