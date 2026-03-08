import React, { useState } from "react";
import styles from "../components/login/LoginPage.module.css";
import AuthImage from "../components/login/AuthImage";
import AuthInput from "../components/login/AuthInput";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.png"
const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    alert("Login Successful!");
  };

  const handleForgotPassword = () => {
    alert("Forgot Password Clicked");
  };

  return (
    <div className={styles.container}>
      <AuthImage image={login} />

      <div className={styles.form}>
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>

        <AuthInput
          placeholder="Email or Phone Number"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <AuthInput
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <div className={styles.actions}>
          <button onClick={handleLogin}>Log in</button>

          <span onClick={handleForgotPassword}>Forget Password?</span>
        </div>

        <p className={styles.signup}>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Create account</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
