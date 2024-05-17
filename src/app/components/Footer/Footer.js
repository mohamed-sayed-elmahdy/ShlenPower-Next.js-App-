import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { GrPinterest } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={`${styles.footerSection} flex`}>
      <div className={`${styles.leftFooterContainer} flex`}>
        <div className={styles.logocontainer}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/logo.png"
              alt="shlen-power Logo"
              width={130}
              height={80}
              priority
            />
          </Link>
        </div>
        <p>
          Join our community, be the first to hear about updates, and let's
          shape the blockchain horizon together.
        </p>
        <div className={`${styles.socialMediaIconsContainer} flex`}>
          <Link href="/">
            <BsTwitterX className={styles.twitter} />
          </Link>
          <Link href="/">
            <RiInstagramFill className={styles.instagram} />
          </Link>
          <Link href="/">
            <GrPinterest className={styles.pinterest} />
          </Link>
          <Link href="/">
            <FaLinkedin className={styles.linkedin} />
          </Link>
          <Link href="/">
            <FaTiktok className={styles.tiktok} />
          </Link>
          <Link href="/">
            <FaYoutube className={styles.youtube} />
          </Link>
        </div>
      </div>
      <div className={`${styles.rightFooterContainer} flex`}>
        <div className={`${styles.linksColumnContainer} flex`}>
          <h2>Projects</h2>
          <Link href="https://spa.shlenpower.com/" className={styles.linkmenu}>
            Shlen Power Academy SPA
          </Link>
          <Link href="https://www.dlicom.io/" className={styles.linkmenu}>
            DLICom APP
          </Link>
          <Link href="/coomingSoon" className={styles.linkmenu}>
            DLIComPayment Gateway
          </Link>
          <Link href="/coomingSoon" className={styles.linkmenu}>
            DLICom POS
          </Link>
          <Link href="/coomingSoon" className={styles.linkmenu}>
            Hunty
          </Link>
          <Link href="/coomingSoon" className={styles.linkmenu}>
            Rento
          </Link>
          <Link href="/coomingSoon" className={styles.linkmenu}>
            Realestate
          </Link>
          <Link href="/coomingSoon" className={styles.linkmenu}>
            NFT Market Place
          </Link>
          <Link href="/coomingSoon" className={styles.linkmenu}>
            Decentralized exchange
          </Link>
        </div>
        <div className={`${styles.linksColumnContainer} flex`}>
          <h2>Company</h2>
          <Link href="/">Home</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Events</Link>
        </div>
        <div className={`${styles.linksColumnContainer} flex`}>
          <h2>Resources</h2>
          <Link href="/whatIsBlockChain" className={styles.linkmenu}>
            What is Blockchain?
          </Link>
          <Link href="/whatisZeroKnowledge" className={styles.linkmenu}>
            What is Zero Knowledge?
          </Link>
          <Link href="/dao" className={styles.linkmenu}>
            DAO
          </Link>
          <Link href="/contactUs" className={styles.linkmenu}>
            Decentrlization
          </Link>
          <Link href="/Dapp" className={styles.linkmenu}>
            DAPP
          </Link>
        </div>
        <div className={`${styles.linksColumnContainer} flex`}>
          <h2>Legal</h2>
          <Link href="/">Privacy</Link>
          <Link href="/">Terms</Link>
          <Link href="/">Security</Link>
        </div>
      </div>
    </div>
  );
}
