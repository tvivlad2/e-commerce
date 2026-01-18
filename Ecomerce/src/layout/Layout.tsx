import React from "react";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.topBar}>
            <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
            <a href="#" className={styles.shopNow}>Shop Now</a>
            <select className={styles.lang} defaultValue="English">
              <option>English</option>
            </select>
          </div>

          <div className={styles.headerMain}>
            <div className={styles.logo}>Exclusive</div>
            <div className={styles.nav}>
              <a href="#">Home</a>
              <a href="#">Contact</a>
              <a href="#">About</a>
              <a href="#">Sign Up</a>
            </div>

            <div className={styles.searchWrap}>
              <input className={styles.search} placeholder="What are you looking for?" />
              <div className={styles.icons}>
                <span>♡</span>
                <span>🛒</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerBox}>
            <strong>Footer (next)</strong>
            <div style={{ opacity: 0.7 }}>We’ll build the real footer after the header/hero.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
