import React from "react";
import styles from "./SectionHeader.module.css";

interface Props {
  title: string;
  buttonText?: string;
  onClick?: () => void;
}

const SectionHeader: React.FC<Props> = ({ title, buttonText, onClick }) => {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      {buttonText && <button onClick={onClick}>{buttonText}</button>}
    </div>
  );
};

export default SectionHeader;
