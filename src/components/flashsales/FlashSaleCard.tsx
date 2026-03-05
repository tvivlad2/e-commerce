import styles from "./flashsales.module.css";

type FlashSaleProduct = {
  id: number;
  title: string;
  image: string;
  discountPercent: number;
  price: number;
  oldPrice: number;
  rating: number; // 0 - 5
  reviewsCount: number;
};

type Props = {
  product: FlashSaleProduct;
};

const Stars = ({ value }: { value: number }) => {
  const full = Math.round(value); // simple
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

const FlashSaleCard = ({ product }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.badge}>-{product.discountPercent}%</span>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Add to wishlist">
            ♡
          </button>
          <button className={styles.iconBtn} aria-label="View product">
            👁
          </button>
        </div>

        <div className={styles.imageWrap}>
          <img src={product.image} alt={product.title} />
        </div>

        <button className={styles.addToCart}>Add To Cart</button>
      </div>

      <div className={styles.cardBody}>
        <p className={styles.title}>{product.title}</p>

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

export default FlashSaleCard;
export type { FlashSaleProduct };