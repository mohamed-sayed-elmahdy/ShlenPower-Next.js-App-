"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";
import BlueSection from "../components/BlueSection/BlueSection";
import Email from "../components/Email/Email";
import Image from "next/image";
import ModernUIComponent from "../components/UserMessage/page";

function page() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Message: "",
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
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzspIUEt1XLtAsSD3kEiG8wPm0tE4KKt5Y3sdFXEhVDdsFqyyDOaxmDcFjBdDj8kv7VEw/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setFormData({
      FirstName: "",
      LastName: "",
      Email: "",
      Phone: "",
      Message: "",
    });
    setShowOverlay(true);
    setShowModernUI(true);
  }
  function hideModernUI() {
    setShowOverlay(false);
    setShowModernUI(false);
  }

  return (
    <div>
      <BlueSection title="Contact Us" />
      <div className={styles.contactSection}>
        <div className={`${styles.formConatiner} flex`}>
          <form onSubmit={(e) => Submit(e)} className={`${styles.form} flex`}>
            <h1>Contact Form</h1>
            <div className={`${styles.inputsContainer} flex`}>
              <input
                type="text"
                name="FirstName"
                placeholder="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="LastName"
                placeholder="LastName"
                value={formData.LastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
              style={{ marginBottom: "0.5rem" }}
              required
            />
            <input
              type="tel"
              name="Phone"
              placeholder="Phone"
              value={formData.Phone}
              onChange={handleChange}
              style={{ marginBottom: "0.5rem" }}
              required
            />
            <textarea
              name="Message"
              placeholder="Message"
              rows="5"
              value={formData.Message}
              onChange={handleChange}
              style={{ marginBottom: "0.5rem" }}
              required
            ></textarea>
            <button type="submit" className={styles.submitForm}>
              Send
            </button>
          </form>
          <div className={styles.imgContainer}>
            <Image
              className={styles.conatctImg}
              src="/contactUs.png"
              alt="conatctUsImg"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
      {showOverlay && <div className={styles.overlay}></div>}
      {showModernUI && (
        <ModernUIComponent
          onHide={hideModernUI}
          message="Thanks, Your Message Was Sent to ShlenPower Team"
        />
      )}
      <div className={`${styles.ourOfficesSection} flex`}>
        <h2 className={styles.ourOfficesTitle}>Our Offices</h2>

        <div className={`${styles.ourOfficesCardsContainer} flex`}>


          <div className={styles.ourOfficesCard}>
            <Image
              className={styles.OfficeImg}
              src="/SingaporeOffice.png"
              alt="icon"
              width={140}
              height={140}
              priority
            />
            <h3 className={styles.cardTitle}>Singapore Office</h3>
            <span className={styles.adress}>
              Address: 10 Anson Road, #13-09 International Plaza, 079903 -
              Singapore
            </span>
          </div>
          <div className={styles.ourOfficesCard}>
            <Image
              className={styles.OfficeImg}
              src="/CairoOffice.png"
              alt="icon"
              width={140}
              height={140}
              priority
            />
            <h3 className={styles.cardTitle}>Cairo Office</h3>
            <span className={styles.adress}>
              Address: Zahraa Almaadi-Cairo, Ryhana Plaza, Entrance C, 8th
              Floor, Flat 5
            </span>
          </div>
        </div>
      </div>
      <Email />
    </div>
  );
}

export default page;
