import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.topHeader}>
      <p>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span>Shop Now</span>
      </p>
      <select>
        <option>English</option>
      </select>
    </div>
  );
};

export default Header;
