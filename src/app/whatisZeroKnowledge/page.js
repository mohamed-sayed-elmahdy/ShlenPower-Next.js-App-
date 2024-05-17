"use client";
import React from "react";
import styles from "./page.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Email from "../components/Email/Email";

function page() {


  return (
    <div>
      <div className={styles.WhatIsaZeroSection}>
        <h1 className={styles.WhatIsaZeroSectionTitle}>
          What Is a Zero-Knowledge Proof?
        </h1>
      </div>

      <div className={styles.WhatIstextContainer}>
        <div className={`${styles.introducingcontainer} flex`}>
          <div className={styles.introducingtext}>
            <h3 className={styles.introducingTitle}>Introduction</h3>
            <p className={styles.introducingparagraph}>
              Zero-knowledge proofs (ZKPs) are a cryptographic method used to
              prove knowledge about a piece of data, without revealing the data
              itself.
            </p>
          </div>
          <div className={`${styles.introducingicon} flex`}>
            <FaPhoneAlt />
            <FaPhoneAlt />
            <FaPhoneAlt />
          </div>
        </div>

        <div className={styles.WhatIsparagraph}>
          <h1>What Is a Zero-Knowledge Proof?</h1>
          <p>
            While the inherent transparency of blockchains provides an advantage
            in many situations, there are also a number of smart contract use
            cases that require privacy due to various business or legal reasons,
            such as using proprietary data as inputs to trigger a smart
            contract’s execution. An increasingly common way privacy is achieved
            on public blockchain networks is through zero-knowledge proofs
            (ZKPs)—a method for one party to cryptographically prove to another
            that they possess knowledge about a piece of information without
            revealing the actual underlying information. In the context of
            blockchain networks, the only information revealed on-chain by a ZKP
            is that some piece of hidden information is valid and known by the
            prover with a high degree of certainty.
          </p>
        </div>
        <div className={styles.WhatIsparagraph}>
          <h1>Zero Knowledge vs. Zero Trust</h1>
          <p className={styles.ZeroParagraph}>
            “Zero knowledge” refers to the specific cryptographic method of
            zero-knowledge proofs, while “zero trust” is a general cyber
            security model used by organizations to protect their data,
            premises, and other resources.
          </p>
          <p className={styles.ZeroParagraph}>
            The zero-trust framework assumes that every person and device, both
            internal and external to the network, could be a threat due to
            malicious behavior or simple incompetence. To mitigate threats,
            zero-trust systems require users and devices to be authenticated,
            authorized, and continuously validated before access to resources is
            granted.
          </p>
          <p className={styles.ZeroParagraph}>
            Zero-knowledge proofs can be used as part of a zero-trust framework.
            For example, zero-knowledge authentication solutions can allow
            employees to access their organization’s network, without having to
            reveal personal details.
          </p>
        </div>
        <div className={styles.WhatIsparagraph}>
          <h1>How Do Zero-Knowledge Proofs Work</h1>
          <p className={styles.ZeroParagraph}>
            At a high level, a zero-knowledge proof works by having the verifier
            ask the prover to perform a series of actions that can only be
            performed accurately if the prover knows the underlying information.
            If the prover is only guessing as to the result of these actions,
            then they will eventually be proven wrong by the verifier’s test
            with a high degree of probability.
          </p>
          <p className={styles.ZeroParagraph}>
            Zero-knowledge proofs were first described in a 1985 MIT paper from
            Shafi Goldwasser and Silvio Micali called “The Knowledge Complexity
            of Interactive Proof-Systems”. In this paper, the authors
            demonstrate that it is possible for a prover to convince a verifier
            that a specific statement about a data point is true without
            disclosing any additional information about the data. ZKPs can
            either be interactive—where a prover convinces a specific verifier
            but needs to repeat this process for each individual verifier—or
            non-interactive—where a prover generates a proof that can be
            verified by anyone using the same proof.
          </p>
          <ul className={styles.paragraphLists}>
            <li>
              <b>Completeness:</b> If a statement is true, then an honest
              verifier can be convinced by an honest prover that they possess
              knowledge about the correct input.
            </li>
            <li>
              <b>Soundness:</b> If a statement is false, then no dishonest
              prover can unilaterally convince an honest verifier that they
              possess knowledge about the correct input.
            </li>
            <li>
              <b>Zero-knowledge:</b> If the state is true, then the verifier
              learns nothing more from the prover other than the statement is
              true.
            </li>
          </ul>
        </div>

        <div className={styles.WhatIsCardsContainer}>
          <h2 className={styles.WhatIsCardsTitle}>Read More</h2>
          <div className={`${styles.container} flex`}>
            <div className={`${styles.card} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  src="/whyBlock.png"
                  alt="img"
                  width={100}
                  height={100}
                  priority
                />
              </div>
              <div className={`${styles.textContainer} flex`}>
                <h4>Blockchain</h4>
                <h2>What is blockchain?</h2>
                <p>
                  Blockchain is a shared, immutable ledger that facilitates the
                  process of recording
                </p>
              </div>
            </div>
            <div className={`${styles.card} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  src="/zeroPage.png"
                  alt="img"
                  width={100}
                  height={100}
                  priority
                />
              </div>
              <div className={`${styles.textContainer} flex`}>
                <h4>Blockchain</h4>
                <h2>What is blockchain?</h2>
                <p>
                  Blockchain is a shared, immutable ledger that facilitates the
                  process of recording
                </p>
              </div>
            </div>
            <div className={`${styles.card} flex`}>
              <div className={styles.imgContainer}>
                <Image
                  className={styles.img}
                  src="/zeroPage.png"
                  alt="img"
                  width={100}
                  height={100}
                  priority
                />
              </div>
              <div className={`${styles.textContainer} flex`}>
                <h4>Blockchain</h4>
                <h2>What is blockchain?</h2>
                <p>
                  Blockchain is a shared, immutable ledger that facilitates the
                  process of recording
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Email/>
    </div>
  );
}

export default page;
