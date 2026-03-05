import styles from "./BestSellingProducts.module.css";
import BestSellingCard, { type BestSellingProduct } from "./BestSellingCard";

import best1 from "../../assets/best1.png";
import best2 from "../../assets/best2.png";
import best3 from "../../assets/best3.png";
import best4 from "../../assets/best4.png";

// demo data (using local images)
const products: BestSellingProduct[] = [
  {
    id: 1,
    title: "The north coat",
    image: best1,
    price: 260,
    oldPrice: 360,
    rating: 5,
    reviewsCount: 65,
  },
  {
    id: 2,
    title: "Gucci duffle bag",
    image: best2,
    price: 960,
    oldPrice: 1160,
    rating: 4,
    reviewsCount: 65,
  },
  {
    id: 3,
    title: "RGB liquid CPU Cooler",
    image: best3,
    price: 160,
    oldPrice: 170,
    rating: 5,
    reviewsCount: 65,
  },
  {
    id: 4,
    title: "Small BookSelf",
    image: best4,
    price: 360,
    oldPrice: 0,
    rating: 5,
    reviewsCount: 65,
  },
  {
    id: 5,
    title: "Small BookSelf",
    image: best4,
    price: 360,
    oldPrice: 0,
    rating: 5,
    reviewsCount: 65,
  },
];

const BestSellingProducts = () => {
  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <div>
          <div className={styles.kicker}>
            <span className={styles.kickerBar} />
            <span>This Month</span>
          </div>

          <h2 className={styles.heading}>Best Selling Products</h2>
        </div>

        <button className={styles.viewAllSmall}>View All</button>
      </div>

      <div className={styles.productsRow}>
        {products.map((p) => (
          <BestSellingCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;