import styles from "./Footer.module.css";
import Frame from "../../assets/Frame.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <Link to="/" className={styles.brandLink}>
              <h3 className={styles.brand}>Exclusive</h3>
            </Link>

            <p className={styles.subtitle}>Subscribe</p>
            <p className={styles.muted}>Get 10% off your first order</p>

            <div className={styles.subscribeBox}>
              <input
                className={styles.subscribeInput}
                type="email"
                placeholder="Enter your email"
              />
              <button className={styles.sendBtn} aria-label="Send email">
                ➤
              </button>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.title}>Support</h4>
            <p className={styles.linkText}>111 Bijoy sarani, Dhaka, Bangladesh</p>
            <p className={styles.linkText}>exclusive@gmail.com</p>
            <p className={styles.linkText}>+88015-88888-9999</p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.title}>Account</h4>
            <Link to="/account" className={styles.link}>My Account</Link>
            <Link to="/login" className={styles.link}>Login / Register</Link>
            <Link to="/cart" className={styles.link}>Cart</Link>
            <Link to="/wishlist" className={styles.link}>Wishlist</Link>
            <Link to="/" className={styles.link}>Shop</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.title}>Quick Link</h4>
            <Link to="/about" className={styles.link}>Privacy Policy</Link>
            <Link to="/about" className={styles.link}>Terms Of Use</Link>
            <Link to="/contact" className={styles.link}>FAQ</Link>
            <Link to="/contact" className={styles.link}>Contact</Link>
          </div>

          <div className={styles.col}>
            <h4 className={styles.title}>Download App</h4>
            <p className={styles.mutedSmall}>Save $3 with App New User Only</p>

            <div className={styles.downloadRow}>
              <img className={styles.qr} src={Frame} alt="QR Code" />
              <div className={styles.badges}>
                <button className={styles.badgeBtn}>Google Play</button>
                <button className={styles.badgeBtn}>App Store</button>
              </div>
            </div>

            <div className={styles.socialRow}>
              <a className={styles.social} href="#" aria-label="Facebook">f</a>
              <a className={styles.social} href="#" aria-label="Twitter">t</a>
              <a className={styles.social} href="#" aria-label="Instagram">⦿</a>
              <a className={styles.social} href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <p className={styles.copyright}>
          © Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;