import React, { useState } from "react";
import styles from "../components/wishlist/WishlistPage.module.css";
import ProductCard from "../components/wishlist/ProductCard";
import SectionHeader from "../components/wishlist/SectionHeader";
import { wishlistProducts, recommendedProducts } from "../components/wishlist/products";

const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState(wishlistProducts);

  const handleAddToCart = (id: number) => {
    alert(`Product ${id} added to cart`);
  };

  const handleRemove = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.container}>
      <SectionHeader
        title={`Wishlist (${wishlist.length})`}
        buttonText="Move All to Bag"
        onClick={() => alert("All items moved to cart")}
      />

      <div className={styles.grid}>
        {wishlist.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onRemove={handleRemove}
          />
        ))}
      </div>

      <SectionHeader
        title="Just For You"
        buttonText="See All"
        onClick={() => alert("See all clicked")}
      />

      <div className={styles.grid}>
        {recommendedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
