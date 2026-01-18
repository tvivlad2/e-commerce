// components/Categories.tsx
import React from "react";
import CategoryItem from "./CategoryItem";
import Style from "./Categories.module.css";

const Categories: React.FC = () => {
  const categories = [
    { name: "Phones", icon: "📱" },
    { name: "Computers", icon: "💻" },
    { name: "SmartWatch", icon: "⌚" },
    { name: "Camera", icon: "📷" },
    { name: "HeadPhones", icon: "🎧" },
    { name: "Gaming", icon: "🎮" },
  ];

  return (
    <section className={Style.categories_section}>
      <div className={Style.categories_header}>
        <h3 className={Style.categories_subtitle}>Categories</h3>
        <h2 className={Style.section_title}>Browse By Category</h2>
      </div>
      <div className={Style.categories_grid}>
        {categories.map((category, index) => (
          <CategoryItem key={index} name={category.name} icon={category.icon} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
