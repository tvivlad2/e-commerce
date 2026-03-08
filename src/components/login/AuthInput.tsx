import React from "react";
import styles from "./AuthInput.module.css";

interface Props {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput: React.FC<Props> = ({
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default AuthInput;
