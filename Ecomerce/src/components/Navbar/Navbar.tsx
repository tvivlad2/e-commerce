// src/components/Navbar.tsx
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Exclusive</h2>

      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Sign Up</li>
      </ul>

      <div className={styles.navActions}>
        <input type="text" placeholder="What are you looking for?" />
        <span className={styles.icon}>♡</span>
        <span className={styles.icon}>🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;
