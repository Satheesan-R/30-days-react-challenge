import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          className={styles.avatar}
          src={process.env.PUBLIC_URL + "/IMG00098.JPG.jpeg"}
          alt="Profile"
        />
        <h2 className={styles.name}>Rajasekar Satheesan</h2>
        <p className={styles.bio}>Frontend Developer | React Enthusiast | UI Lover</p>
        <div className={styles.socials}>
          <a href="https://github.com/Satheesan-R/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/rajasekar-satheesan-460208332/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;