import React from "react";
import styles from "./userMessage.module.css";

const ModernUIComponent = ({ onHide , message}) => {
  return (
    <div className={styles.modernUI}>
      <p>{message}</p>
      <button onClick={onHide} className={styles.Okbtn}>Ok</button> 
    </div>
  );
};

export default ModernUIComponent;
