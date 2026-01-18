// components/ProductItem.tsx
import React from "react";
import type { Product } from "../Types/Product";
import styles from "./Banner2.module.css";
// import "./Banner2.module.css";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    return "★★★★★".slice(0, rating);
  };

  return (
    <div className={styles.product_item}>
      <div className={styles.product_info}>
        <h3 className={styles.product_name}>{product.name}</h3>
        <div className={styles.product_prices}>
          {product.discountedPrice ? (
            <>
              <span className={styles.discounted_price}>
                ${product.discountedPrice}
              </span>
              <span className={styles.original_price}>${product.originalPrice}</span>
            </>
          ) : (
            <span className={styles.price}>${product.originalPrice}</span>
          )}
        </div>
        <div className={styles.product_rating}>
          <span className={styles.stars}>{renderStars(product.rating)}</span>
          <span className={styles.review_count}>({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
