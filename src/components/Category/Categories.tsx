import styles from "./Categories.module.css";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const categories = [
    { name: "Phones", icon: "📱" },
    { name: "Computers", icon: "🖥" },
    { name: "SmartWatch", icon: "⌚" },
    { name: "Camera", icon: "📷" },
    { name: "HeadPhones", icon: "🎧" },
    { name: "Gaming", icon: "🎮" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <div>
          <div className={styles.kicker}>
            <span className={styles.kickerBar} />
            <span>Categories</span>
          </div>
          <h2 className={styles.heading}>Browse By Category</h2>
        </div>

        <div className={styles.arrows}>
          <button className={styles.circleBtn}>←</button>
          <button className={styles.circleBtn}>→</button>
        </div>
      </div>

      <div className={styles.grid}>
        {categories.map((c) => (
          <CategoryItem key={c.name} name={c.name} icon={c.icon} />
        ))}
      </div>
    </section>
  );
};

export default Categories;