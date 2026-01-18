import styles from "./Header.module.css";
import "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.topHeader}>
      <p>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span>Shop Now</span>
      </p>
      <select className={styles.languageSelect}>
        <option>English</option>
        <option>Russian</option>
        <option>French</option>
        <option>Spanish</option>
      </select>
    </div>
  );
};

export default Header;
