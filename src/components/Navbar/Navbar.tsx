import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openAccountMenu, setOpenAccountMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <h2 className={styles.logo}>Exclusive</h2>
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
              }
            >
              About
            </NavLink>
          </li>

          {!isLoggedIn ? (
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
                }
                onClick={() => setIsLoggedIn(true)}
              >
                Sign Up
              </NavLink>
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
                  <NavLink to="/account" className={styles.menuItem}>
                    Manage my account
                  </NavLink>
                  <div className={styles.menuItem}>My Orders</div>
                  <div className={styles.menuItem}>My Cancellations</div>
                  <div className={styles.menuItem}>My Reviews</div>
                  <button
                    type="button"
                    className={`${styles.menuItem} ${styles.logoutBtn}`}
                    onClick={() => {
                      setIsLoggedIn(false);
                      setOpenAccountMenu(false);
                    }}
                  >
                    Logout
                  </button>
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

          <NavLink to="/wishlist" className={styles.iconLink}>
            ♡
          </NavLink>
          <NavLink to="/cart" className={styles.iconLink}>
            🛒
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;