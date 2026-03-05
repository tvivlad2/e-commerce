import styles from "./ServicesRow.module.css";

const ServicesRow = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.item}>
          <div className={styles.iconOuter}>
            <div className={styles.iconInner}>🚚</div>
          </div>
          <h4 className={styles.title}>FREE AND FAST DELIVERY</h4>
          <p className={styles.text}>Free delivery for all orders over $140</p>
        </div>

        <div className={styles.item}>
          <div className={styles.iconOuter}>
            <div className={styles.iconInner}>🎧</div>
          </div>
          <h4 className={styles.title}>24/7 CUSTOMER SERVICE</h4>
          <p className={styles.text}>Friendly 24/7 customer support</p>
        </div>

        <div className={styles.item}>
          <div className={styles.iconOuter}>
            <div className={styles.iconInner}>✓</div>
          </div>
          <h4 className={styles.title}>MONEY BACK GUARANTEE</h4>
          <p className={styles.text}>We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesRow;