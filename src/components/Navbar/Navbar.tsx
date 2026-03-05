import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openAccountMenu, setOpenAccountMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h2 className={styles.logo}>Exclusive</h2>

        <ul className={styles.navLinks}>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>

          {!isLoggedIn ? (
            <li className={styles.clickable} onClick={() => setIsLoggedIn(true)}>
              Sign Up
            </li>
          ) : (
            <li className={styles.accountWrap}>
              <button
                type="button"
                className={styles.accountBtn}
                onClick={() => setOpenAccountMenu((v) => !v)}
              >
                My Account ▾
              </button>

              {openAccountMenu && (
                <div className={styles.accountMenu}>
                  <div className={styles.menuItem}>Manage my account</div>
                  <div className={styles.menuItem}>My Orders</div>
                  <div className={styles.menuItem}>My Cancellations</div>
                  <div className={styles.menuItem}>My Reviews</div>
                  <div
                    className={`${styles.menuItem} ${styles.logout}`}
                    onClick={() => {
                      setIsLoggedIn(false);
                      setOpenAccountMenu(false);
                    }}
                  >
                    Logout
                  </div>
                </div>
              )}
            </li>
          )}
        </ul>

        <div className={styles.navActions}>
          <div className={styles.searchWrap}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="What are you looking for?"
            />
            <span className={styles.searchIcon}>⌕</span>
          </div>

          <span className={styles.icon}>♡</span>
          <span className={styles.icon}>🛒</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;