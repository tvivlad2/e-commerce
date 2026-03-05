import styles from "./Footer.module.css";
import Frame from "../../assets/Frame.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Column 1 */}
          <div className={styles.col}>
            <h3 className={styles.brand}>Exclusive</h3>
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

          {/* Column 2 */}
          <div className={styles.col}>
            <h4 className={styles.title}>Support</h4>
            <p className={styles.link}>111 Bijoy sarani, Dhaka, Bangladesh</p>
            <p className={styles.link}>exclusive@gmail.com</p>
            <p className={styles.link}>+88015-88888-9999</p>
          </div>

          {/* Column 3 */}
          <div className={styles.col}>
            <h4 className={styles.title}>Account</h4>
            <p className={styles.link}>My Account</p>
            <p className={styles.link}>Login / Register</p>
            <p className={styles.link}>Cart</p>
            <p className={styles.link}>Wishlist</p>
            <p className={styles.link}>Shop</p>
          </div>

          {/* Column 4 */}
          <div className={styles.col}>
            <h4 className={styles.title}>Quick Link</h4>
            <p className={styles.link}>Privacy Policy</p>
            <p className={styles.link}>Terms Of Use</p>
            <p className={styles.link}>FAQ</p>
            <p className={styles.link}>Contact</p>
          </div>

          {/* Column 5 */}
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
              <a className={styles.social} href="#" aria-label="Facebook">
                f
              </a>
              <a className={styles.social} href="#" aria-label="Twitter">
                t
              </a>
              <a className={styles.social} href="#" aria-label="Instagram">
                ⦿
              </a>
              <a className={styles.social} href="#" aria-label="LinkedIn">
                in
              </a>
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