import React from "react";
import styles from "./ProductCard.module.css";

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  discount?: string;
  rating?: number;
  reviews?: number;
  badge?: string;
}

interface Props {
  product: Product;
  onAddToCart: (id: number) => void;
  onRemove?: (id: number) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart, onRemove }) => {
  const renderStars = () => {
    if (!product.rating) return null;
    return (
      <div className={styles.rating}>
        {"★".repeat(Math.floor(product.rating))}
        {"☆".repeat(5 - Math.floor(product.rating))}
        <span> ({product.reviews})</span>
      </div>
    );
  };

  return (
    <div className={styles.card}>
      {product.discount && (
        <div className={styles.discount}>{product.discount}</div>
      )}
      {product.badge && <div className={styles.badge}>{product.badge}</div>}
      {onRemove && (
        <button
          className={styles.removeBtn}
          onClick={() => onRemove(product.id)}
        >
          ✖
        </button>
      )}
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <div className={styles.price}>
        <span className={styles.current}>${product.price}</span>
        {product.oldPrice && (
          <span className={styles.old}>${product.oldPrice}</span>
        )}
      </div>
      {renderStars()}
      <button
        className={styles.cartBtn}
        onClick={() => onAddToCart(product.id)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
