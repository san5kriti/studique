import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <video autoPlay loop muted className={styles.videoBackground}>
          <source src="/waves.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}>
          <div className={styles.initials}>SS.</div>
          <div className={styles.centerContent}>
            <h1 className={styles.title}>STUDIQUE</h1>
            <p className={styles.subtitle}>Minimal effort. Maximum focus.</p>
            <Link href="#about" passHref>
              <button className={styles.scrollButton}>LEARN MORE</button>
            </Link>
          </div>
        </div>
      </div>ß

    </>
  );
}
