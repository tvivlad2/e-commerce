import styles from "./ExploreProducts.module.css";
import ExploreProductCard, { type ExploreProduct } from "./ExploreProductCard";

import exp1 from "../../assets/exp1.png";
import exp2 from "../../assets/exp2.png";
import exp3 from "../../assets/exp3.png";
import exp4 from "../../assets/exp4.png";
import exp5 from "../../assets/exp5.png";
import exp6 from "../../assets/exp6.png";
import exp7 from "../../assets/exp7.png";
import exp8 from "../../assets/exp8.jpg";

const products: ExploreProduct[] = [
  {
    id: 1,
    title: "Breed Dry Dog Food",
    image: exp1,
    price: 100,
    rating: 3,
    reviewsCount: 35,
  },
  {
    id: 2,
    title: "CANON EOS DSLR Camera",
    image: exp2,
    price: 360,
    rating: 4,
    reviewsCount: 95,
    showAddToCartOnHover: true,  
  },
  {
    id: 3,
    title: "ASUS FHD Gaming Laptop",
    image: exp3,
    price: 700,
    rating: 5,
    reviewsCount: 325,
  },
  {
    id: 4,
    title: "Curology Product Set",
    image: exp4,
    price: 500,
    rating: 4,
    reviewsCount: 145,
  },
  {
    id: 5,
    title: "Kids Electric Car",
    image: exp5,
    price: 960,
    rating: 5,
    reviewsCount: 65,
    isNew: true,
    colorDots: ["#db4444", "#000000"],
  },
  {
    id: 6,
    title: "Jr. Zoom Soccer Cleats",
    image: exp6,
    price: 1160,
    rating: 5,
    reviewsCount: 35,
    colorDots: ["#ffad33", "#db4444"],
  },
  {
    id: 7,
    title: "GP11 Shooter USB Gamepad",
    image: exp7,
    price: 660,
    rating: 5,
    reviewsCount: 55,
    isNew: true,
    colorDots: ["#000000", "#db4444"],
  },
  {
    id: 8,
    title: "Quilted Satin Jacket",
    image: exp8,
    price: 660,
    rating: 5,
    reviewsCount: 55,
    colorDots: ["#000000", "#db4444"],
  },
];

const ExploreProducts = () => {
  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <div>
          <div className={styles.kicker}>
            <span className={styles.kickerBar} />
            <span>Our Products</span>
          </div>

          <h2 className={styles.heading}>Explore Our Products</h2>
        </div>

        <div className={styles.arrows}>
          <button className={styles.circleBtn}>←</button>
          <button className={styles.circleBtn}>→</button>
        </div>
      </div>

      <div className={styles.grid}>
        {products.map((p) => (
          <ExploreProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className={styles.center}>
        <button className={styles.viewAll}>View All Products</button>
      </div>
    </section>
  );
};

export default ExploreProducts;