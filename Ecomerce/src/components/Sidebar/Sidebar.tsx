import "./Sidebar.css";

const categoriesWithArrow = [
  "Women’s Fashion",
  "Men’s Fashion",
];

const categories: string[] = [
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
    <aside className="sidebar">
      <ul>
        {categoriesWithArrow.map((item) => (
          <li key={item}>
            <span>{item}</span>
            <span className="arrow">›</span>
          </li>
        ))}

        {categories.map((item) => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
