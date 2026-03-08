import React, { useState } from "react";
import styles from "../components/login/SignupPage.module.css";
import AuthImage from "../components/login/AuthImage";
import AuthInput from "../components/login/AuthInput";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.png"

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSignup = () => {
    alert("Account created successfully!");
    navigate("/login");
  };

  const handleGoogleSignup = () => {
    alert("Google Signup Clicked");
  };

  return (
    <div className={styles.container}>
      <AuthImage image= {login} />

      <div className={styles.form}>
        <h2>Create an account</h2>
        <p>Enter your details below</p>

        <AuthInput
          placeholder="Name"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <AuthInput
          placeholder="Email or Phone Number"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <AuthInput
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />

        <button className={styles.primaryBtn} onClick={handleSignup}>
          Create Account
        </button>

        <button className={styles.googleBtn} onClick={handleGoogleSignup}>
          Sign up with Google
        </button>

        <p className={styles.loginText}>
          Already have account?{" "}
          <span onClick={() => navigate("/login")}>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
