import styles from "./NewArrival.module.css";

import playstation from "../../assets/playstation.png";
import ladyhat from "../../assets/ladyhat.jpg";
import newspeak from "../../assets/newspeak.png";
import perfume from "../../assets/perfume.png";

const NewArrival = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.kicker}>
          <span className={styles.kickerBar} />
          <span>Featured</span>
        </div>
        <h2 className={styles.heading}>New Arrival</h2>
      </div>

      <div className={styles.grid}>
        {/* Left big card */}
        <div className={`${styles.card} ${styles.big}`}>
          <img className={styles.bgImg} src={playstation} alt="PlayStation 5" />
          <div className={styles.overlay}>
            <h3 className={styles.cardTitle}>PlayStation 5</h3>
            <p className={styles.cardText}>
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className={styles.shopNow}>Shop Now</button>
          </div>
        </div>

        {/* Right column */}
        <div className={styles.rightCol}>
          {/* Top wide */}
          <div className={`${styles.card} ${styles.wide}`}>
            <img className={styles.bgImg} src={ladyhat} alt="Women's Collections" />
            <div className={styles.overlay}>
              <h3 className={styles.cardTitle}>Women’s Collections</h3>
              <p className={styles.cardText}>
                Featured woman collections that give you another vibe.
              </p>
              <button className={styles.shopNow}>Shop Now</button>
            </div>
          </div>

          {/* Bottom two */}
          <div className={styles.bottomRow}>
            <div className={`${styles.card} ${styles.small}`}>
              <img className={styles.bgImg} src={newspeak} alt="Speakers" />
              <div className={styles.overlay}>
                <h3 className={styles.cardTitle}>Speakers</h3>
                <p className={styles.cardText}>Amazon wireless speakers</p>
                <button className={styles.shopNow}>Shop Now</button>
              </div>
            </div>

            <div className={`${styles.card} ${styles.small}`}>
              <img className={styles.bgImg} src={perfume} alt="Perfume" />
              <div className={styles.overlay}>
                <h3 className={styles.cardTitle}>Perfume</h3>
                <p className={styles.cardText}>GUCCI INTENSE OUD EDP</p>
                <button className={styles.shopNow}>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;