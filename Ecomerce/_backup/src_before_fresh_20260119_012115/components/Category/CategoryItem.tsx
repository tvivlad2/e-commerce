// components/CategoryItem.tsx
import React from "react";
import Style from "./CategoryItem.module.css";

interface CategoryItemProps {
  name: string;
  icon: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, icon }) => {
  return (
    <div className={Style.category_card}>
      <div className={Style.category_icon_container}>
        <span className={Style.category_icon}>{icon}</span>
      </div>
      <span className={Style.category_name}>{name}</span>
    </div>
  );
};

export default CategoryItem;
