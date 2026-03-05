import styles from "./Sidebar.module.css";

const categoriesWithArrow = ["Women’s Fashion", "Men’s Fashion"];

const categories = [
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby’s & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.list}>
        {categoriesWithArrow.map((item) => (
          <li key={item} className={styles.row}>
            <span>{item}</span>
            <span className={styles.arrow}>›</span>
          </li>
        ))}

        {categories.map((item) => (
          <li key={item} className={styles.row}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;