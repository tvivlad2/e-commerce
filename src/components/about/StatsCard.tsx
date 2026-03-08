import React from "react";
import styles from "./StatsCard.module.css";

interface Props {
  icon: string;
  value: string;
  label: string;
  highlight?: boolean;
  onClick?: () => void;
}

const StatsCard: React.FC<Props> = ({
  icon,
  value,
  label,
  highlight,
  onClick,
}) => {
  return (
    <div
      className={`${styles.card} ${highlight ? styles.highlight : ""}`}
      onClick={onClick}
    >
      <div className={styles.icon}>{icon}</div>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
};

export default StatsCard;
