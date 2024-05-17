import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import CardAndText from "../components/CardAndText/CardAndText";

function page() {
  return (
    <div>
      <div className={styles.whatIsBlockSection}>
        <h1 className={styles.whatIsBlockTitle}>What is blockchain?</h1>
        <p className={styles.whatIsBlockParagraph}>
          Blockchain is a shared, immutable ledger that facilitates the process
          of recording transactions and tracking assets in a business network.
          An asset can be tangible (a house, car, cash, land) or intangible
          (intellectual property, patents, copyrights, branding). Virtually
          anything of value can be tracked and traded on a blockchain network,
          reducing risk and cutting costs for all involved.
        </p>
      </div>
      <CardAndText
        imgPath="/whyBlock.png"
        title="Why is Blockchain important?"
        firstPargraph="Business runs on information. The faster information is received and
            the more accurate it is, the better. Blockchain is ideal for
            delivering that information because it provides immediate"
        secondParagraph="shared, and observable information that is stored on an immutable
            ledger that only permissioned network members can access. A
            blockchain network can track orders, payments, accounts, production
            and much more. And because members share a single view of the truth,
            you can see all details of a transaction end to end, giving you
            greater confidence, and new efficiencies and opportunities."
      />

      <div className={`${styles.keyElementSection} flex`}>
        <div className={`${styles.TitleAndImgContainer} flex`}>
          <h1 className={styles.keyElemntTitle}>
            Key Elements Of a Blockchain
          </h1>
          <div className={styles.KeyElementImgContainer}>
            <Image
              className={styles.whyBlockImg}
              src="/keyElementImg.png"
              alt="keyElementImg"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
        <div className={`${styles.whatIsBlockCardsContainer} flex`}>
          <div className={`${styles.whatIsBlockCard} flex`}>
            <div className={styles.cardTextContainer}>
              <h2 className={styles.cardTitle}>
                Distributed Ledger Technology
              </h2>
              <p className={styles.cardParagraph}>
                All network participants have access to the distributed ledger
                and its immutable record of transactions. With this shared
                ledger, transactions are recorded only once, eliminating the
                duplication of effort that’s typical of traditional business
                networks.
              </p>
            </div>
            <div className={styles.CardNumberContainer}>1</div>
          </div>
          <div className={`${styles.whatIsBlockCard} flex`}>
            <div className={styles.cardTextContainer}>
              <h2 className={styles.cardTitle}>Smart Contracts</h2>
              <p className={styles.cardParagraph}>
                To speed transactions, a set of rules that are called a smart
                contract is stored on the blockchain and run automatically. A
                smart contract defines conditions for corporate bond transfers,
                include terms for travel insurance to be paid and much more.
              </p>
            </div>
            <div className={styles.CardNumberContainer}>2</div>
          </div>
          <div className={`${styles.whatIsBlockCard} flex`}>
            <div className={styles.cardTextContainer}>
              <h2 className={styles.cardTitle}>Immutable Records</h2>
              <p className={styles.cardParagraph}>
                No participant can change or tamper with a transaction after
                it’s been recorded to the shared ledger. If a transaction record
                includes an error, a new transaction must be added to reverse
                the error, and both transactions are then visible.
              </p>
            </div>
            <div className={styles.CardNumberContainer}>3</div>
          </div>
        </div>
      </div>

      <div className={`${styles.HowBlockChainWorksSection} flex`}>
        <h2 className={styles.HowBlockChainWorksTitle}>How Blockchain Works</h2>

        <div className={`${styles.fullWidthCard} flex`}>
          <div className={`${styles.textContainer} flex`}>
            <h1 className={styles.cardTitleHowBlock}>
              As each transaction occurs, it is recorded as a “block” of data
            </h1>
            <p className={styles.cardParagraphHowBlock}>
              Those transactions show the movement of an asset that can be
              tangible (a product) or intangible (intellectual). The data block
              can record the information of your choice: who, what, when, where,
              how much. It can even record the condition, such as the
              temperature of a food shipment.
            </p>
          </div>
          <div className={styles.HowBlockImgContainer}>
            <Image
              className={styles.HowBlockImg}
              src="/HowBlock.png"
              alt="whyBlockImg"
              width={500}
              height={400}
              priority
            />
          </div>
        </div>

        <div className={styles.rowCardsContainer}>
          <div className={`${styles.rowCard} flex`}>
            <div className={styles.HowBlockImgContainer}>
              <Image
                className={styles.HowBlockImg}
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
                tangible (a product) or intangible (intellectual). The data
                block can record the information of your choice: who, what,
                when, where, how much. It can even record the condition, such as
                the temperature of a food shipment.
              </p>
            </div>
          </div>

          <div className={`${styles.rowCard} flex`}>
            <div className={`${styles.textContainer} flex`}>
              <h1 className={styles.cardTitleHowBlock}>
                As each transaction occurs, it is recorded as a “block” of data
              </h1>
              <p className={styles.cardParagraphHowBlock}>
                Those transactions show the movement of an asset that can be
                tangible (a product) or intangible (intellectual). The data
                block can record the information of your choice: who, what,
                when, where, how much. It can even record the condition, such as
                the temperature of a food shipment.
              </p>
            </div>
            <div className={styles.HowBlockImgContainer}>
              <Image
                className={styles.HowBlockImg}
                src="/HowBlock.png"
                alt="whyBlockImg"
                width={500}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
        <div className={`${styles.bottomFullWidthCard} flex`}>
          <h1 className={styles.cardTitleHowBlock}>More efficiencies</h1>
          <p className={styles.cardParagraphHowBlock}>
            With a distributed ledger that is shared among members of a network,
            time-wasting record reconciliations are eliminated. And to speed
            transactions, a set of rules that are called a smart contract can be
            stored on the blockchain and run automatically.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
