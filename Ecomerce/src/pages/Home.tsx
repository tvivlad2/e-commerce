import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <aside className={styles.sidebar}>
          <a href="#">Women’s Fashion</a>
          <a href="#">Men’s Fashion</a>
          <a href="#">Electronics</a>
          <a href="#">Home & Lifestyle</a>
          <a href="#">Medicine</a>
          <a href="#">Sports & Outdoor</a>
          <a href="#">Baby’s & Toys</a>
          <a href="#">Groceries & Pets</a>
          <a href="#">Health & Beauty</a>
        </aside>

        <div className={styles.banner}>
          <div className={styles.bannerInner}>
            <div>
              <div className={styles.kicker}>iPhone 14 Series</div>
              <div className={styles.title}>Up to 10% off Voucher</div>
              <a className={styles.cta} href="#">Shop Now →</a>
            </div>
            <div className={styles.mock} />
          </div>
        </div>
      </section>

      {/* Next sections later: FlashSales, Categories, BestSelling, etc */}
      <section className="section">
        <h2 style={{ margin: 0 }}>Next: Flash Sales</h2>
      </section>
    </div>
  );
}
