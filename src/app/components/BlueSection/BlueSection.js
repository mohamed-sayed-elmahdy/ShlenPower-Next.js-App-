import React from "react";
import styles from "./BlueSection.module.css";

function BlueSection({ title,Pargraph }) {
  return (
    <div>
      <div className={styles.blueSection}>
        <h1 className={styles.blueSectionTitle}>{title}</h1>
        <p className={styles.Pargraph}>{Pargraph}</p>
      </div>
    </div>
  );
}

export default BlueSection;
