import React from "react";
import styles from "./ServiceItem.module.css";

interface Props {
  icon: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const ServiceItem: React.FC<Props> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <div className={styles.service} onClick={onClick}>
      <div className={styles.icon}>{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
