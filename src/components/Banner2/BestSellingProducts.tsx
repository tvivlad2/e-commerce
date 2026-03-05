// components/BestSellingProducts.tsx
import React from "react";
import ProductItem from "./ProductItem";
import type { Product } from "../Types/Product";
import styles from "./Banner2.module.css";

const BestSellingProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "The north coat",
      originalPrice: 360,
      discountedPrice: 260,
      rating: 5,
      reviewCount: 65,
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      originalPrice: 960,
      discountedPrice: 160,
      rating: 5,
      reviewCount: 65,
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      originalPrice: 170,
      discountedPrice: 160,
      rating: 5,
      reviewCount: 65,
    },
    {
      id: 4,
      name: "Small BookSelf",
      originalPrice: 360,
      rating: 5,
      reviewCount: 65,
    },
  ];

  return (
    <section className={styles.best_selling_section}>
      <h2 className={styles.section_title}>Best Selling Products</h2>
      <div className={styles.products_grid}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellingProducts;
