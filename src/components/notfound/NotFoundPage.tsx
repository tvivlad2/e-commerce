import React from "react";
import styles from "./NotFoundPage.module.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>Home / 404 Error</div>

      <div className={styles.content}>
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <button onClick={() => navigate("/")}>Back to home page</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
