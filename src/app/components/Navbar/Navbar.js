"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import { FaBars } from "react-icons/fa6";
import { IoIosArrowDown, IoIosCloseCircle } from "react-icons/io";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const originalLogoSrc = "/logo.png";
  const hoverLogoSrc = "/logo2.png";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [showSidebar, setShowSidebar] = useState(false);
  const [openDropmenu, setOpenDropmenu] = useState(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const toggleDropmenu = (menu) => {
    setOpenDropmenu(openDropmenu === menu ? null : menu);
  };

  return (
    <div>
      <nav className={styles.navContainer}>
        <div className={styles.logocontainer}>
          <Link href="/">
            <Image
              className={styles.logo}
              src={isHovered ? hoverLogoSrc : originalLogoSrc}
              alt="shlen-power Logo"
              width={130}
              height={80}
              priority
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </Link>
        </div>
        <div className={`${styles.links} flex`}>
          <Link className={`${styles.link} menuItem`} href="/">
            Home
          </Link>
          <Link className={`${styles.link} menuItem`} href="/aboutUs">
            About Us
          </Link>
          <div className={`${styles.menu} flex menuItem`}>
            Our projects <IoIosArrowDown />
            <ul className={`${styles.dropmenu} flex`}>
              <p className={styles.menuParagraph}></p>
              <Link
                href="https://spa.shlenpower.com/"
                className={styles.linkmenu}
              >
                <h2>Shlen Power Academy SPA</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
              <Link href="https://www.dlicom.io/" className={styles.linkmenu}>
                <h2>DLICom APP</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
              <Link href="/coomingSoon" className={styles.linkmenu}>
                <h2>DLIComPayment Gateway</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
              <Link href="/coomingSoon" className={styles.linkmenu}>
                <h2>DLICom POS</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
              <Link href="/coomingSoon" className={styles.linkmenu}>
                <h2>Hunty</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
              <Link href="/coomingSoon" className={styles.linkmenu}>
                <h2>Rento</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
              <Link href="/coomingSoon" className={styles.linkmenu}>
                <h2>Realestate</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
              <Link href="/coomingSoon" className={styles.linkmenu}>
                <h2>NFT Market Place</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
              <Link href="/coomingSoon" className={styles.linkmenu}>
                <h2>Decentralized exchange</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
            </ul>
          </div>
          <div className={`${styles.menu} flex menuItem`}>
            Blockchain knowledge <IoIosArrowDown />
            <ul className={`${styles.dropmenu} flex`}>
              <p className={styles.menuParagraph}></p>
              <Link href="/whatIsBlockChain" className={styles.linkmenu}>
                <h2>What is Blockchain?</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
              <Link href="/whatisZeroKnowledge" className={styles.linkmenu}>
                <h2>What is Zero Knowledge?</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
              <Link href="/dao" className={styles.linkmenu}>
                <h2>DAO</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
              <Link href="/contactUs" className={styles.linkmenu}>
                <h2>Decentrlization</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
              <Link href="/dapp" className={styles.linkmenu}>
                <h2>DAPP</h2>
                <p className={styles.linkParagraph}>
                  pioneering the future of financial
                </p>
              </Link>
            </ul>
          </div>
          <Link className={`${styles.link} menuItem`} href="/events">
            Events
          </Link>
          <Link className={`${styles.link} menuItem`} href="/contactUs">
            Conatct US
          </Link>
        </div>
      </nav>
      <nav className={styles.navMobileContainer}>
        <div className={styles.logoContainer}>
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
        <div className={styles.menuIcon} onClick={toggleSidebar}>
          <FaBars />
        </div>
        <div
          className={`${styles.sidebar} ${
            showSidebar ? styles.showSidebar : ""
          }`}
        >
          <div className={styles.closeIcon} onClick={closeSidebar}>
            <IoIosCloseCircle />
          </div>
          <div className={styles.links}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link href="/aboutUs" className={styles.link}>
              About Us
            </Link>
            <div
              className={`${styles.menu} flex menuItem`}
              onClick={() => toggleDropmenu("projects")}
            >
              <span>
                Our projects <IoIosArrowDown />
              </span>
              <ul
                className={`${styles.dropmenu} flex ${
                  openDropmenu === "projects" ? styles.showDropmenu : ""
                }`}
              >
                <p className={styles.menuParagraph}></p>
                <Link
                  href="https://spa.shlenpower.com/"
                  className={styles.linkmenu}
                >
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
              </ul>
            </div>
            <div
              className={`${styles.menu} flex menuItem`}
              onClick={() => toggleDropmenu("blockchain")}
            >
              <span>
                Blockchain knowledge <IoIosArrowDown />
              </span>
              <ul
                className={`${styles.dropmenu} flex ${
                  openDropmenu === "blockchain" ? styles.showDropmenu : ""
                }`}
              >
                <p className={styles.menuParagraph}>
                  
                </p>
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
                <Link href="/dapp" className={styles.linkmenu}>
                  DAPP
                </Link>
              </ul>
            </div>
            <Link className={`${styles.link} menuItem`} href="/events">
              Events
            </Link>
            <Link className={`${styles.link} menuItem`} href="/contactUs">
              Conatct US
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
