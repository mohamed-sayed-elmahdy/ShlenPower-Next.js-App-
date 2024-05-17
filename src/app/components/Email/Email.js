"use client";
import React, { useState } from "react";
import styles from "./email.module.css";
import ModernUIComponent from "../UserMessage/page";

function Email() {
  const [formData, setFormData] = useState({
    Email: "",
  });
  const [showOverlay, setShowOverlay] = useState(false);
  const [showModernUI, setShowModernUI] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function Submit(e) {
    e.preventDefault();
    const formEle = document.getElementById("admin");
    const formDatab = new FormData(formEle);

    // fetch(
    //   "https://script.google.com/macros/s/AKfycbwOHdm3jZQ0uS2ZL_DqsVyey-NWuBrNJENiymR4Q1Rx-RDW-hyUmFCx8PXAT_9xwlWe/exec",
    //   {
    //     method: "POST",
    //     body: formDatab,
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    setFormData({
      Email: "",
    });
    setShowOverlay(true);
    setShowModernUI(true);
  }
  function hideModernUI() {
    setShowOverlay(false);
    setShowModernUI(false);
  }

  return (
    <div className={styles.emailsubscriptioncontainer}>
      <h2>Welcome to the Community</h2>
      <div className={styles.actionTitleAndInputContainer}>
        <h1>Subscribe To get all ShlenPower news</h1>
        <p>
          Get ready to start producing stunning, Get ready to start producing
          stunning, start producing stunning.
        </p>
        <form
          onSubmit={(e) => Submit(e)}
          className={`${styles.form} flex`}
          id="admin"
        >
          <div className={styles.inputwithbutton}>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className={styles.emailinput}
              value={formData.Email}
              onChange={handleChange}
              style={{ marginBottom: "0.5rem" }}
              required
            />
            <button type="submit" className={styles.subscribebutton}>
              Subscribe
            </button>
          </div>
        </form>
      </div>
      {showOverlay && <div className={styles.overlay}></div>}
      {showModernUI && (
        <ModernUIComponent
          onHide={hideModernUI}
          message="Congratulations! You've successfully subscribed to ShlenPower News"
        />
      )}
    </div>
  );
}

export default Email;
