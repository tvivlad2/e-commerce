import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.container}>
        <p className={styles.message}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className={styles.shopNow}>ShopNow</span>
        </p>

        <select className={styles.languageSelect} defaultValue="English">
          <option>English</option>
          <option>Russian</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
      </div>
    </div>
  );
};

export default Header;