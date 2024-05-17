import React from "react";
import BlueSection from "../components/BlueSection/BlueSection";
import styles from "./events.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";


function page() {
  return (
    <div className={styles.events}>
      <BlueSection title="Events" />
      {/* <div className={`${styles.weekEvents} flex`}>
        <h3 className={styles.weekEventsTitle}>Events in This Week</h3>
        <div className={`${styles.eventsCardsContainer} flex`}>


          <div className={styles.eventsCard}>
            <Image
              className={styles.eventImg}
              src="/EventsImg.png"
              alt="img"
              width={140}
              height={140}
              priority
            />
              <h3 className={styles.cardTitle}>Online Webinar</h3>
  <div className={`${styles.dateAndlocation} flex`}>
<span className={styles.date}>
Wed, Apr 10, 09:00 PM
</span>
<span className={styles.location}>
Dubai
</span>
  </div>
  <button className={styles.btn}> Details</button>
          </div>



          <div className={styles.eventsCard}>
            <Image
              className={styles.eventImg}
              src="/EventsImg.png"
              alt="img"
              width={140}
              height={140}
              priority
            />
              <h3 className={styles.cardTitle}>Online Webinar</h3>
  <div className={`${styles.dateAndlocation} flex`}>
<span className={styles.date}>
Wed, Apr 10, 09:00 PM
</span>
<span className={styles.location}>
Dubai
</span>
  </div>
  <button className={styles.btn}> Details</button>
          </div>
          <div className={styles.eventsCard}>
            <Image
              className={styles.eventImg}
              src="/EventsImg.png"
              alt="img"
              width={140}
              height={140}
              priority
            />
              <h3 className={styles.cardTitle}>Online Webinar</h3>
  <div className={`${styles.dateAndlocation} flex`}>
<span className={styles.date}>
Wed, Apr 10, 09:00 PM
</span>
<span className={styles.location}>
Dubai
</span>
  </div>
  <button className={styles.btn}> Details</button>
          </div>
        </div>
      </div>
      <div className={`${styles.weekEvents} flex`}>
        <h3 className={styles.weekEventsTitle}>Events in This Year</h3>
        <div className={`${styles.eventsCardsContainer} flex`}>
          <div className={styles.eventsCard}>
            <Image
              className={styles.eventImg}
              src="/EventsImg.png"
              alt="img"
              width={140}
              height={140}
              priority
            />
              <h3 className={styles.cardTitle}>Online Webinar</h3>
  <div className={`${styles.dateAndlocation} flex`}>
<span className={styles.date}>
Wed, Apr 10, 09:00 PM
</span>
<span className={styles.location}>
Dubai
</span>
  </div>
  <button className={styles.btn}> Details</button>
          </div>
          <div className={styles.eventsCard}>
            <Image
              className={styles.eventImg}
              src="/EventsImg.png"
              alt="img"
              width={140}
              height={140}
              priority
            />
              <h3 className={styles.cardTitle}>Online Webinar</h3>
  <div className={`${styles.dateAndlocation} flex`}>
<span className={styles.date}>
Wed, Apr 10, 09:00 PM
</span>
<span className={styles.location}>
Dubai
</span>
  </div>
  <button className={styles.btn}> Details</button>
          </div>
          <div className={styles.eventsCard}>
            <Image
              className={styles.eventImg}
              src="/EventsImg.png"
              alt="img"
              width={140}
              height={140}
              priority
            />
              <h3 className={styles.cardTitle}>Online Webinar</h3>
  <div className={`${styles.dateAndlocation} flex`}>
<span className={styles.date}>
Wed, Apr 10, 09:00 PM
</span>
<span className={styles.location}>
Dubai
</span>
  </div>
  <button className={styles.btn}> Details</button>
          </div>
        </div>
      </div> */}
      <div className={`${styles.fullWidthCard} flex`}>
        <div className={styles.fullWidthCardImgContainer}>
          <Image
            className={styles.fullWidthCardImg}
            src="/HowBlock.png"
            alt="whyBlockImg"
            width={500}
            height={400}
            priority
          />
        </div>
        <div className={`${styles.textContainer} flex`}>
          <h1 className={styles.cardTitleHowBlock}>
            As each transaction occurs, it is recorded as a “block” of data
          </h1>
          <p className={styles.cardParagraphHowBlock}>
            Those transactions show the movement of an asset that can be
            tangible (a product) or intangible (intellectual). The data block
            can record the information of your choice: who, what, when, where,
            how much. It can even record the condition, such as the temperature
            of a food shipment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
