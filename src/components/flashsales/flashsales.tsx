import styles from "./flashsales.module.css";
import FlashSaleCard, { type FlashSaleProduct } from "./FlashSaleCard";

import flash1 from "../../assets/flash1.png";
import flash2 from "../../assets/flash2.png";
import flash3 from "../../assets/flash3.png";
import flash4 from "../../assets/flash4.png";

 
const products: FlashSaleProduct[] = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    image: flash1,
    discountPercent: 40,
    price: 120,
    oldPrice: 160,
    rating: 5,
    reviewsCount: 88,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    image: flash2,
    discountPercent: 35,
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviewsCount: 75,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    image: flash3,
    discountPercent: 30,
    price: 370,
    oldPrice: 400,
    rating: 5,
    reviewsCount: 99,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    image: flash4,
    discountPercent: 25,
    price: 375,
    oldPrice: 400,
    rating: 4,
    reviewsCount: 99,
  },
  {
    id: 5,
    title: "S-Series Comfort Chair",
    image: flash4,
    discountPercent: 25,
    price: 375,
    oldPrice: 400,
    rating: 4,
    reviewsCount: 99,
  },
];

const FlashSales = () => {
  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <div>
          <div className={styles.kicker}>
            <span className={styles.kickerBar} />
            <span>Today’s</span>
          </div>

          <h2 className={styles.heading}>Flash Sales</h2>
        </div>

        <div className={styles.timer}>
          <div className={styles.timeBlock}>
            <div className={styles.timeLabel}>Days</div>
            <div className={styles.timeValue}>03</div>
          </div>

          <div className={styles.colon}>:</div>

          <div className={styles.timeBlock}>
            <div className={styles.timeLabel}>Hours</div>
            <div className={styles.timeValue}>23</div>
          </div>

          <div className={styles.colon}>:</div>

          <div className={styles.timeBlock}>
            <div className={styles.timeLabel}>Minutes</div>
            <div className={styles.timeValue}>19</div>
          </div>

          <div className={styles.colon}>:</div>

          <div className={styles.timeBlock}>
            <div className={styles.timeLabel}>Seconds</div>
            <div className={styles.timeValue}>56</div>
          </div>
        </div>

        <div className={styles.arrows}>
          <button className={styles.circleBtn}>←</button>
          <button className={styles.circleBtn}>→</button>
        </div>
      </div>

      <div className={styles.productsRow}>
        {products.map((product) => (
          <FlashSaleCard key={product.id} product={product} />
        ))}
      </div>

      <div className={styles.center}>
        <button className={styles.viewAll}>View All Products</button>
      </div>
    </section>
  );
};

export default FlashSales;