import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <small>Get 10% off your first order</small>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div>
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka, Bangladesh</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div>
          <h4>Account</h4>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div>
          <h4>Quick Link</h4>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>

      <p className={styles.copyright}>
        © Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
