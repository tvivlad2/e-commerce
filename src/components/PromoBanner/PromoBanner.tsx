import styles from "./PromoBanner.module.css";
import speaker from "../../assets/speaker.png";

const PromoBanner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.kicker}>Categories</span>

          <h2 className={styles.heading}>
            Enhance Your <br /> Music Experience
          </h2>

          <div className={styles.timer}>
            <div className={styles.circle}>
              <span className={styles.number}>23</span>
              <span className={styles.label}>Hours</span>
            </div>

            <div className={styles.circle}>
              <span className={styles.number}>05</span>
              <span className={styles.label}>Days</span>
            </div>

            <div className={styles.circle}>
              <span className={styles.number}>59</span>
              <span className={styles.label}>Minutes</span>
            </div>

            <div className={styles.circle}>
              <span className={styles.number}>35</span>
              <span className={styles.label}>Seconds</span>
            </div>
          </div>

          <button className={styles.buyBtn}>Buy Now!</button>
        </div>

        <div className={styles.right}>
          <img src={speaker} alt="Speaker" />
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;