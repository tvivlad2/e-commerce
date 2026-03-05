import styles from "./BestSellingProducts.module.css";

export type BestSellingProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviewsCount: number;
};

const Stars = ({ value }: { value: number }) => {
  const full = Math.round(value);
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? styles.starFull : styles.starEmpty}>
          ★
        </span>
      ))}
    </div>
  );
};

const BestSellingCard = ({ product }: { product: BestSellingProduct }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productTop}>
        <div className={styles.productActions}>
          <button className={styles.iconBtn}>♡</button>
          <button className={styles.iconBtn}>👁</button>
        </div>
        <div className={styles.productImgWrap}>
          <img src={product.image} alt={product.title} />
        </div>
      </div>

      <div className={styles.productBody}>
        <p className={styles.productTitle}>{product.title}</p>

        <div className={styles.priceRow}>
          <span className={styles.price}>${product.price}</span>
          <span className={styles.oldPrice}>${product.oldPrice}</span>
        </div>

        <div className={styles.ratingRow}>
          <Stars value={product.rating} />
          <span className={styles.reviews}>({product.reviewsCount})</span>
        </div>
      </div>
    </div>
  );
};

export default BestSellingCard;