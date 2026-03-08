import React from "react";
import styles from "./AuthImage.module.css";

interface Props {
  image: string;
}

const AuthImage: React.FC<Props> = ({ image }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="auth visual" />
    </div>
  );
};

export default AuthImage;
