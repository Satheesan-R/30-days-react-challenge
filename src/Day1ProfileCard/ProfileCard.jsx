import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          className={styles.avatar}
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <h2 className={styles.name}>Rajasekar Satheesan</h2>
        <p className={styles.bio}>Frontend Developer | React Enthusiast | UI Lover</p>
        <div className={styles.socials}>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;