import React from "react";
import styles from "./TeamCard.module.css";

interface Props {
  image: string;
  name: string;
  role: string;
  onProfileClick?: () => void;
}

const TeamCard: React.FC<Props> = ({ image, name, role, onProfileClick }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{role}</p>
      <div className={styles.icons}>
        <span onClick={onProfileClick}>🌐</span>
        <span onClick={onProfileClick}>🐦</span>
        <span onClick={onProfileClick}>💼</span>
      </div>
    </div>
  );
};

export default TeamCard;
