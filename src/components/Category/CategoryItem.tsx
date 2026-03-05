import styles from "./CategoryItem.module.css";

type Props = {
  name: string;
  icon: string;
};

const CategoryItem = ({ name, icon }: Props) => {
  const isActive = name === "Camera"; // matches your screenshot (Camera highlighted)

  return (
    <div className={`${styles.card} ${isActive ? styles.active : ""}`}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.text}>{name}</p>
    </div>
  );
};

export default CategoryItem;