import React from "react";
import styles from "./cardAndText.module.css";
import Image from "next/image";

function CardAndText({ imgPath, title, firstPargraph, secondParagraph }) {
  return (
    <div className={styles.CardAndText}>
      <div className={`${styles.CardAndTextSection} flex`}>
        <div className={styles.CardAndTextImgContainer}>
          <Image
            className={styles.CardAndTextImg}
            src={imgPath}
            alt="Img"
            width={500}
            height={500}
            priority
          />
        </div>

        <div className={`${styles.CardAndTextTextContainer} flex`}>
          <h2 className={styles.CardAndTextTitle}>{title}</h2>
          <p className={styles.CardAndTextParagraph}>{firstPargraph}</p>
          <p className={styles.secondParagraph}>{secondParagraph}</p>
        </div>
      </div>
    </div>
  );
}

export default CardAndText;
