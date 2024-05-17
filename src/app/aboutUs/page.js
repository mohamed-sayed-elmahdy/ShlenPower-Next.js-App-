import React from "react";
import Link from "next/link";
import styles from "./aboutUs.module.css";
import Image from "next/image";
import CardAndText from "../components/CardAndText/CardAndText";
import BlueSection from "../components/BlueSection/BlueSection";

function page() {
  return (
    <div>
      <BlueSection
        title="About US"
        Pargraph="Shlenpower Group is a Group of Companies working in the Blockchain Domain working on a Roadmap of a Projects
         all related to Blockchain, Including Cryptocurrency, Social Media Platform, Realestate,
        Training Academy, NFT Market Place and Decentralized Exhcnage Platform."
      />
      <CardAndText
        imgPath="/visionAndMisions.png"
        title="Vision and Mission"
        firstPargraph=" the nexus where blockchain enthusiasts, learners, and investors converge.
         Dive into a world rich with insights, 
         collaborative discussions, 
         and the combined force of a global community committed to 
         revolutionizing the digital landscape."
      />
      <div className={`${styles.ourCoreValuesSection} flex`}>
        <h2 className={styles.ourCoreValuesTitle}>Our Core Values</h2>
        <p className={styles.ourCoreValuesparagraph}>
          ShlenPower through the dynamic realms of fintech and investment.From
          groundbreaking blockchain innovations to curated investment
          strategies, let us guide you every step of the way. Together, we'll
          demystify the complexities of the financial tech world, unlocking
          opportunities that set you ahead of the curve.
        </p>
        <div className={`${styles.imagesContainer}  flex`}>
          <div className={styles.ourCoreImgOne}>
            <span className={styles.community}>Community</span>
            <span className={styles.masterBlochchain}>
              Master blockchain intricacies through curated content, tutorials,
              and live webinars
            </span>
          </div>
          <div className={`${styles.ourCoreImgTwo} flex`}>
            <div className={styles.ourCoreImgOneTop}>
              <span className={styles.fintech}>Fintech</span>
            </div>
            <div className={styles.ourCoreImgOnebottom}>
              <span className={styles.blockcahin}>Blochchain</span>
            </div>
          </div>
          <div className={`${styles.ourCoreImgThree} flex`}>
            <div className={styles.ourCoreImgOneTop}>
              <span className={styles.hitech}>Hitech</span>
            </div>
            <div className={styles.ourCoreImgOnebottom}>
              <span className={styles.knowledge}>Knowledge</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.chairManSection} flex`}>
        <div className={styles.chairmanImgContainer}>
          <Image
            className={styles.chairmanImg}
            src="/chairman.png"
            alt="chairmanImg"
            width={400}
            height={400}
            priority
          />
        </div>

        <div className={`${styles.chairmanTextContainer} flex`}>
          <h2 className={styles.chairmanTitle}>Chairman Message</h2>
          <p className={styles.chairmanParagraph}>
            Adopting the vision of the Dlicom ecosystem, we set out not just to
            disrupt, but to elevate. Our journey is one of empowerment, where
            every innovation, every connection, and every endeavor is fueled by
            the relentless pursuit of a better tomorrow. With Dlicom at our
            core, we're not just building platforms; we're building bridges,
            connecting individuals and ideas to create a world where knowledge
            is currency and opportunity knows no bounds. Join us on this
            transformative journey as we redefine what's possible and unlock the
            true potential of the digital age.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
