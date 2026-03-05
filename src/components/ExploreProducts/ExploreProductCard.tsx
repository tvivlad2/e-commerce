import styles from "./ExploreProducts.module.css";

export type ExploreProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number; // 0-5
  reviewsCount: number;
  isNew?: boolean;
  showAddToCartOnHover?: boolean;
  colorDots?: string[]; // example: ["#db4444", "#000000"]
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

const ExploreProductCard = ({ product }: { product: ExploreProduct }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        {product.isNew && <span className={styles.newBadge}>NEW</span>}

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

        {product.showAddToCartOnHover && (
          <button className={styles.addToCart}>Add To Cart</button>
        )}
      </div>

      <div className={styles.cardBody}>
        <p className={styles.title}>{product.title}</p>

        <div className={styles.metaRow}>
          <span className={styles.price}>${product.price}</span>

          <div className={styles.ratingRow}>
            <Stars value={product.rating} />
            <span className={styles.reviews}>({product.reviewsCount})</span>
          </div>
        </div>

        {product.colorDots && product.colorDots.length > 0 && (
          <div className={styles.colors}>
            {product.colorDots.map((c, idx) => (
              <span key={idx} className={styles.dot} style={{ background: c }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreProductCard;