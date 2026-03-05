import styles from "./Banner.module.css";
import iphoneImg from "../../assets/dc40ba897215f42e5883a64157f0aa3a4d1a866a (1).jpg";
import appleLogo from "../../assets/applelogo.png";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <div className={styles.brand}>
          <img src={appleLogo} alt="Apple" />
          <span>iPhone 14 Series</span>
        </div>

        <h1 className={styles.title}>
          Up to <span>10%</span>
          <br />
          off Voucher
        </h1>

        <button className={styles.cta}>Shop Now →</button>

        <div className={styles.dots}>
          <span className={styles.dot} />
          <span className={`${styles.dot} ${styles.active}`} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>

      <div className={styles.right}>
        <img src={iphoneImg} alt="iPhone 14" />
      </div>
    </section>
  );
};

export default Banner;