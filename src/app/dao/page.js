import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import CardAndText from "../components/CardAndText/CardAndText";

function page() {
  return (
    <div>
      <div className={styles.whatIsBlockSection}>
        <h1 className={styles.whatIsBlockTitle}>
          What Is a Decentralized Autonomous Organization (DAO)?
        </h1>
        <p className={styles.whatIsBlockParagraph}>
          A decentralized autonomous organization (DAO) is an emerging form of
          legal structure that has no central governing body and whose members
          share a common goal to act in the best interest of the entity.
          Popularized through cryptocurrency enthusiasts and blockchain
          technology, DAOs are used to make decisions in a bottom-up management
          approach.
        </p>
      </div>
      <div className={styles.WhatIsparagraph}>
        <h1>KEY TAKEAWAYS</h1>
        <p className={styles.ZeroParagraph}>
          A decentralized autonomous organization is an entity structure in
          which tokenholders participate in the management and decision-making
          of an entity.
        </p>
        <p className={styles.ZeroParagraph}>
          There is no central authority of a DAO; instead, power is distributed
          across token holders who collectively cast votes.
        </p>
        <p className={styles.ZeroParagraph}>
          All votes and activity through the DAO are posted on a blockchain,
          making all actions of users publicly viewable.
        </p>
        <p className={styles.ZeroParagraph}>
          One of the first DAOs named The DAO was an organization created by
          developers to automate decisions and facilitate cryptocurrency
          transactions.
        </p>
        <p className={styles.ZeroParagraph}>
          A DAO must ensure security is prioritized, as exploits can leave a DAO
          drained of millions of dollars of its treasury savings.
        </p>
      </div>
      <CardAndText
        imgPath="/whyBlock.png"
        title="What Is the Purpose of Decentralized Autonomous Organizations (DAOs)?"
        firstPargraph="One of the major features of digital currencies is that they are decentralized.
         This means they are not controlled by a single institution like a government or central bank, 
         but instead are divided among a variety of computers, networks, and nodes. In many cases, 
         virtual currencies make use of this decentralized status to attain levels of privacy and
          security that are typically unavailable to standard currencies and their transactions."
        secondParagraph="Inspired by the decentralization of cryptocurrencies,
         a group of developers came up with the idea for a decentralized autonomous organization,
          or DAO, in 2016. The concept of a DAO is to promote oversight and management of an entity 
          similar to a corporation. However, the key to a DAO is the lack of central authority; the 
          collective group of leaders and participants act as the governing body."
      />

      <div className={styles.WhatIsparagraph}>
        <h1>How DAOs Work</h1>
        <p className={styles.ZeroParagraph}>
          DAOs rely heavily on smart contracts. These logically coded agreements
          dictate decision-making based on underlying activity on a blockchain.
          For example, based on the outcome of a decision, certain code may be
          implemented to increase the circulating supply, burn of a select
          amount of reserve tokens, or issue select rewards to existing token
          holders.
        </p>
        <p className={styles.ZeroParagraph}>
          The voting process for DAOs is posted on a blockchain. Users must
          often select between mutually-exclusive options. Voting power is often
          distributed across users based on the number of tokens they hold. For
          example, one user that owns 100 tokens of the DAO will have twice the
          weight of voting power over a user that owns 50 tokens.
        </p>
        <p className={styles.ZeroParagraph}>
          The theory behind this practice is users who are more monetarily
          invested in the DAO are incentivized to act in good faith. Imagine a
          user who owns 25% overall voting power. This user can participate in
          bad acts; however, by doing so, the user will jeopardize the value of
          their 25% holding.
        </p>
        <p className={styles.ZeroParagraph}>
          DAOs often have treasuries that house tokens that can be issued in
          exchange for fiat. Members of the DAO can vote on how to use those
          funds; for example, some DAOs with the intention of acquiring rare
          NFTs can vote on whether to relinquish treasury funds in exchange for
          assets.
        </p>
        <p className={styles.ZeroParagraph}>
          In 2021, ConstitutionDAO was formed in an attempt to buy a copy of the
          U.S. Constitution. Though the DAO failed at acquiring the asset, the
          DAO proved a collection of like-minded individuals could form and
          pursue such endeavors.
        </p>
      </div>

      <div className={styles.WhatIsparagraph}>
        <h1>Benefits of DAOs</h1>
        <h3>
          There are several reasons why an entity or collective group of
          individuals may want to pursue a DAO structure. Some of the benefits
          of this form of management include:
        </h3>
        <ul>
          <li>
            <p className={styles.ZeroParagraph}>
              <strong>Decentralization.</strong> Decisions impacting the
              organization are made by a collection of individuals as opposed to
              a central authority that is often vastly outnumbered by their
              peers. Instead of relying on the actions of one individual (CEO)
              or a small collection of individuals (Board of Directors), a DAO
              can decentralize authority across a vastly larger range of users.
            </p>
          </li>
          <li>
            <p className={styles.ZeroParagraph}>
              <strong>Participation.</strong>Individuals within an entity may
              feel more empowered and connected to the entity when they have a
              direct say and voting power on all matters. These individuals may
              not have strong voting power, but a DAO encourages token holders
              to cast votes, burn tokens, or use their tokens in ways they think
              is best for the entity.
            </p>
          </li>
          <li>
            <p className={styles.ZeroParagraph}>
              <strong>Publicity.</strong> Within a DAO, votes are cast via
              blockchain and made publicly viewable. This requires users to act
              in ways they feel is best, as their vote and their decisions will
              be made publicly viewable. This incentivizes actions that will
              benefit voters' reputations and discourage acts against the
              community.
            </p>
          </li>
          <li>
            <p className={styles.ZeroParagraph}>
              <strong>Community.</strong> The concept of a DAO encourages people
              from all over the world to seamlessly come together to build a
              single vision. With just an internet connection, tokenholders can
              interact with other owners wherever they may live.
            </p>
          </li>
        </ul>
      </div>

      <div className={styles.WhatIsparagraph}>
        <h1>Limitations of DAOs</h1>
        <h3>
          Not everything is perfect regarding DAOS, though. There are severe
          consequences to improperly setting up or maintaining a DAO. Here are
          some limitations to the DAO structure:
        </h3>
        <ul>
          <li>
            <p className={styles.ZeroParagraph}>
              <strong>Speed.</strong> If a public company is guided by a CEO, a
              single vote may be needed to decide a specific action or course
              for the company to take. With a DAO, every user is given an
              opportunity to vote. This requires a much longer voting period,
              especially considering time zones and priorities outside of the
              DAO.
            </p>
          </li>
          <li>
            <p className={styles.ZeroParagraph}>
              <strong>Education.</strong> Similar to the issue of speed, a DAO
              has the responsibility of educating a lot more people in regards
              to pending entity activity. A single CEO is much easier to keep in
              charge of company developments, while token holders of a DAO may
              have ranging educational backgrounds, understanding of
              initiatives, incentives, or accessibility to resources. A common
              challenge of DAOs is that while they bring a diverse set of people
              together, that diverse set of people must learn how to grow,
              strategize, and communicate as a single unit.
            </p>
          </li>
          <li>
            <p className={styles.ZeroParagraph}>
              <strong>Inefficiency.</strong> Partially summarizing the first two
              bullets, DAOs run a major risk of being inefficient. Because of
              the time needed to educate voters, communicate initiatives,
              explain strategies, and onboard new members, it is easy for a DAO
              to spend much more time discussing change than implementing it. A
              DAO may get bogged down in trivial, administrative tasks due to
              the nature of needing to coordinate much more individuals.
            </p>
          </li>
          <li>
            <p className={styles.ZeroParagraph}>
              <strong>Security.</strong> An issue facing all digital platforms
              for blockchain resources is security. A DAO requires significant
              technical expertise to implement; without it, there may be
              invalidity to how votes are cast or decisions are made. Trust may
              be broken and users leave the entity if they can't rely on the
              structure of the entity. Even through the use of multi-sig or cold
              wallets, DAOs can be exploited, treasury reserves stolen, and
              vaults emptied.
            </p>
          </li>
        </ul>
      </div>

      <div className={styles.compareContainer}>
        <h2>DAOs</h2>
        <div className={styles.container}>
          <div className={styles.left}>
            <h3>Pros</h3>
            <p>
              A variety of individuals can collectively come together from
              around the work to act as a single entity. More individuals have a
              voice in the planning, strategy, and operations of the entity.
            </p>
            <p>
              As votes on the blockchain are publicly-viewable, tokenholders are
              naturally incentivized to act more responsibly. Members of a DAO
              may feel empowered to collaborate with like-minded individuals
              with similar goals within a single community.
            </p>
          </div>
          <div className={styles.right}>
            <h3>Cons</h3>
            <p>
              It often takes longer for decisions to be made as there are more
              voting participants
            </p>
            <p>
              There is often more burden to educate users as the collective
              voting population are diverse with varying ranges of education and
              knowledge. More time is needed to cast votes or gather users due
              to the decentralized nature of the entity, Severe exploits such as
              theft of treasury reserves are possible if the DAO's security is
              not properly established and maintained.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
