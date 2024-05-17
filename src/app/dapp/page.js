import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import CardAndText from "../components/CardAndText/CardAndText";

function page() {
  return (
    <div>
      <div className={styles.whatIsBlockSection}>
        <h1 className={styles.whatIsBlockTitle}>
          What Is a Dapp? Decentralized Apps
        </h1>
        <p className={styles.whatIsBlockParagraph}></p>
      </div>
      <div className={styles.WhatIsparagraph}>
        <p className={styles.ZeroParagraph}>
          Decentralized applications are creating a new digital economy of
          peer-to-peer services that removes power from monopolistic companies.
        </p>
        <p className={styles.ZeroParagraph}>
          A decentralized application – or dapp – is like a digital app found on
          any smartphone or laptop, with the additional feature of employing
          blockchain technology to keep users’ data out of the hands of the
          organizations behind it. Just like cryptocurrency is decentralized
          money, dapps are decentralized apps.
        </p>
        <p className={styles.ZeroParagraph}>
          The blockchain stores copies of its expanding stack of data on a large
          number of participating computers, known as “nodes,” all at once.
          These computers are owned by users, not by the creators of the dapp. A
          full explanation of how blockchain technology works can be found here.
        </p>
        <p className={styles.ZeroParagraph}>
          Dapps are as varied as conventional apps: They can provide social
          networks, games, entertainment, productivity tools and so on. Many are
          designed as tools to help consumers access decentralized financial
          services, or DeFi. This latter function is so widespread that the
          Ethereum network white paper categorized dapps into "financial,"
          "semi-financial" and "other."
        </p>
        <p className={styles.ZeroParagraph}>
          Ethereum has been the dominant host for dapps so far. At its
          foundation, one of the primary goals of the network was to make dapps
          easier to create.
        </p>
        <p className={styles.ZeroParagraph}>
          Dapp users may feel more secure in the knowledge that the creators of
          the application cannot control how it is used - at least, not in the
          conventional way. For example, the creators of a social network dapp
          are powerless to remove a post or exclude a user. They are also unable
          to sell users’ data to other entities because dapps run autonomously
          once they’re launched.
        </p>
        <p className={styles.ZeroParagraph}>
          How is this possible? It’s all down to the use of smart contracts –
          computer programs deployed and on a blockchain designed to execute the
          rules of a contract without human involvement. For example, a smart
          contract could be coded to issue a loan once a user deposits a
          sufficient amount of collateral into it. Dapps are also commonly open
          source, meaning that anyone can view and use the underlying code.
        </p>
        <p className={styles.ZeroParagraph}>
          Decentralized autonomous organizations, or DAOs, can be seen as a kind
          of dapp. They aim to use an intricate arrangement of smart contracts
          to achieve the functions of a traditional organization without the
          need for corporate executives and hierarchies. They determine policy
          entirely through a weighted voting system where members who lock away
          more tokens possess greater voting power. The idea behind this concept
          is that those who have committed more funds to a DAO will be more
          likely to participate in it honestly, for the good of the
          organization.
        </p>
      </div>
    </div>
  );
}

export default page;
