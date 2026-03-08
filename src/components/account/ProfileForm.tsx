import React, { useState } from "react";
import styles from "./ProfileForm.module.css";

const ProfileForm: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSave = () => {
    alert("Profile Updated Successfully");
  };

  const handleCancel = () => {
    alert("Changes Cancelled");
  };

  return (
    <div className={styles.container}>
      <h3>Edit Your Profile</h3>

      <div className={styles.row}>
        <div>
          <label>First Name</label>
          <input
            value={form.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            value={form.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label>Email</label>
          <input
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>

        <div>
          <label>Address</label>
          <input
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>
      </div>

      <h4>Password Changes</h4>

      <input
        placeholder="Current Password"
        type="password"
        value={form.currentPassword}
        onChange={(e) => handleChange("currentPassword", e.target.value)}
      />

      <input
        placeholder="New Password"
        type="password"
        value={form.newPassword}
        onChange={(e) => handleChange("newPassword", e.target.value)}
      />

      <input
        placeholder="Confirm New Password"
        type="password"
        value={form.confirmPassword}
        onChange={(e) => handleChange("confirmPassword", e.target.value)}
      />

      <div className={styles.buttons}>
        <button className={styles.cancel} onClick={handleCancel}>
          Cancel
        </button>
        <button className={styles.save} onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
