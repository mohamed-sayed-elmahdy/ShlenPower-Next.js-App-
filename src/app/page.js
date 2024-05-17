import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Email from "./components/Email/Email";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <div>
      <div className={`${styles.mainSection} flex`}>
        <div className={`${styles.container} flex`}>
          <Link href="https://login.shlenpower.com/Login" target="_blank">
            <button className={styles.btn}>
              Join Us today & Shape Tomorrow
            </button>
          </Link>
          <h1 className={styles.title}>
            Be a Part Of <span className={styles.companyName}>Shlenpower</span>
          </h1>
          <p className={styles.paragraph}>
            Welcome to the ShlenPower Community the nexus where blockchain
            enthusiasts, learners, and investors converge. Dive into a world
            rich with insights, collaborative discussions, and the combined
            force of a global community committed to revolutionizing the digital
            landscape.
          </p>
        </div>
      </div>

      <div className={`${styles.strategySection} flex`}>
        <h2 className={styles.StrategyTitle}>Our Strategy</h2>
        <p className={styles.strategyParagraph}>
          We resolve problems associated with creative procedures.
        </p>
        <div className={`${styles.startegyCardsContainer} flex`}>
          <div className={styles.cardStartegy}>
            <video
              className={styles.icon}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "140px", height: "140px" }}
            >
              <source src="/icon-6.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <h3 className={styles.cardTitle}>Educational Hub</h3>
            <p className={styles.catdParagraph}>
              Master blockchain intricacies through curated content, tutorials,
              and live webinars
            </p>
          </div>
          <div className={styles.cardStartegy}>
            <video
              className={styles.icon}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "140px", height: "140px" }}
            >
              <source src="/icon-3.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <h3 className={styles.cardTitle}>Investment</h3>
            <p className={styles.catdParagraph}>
              Leverage the potential of the Dlicom token, linking education with
              tangible financial prospects.
            </p>
          </div>
          <div className={styles.cardStartegy}>
            <video
              className={styles.icon}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "140px", height: "140px" }}
            >
              <source src="/icon-2.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <h3 className={styles.cardTitle}>Echo system</h3>
            <p className={styles.catdParagraph}>
              A unique blend of learning, investing, and networking through
              the DLicom App
            </p>
          </div>
          <div className={styles.cardStartegy}>
            <video
              className={styles.icon}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "140px", height: "140px" }}
            >
              <source src="/icon-4.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            <h3 className={styles.cardTitle}>Global Network</h3>
            <p className={styles.catdParagraph}>
              Connect with peers from around the world, sharing insights and
              forging lasting connections in the.
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.videoSection} flex`}>
        <div className={styles.video}>
          <iframe
            src="https://player.vimeo.com/video/944472103?h=e2eefaf294"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className={styles.video}
          ></iframe>
        </div>
        <p className={styles.videoPara}>
          Welcome to the
          <span className={styles.VideoCompnayName}> ShlenPower</span> Community
        </p>
      </div>

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

      <div className={`${styles.ourProjectsSection} flex`}>
        <h2 className={styles.ourProjectsTitle}>Our Projects</h2>
        <div className={`${styles.ourProjectsCardsContainer} flex`}>
          <Link
            href="https://spa.shlenpower.com/"
            className={styles.cardLink}
            target="_blank"
          >
            <div className={styles.ourProjectsCard}>
              <h2 className={styles.ourProjectsCardTitle}>
                Shlen Power <br /> Academy SPA
              </h2>
              <p className={styles.ourProjectCardparagraph}>
                Education Hub of Blockchain Technology to our Affiliate
                Community.
              </p>
              <div className={`${styles.hovercontentContainer} flex`}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.projectsimg}
                    src="/ACADEMY.png"
                    alt="img"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
                <div className={`${styles.textcontainer} flex`}>
                  <h2 className={styles.ourProjectsCardTitleHover}>
                    Shlen Power <br /> Academy SPA
                  </h2>
                  <div className={`${styles.paragraphAndArrow} flex`}>
                    <p className={styles.ourProjectCardparagraphHover}>
                      Education Hub of Blockchain Technology to our Affiliate
                      Communicaty
                    </p>
                    <FaArrowRightLong className={styles.projectshoverIcon} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="https://www.dlicom.io/"
            className={styles.cardLink}
            target="_blank"
          >
            <div className={styles.ourProjectsCard}>
              <h2 className={styles.ourProjectsCardTitle}>Dlicom APP</h2>
              <p className={styles.ourProjectCardparagraph}>
                Next Generation Social Media Platform with Blocklchain
                Technology.
              </p>
              <div className={`${styles.hovercontentContainer} flex`}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.projectsimg}
                    src="/dli.png"
                    alt="img"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
                <div className={`${styles.textcontainer} flex`}>
                  <h2 className={styles.ourProjectsCardTitleHover}>
                    Dlicom APP
                  </h2>
                  <div className={`${styles.paragraphAndArrow} flex`}>
                    <p className={styles.ourProjectCardparagraphHover}>
                      Next Generation Social Media Platform with Blocklchain
                      Technology.
                    </p>
                    <FaArrowRightLong className={styles.projectshoverIcon} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/coomingSoon" className={styles.cardLink} target="_blank">
            <div className={styles.ourProjectsCard}>
              <h2 className={styles.ourProjectsCardTitle}>
                Dlicom Payment <br /> Gateway
              </h2>
              <p className={styles.ourProjectCardparagraph}>
                Next Generation Blockchain Payment Gateway.
              </p>
              <div className={`${styles.hovercontentContainer} flex`}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.projectsimg}
                    src="/pay.png"
                    alt="img"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
                <div className={`${styles.textcontainer} flex`}>
                  <h2 className={styles.ourProjectsCardTitleHover}>
                    Dlicompayment <br /> Gateway
                  </h2>
                  <div className={`${styles.paragraphAndArrow} flex`}>
                    <p className={styles.ourProjectCardparagraphHover}>
                      Next Generation Blockchain Payment Gateway.
                    </p>
                    <FaArrowRightLong className={styles.projectshoverIcon} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/coomingSoon" className={styles.cardLink} target="_blank">
            <div className={styles.ourProjectsCard}>
              <h2 className={styles.ourProjectsCardTitle}>Dlicom POS</h2>
              <p className={styles.ourProjectCardparagraph}>
                Next Generation Point of Sale to use Cryptocurriences in Instant
                Payment.
              </p>
              <div className={`${styles.hovercontentContainer} flex`}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.projectsimg}
                    src="/pos.png"
                    alt="img"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
                <div className={`${styles.textcontainer} flex`}>
                  <h2 className={styles.ourProjectsCardTitleHover}>
                    Dlicom POS
                  </h2>
                  <div className={`${styles.paragraphAndArrow} flex`}>
                    <p className={styles.ourProjectCardparagraphHover}>
                      Next Generation Point of Sale to use Cryptocurriences in
                      Instant Payment.
                    </p>
                    <FaArrowRightLong className={styles.projectshoverIcon} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/coomingSoon" className={styles.cardLink} target="_blank">
            <div className={styles.ourProjectsCard}>
              <h2 className={styles.ourProjectsCardTitle}>Huunty</h2>
              <p className={styles.ourProjectCardparagraph}>
                Seize the opportunities available in markets near to your
                locations.
              </p>
              <div className={`${styles.hovercontentContainer} flex`}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.projectsimg}
                    src="/hunty.png"
                    alt="img"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
                <div className={`${styles.textcontainer} flex`}>
                  <h2 className={styles.ourProjectsCardTitleHover}>Hunty </h2>
                  <div className={`${styles.paragraphAndArrow} flex`}>
                    <p className={styles.ourProjectCardparagraphHover}>
                      Seize the opportunities available in markets near to your
                      locations.
                    </p>
                    <FaArrowRightLong className={styles.projectshoverIcon} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/coomingSoon" className={styles.cardLink} target="_blank">
            <div className={styles.ourProjectsCard}>
              <h2 className={styles.ourProjectsCardTitle}>Rento 360</h2>
              <p className={styles.ourProjectCardparagraph}>
                Use rento to satisfy your property needs using Cryptocurrencies
              </p>
              <div className={`${styles.hovercontentContainer} flex`}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.projectsimg}
                    src="/rento.png"
                    alt="img"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
                <div className={`${styles.textcontainer} flex`}>
                  <h2 className={styles.ourProjectsCardTitleHover}>Rento </h2>
                  <div className={`${styles.paragraphAndArrow} flex`}>
                    <p className={styles.ourProjectCardparagraphHover}>
                      Use rento to satisfy your property needs using
                      Cryptocurrencies
                    </p>
                    <FaArrowRightLong className={styles.projectshoverIcon} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/coomingSoon" className={styles.cardLink} target="_blank">
            <div className={styles.ourProjectsCard}>
              <h2 className={styles.ourProjectsCardTitle}>Realestate </h2>
              <p className={styles.ourProjectCardparagraph}>
                The first platform that avail to buy and to invest your proerty
                using Cryptocurrency
              </p>
              <div className={`${styles.hovercontentContainer} flex`}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.projectsimg}
                    src="/realestate.png"
                    alt="img"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
                <div className={`${styles.textcontainer} flex`}>
                  <h2 className={styles.ourProjectsCardTitleHover}>
                    Realestate
                  </h2>
                  <div className={`${styles.paragraphAndArrow} flex`}>
                    <p className={styles.ourProjectCardparagraphHover}>
                      The first platform that avail to buy your proerty using
                      Cryptocurrency
                    </p>
                    <FaArrowRightLong className={styles.projectshoverIcon} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/coomingSoon" className={styles.cardLink} target="_blank">
            <div className={styles.ourProjectsCard}>
              <h2 className={styles.ourProjectsCardTitle}>NFT Market Place</h2>
              <p className={styles.ourProjectCardparagraph}>
                Be part of NFT Market Place and enjoy auctions on Unique Digital
                ownership .
              </p>
              <div className={`${styles.hovercontentContainer} flex`}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.projectsimg}
                    src="/nft.png"
                    alt="img"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
                <div className={`${styles.textcontainer} flex`}>
                  <h2 className={styles.ourProjectsCardTitleHover}>
                    NFT Market Place
                  </h2>
                  <div className={`${styles.paragraphAndArrow} flex`}>
                    <p className={styles.ourProjectCardparagraphHover}>
                      Be part of NFT Market Place and enjoy auctions on Unique
                      Digital ownership.
                    </p>
                    <FaArrowRightLong className={styles.projectshoverIcon} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/coomingSoon" className={styles.cardLink} target="_blank">
            <div className={styles.ourProjectsCard}>
              <h2 className={styles.ourProjectsCardTitle}>
                Decentralized exchange
              </h2>
              <p className={styles.ourProjectCardparagraph}>
                Enjoy Exchanging your Cryptocurrency with hundreds of available
                Currencies{" "}
              </p>
              <div className={`${styles.hovercontentContainer} flex`}>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.projectsimg}
                    src="/exchange.png"
                    alt="img"
                    width={400}
                    height={400}
                    priority
                  />
                </div>
                <div className={`${styles.textcontainer} flex`}>
                  <h2 className={styles.ourProjectsCardTitleHover}>
                    Decentralized exchange
                  </h2>
                  <div className={`${styles.paragraphAndArrow} flex`}>
                    <p className={styles.ourProjectCardparagraphHover}>
                      Enjoy Exchanging your Cryptocurrency with hundreds of
                      available Currencies
                    </p>
                    <FaArrowRightLong className={styles.projectshoverIcon} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
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

      <div className={`${styles.OurCommunitySection} flex`}>
        <h2 className={styles.OurCommunityTitle}>Our Community</h2>

        <div className={`${styles.OurCommunityCardsContainer}  flex`}>
          <div className={`${styles.OurCommunityoneAndThreeCard} flex`}>
            <div className={styles.oneAndThreeCardTop}>
              <span className={styles.cardNumber}>25+</span>
              <div className={styles.OurCommunitycardtext}>
                <h2 className={styles.OurCommunityCardTitle}>Countries</h2>
                <p className={styles.OurCommunityCardParag}>
                  Seam lessly merging blockchain <br /> education with lucrative
                  investment <br /> opportunities.
                </p>
              </div>
            </div>
            <div className={styles.oneAndThreeCardBottom}></div>
          </div>

          <div className={`${styles.OurCommunityCardTwo} flex`}>
            <div className={styles.OurCommunityTwoTopCard}></div>
            <div className={styles.ourCoreImgOnebottom}>
              <span className={styles.cardNumber}>3500+</span>

              <div className={styles.OurCommunitycardtext}>
                <h2 className={styles.OurCommunityCardTitle}>
                  Community members
                </h2>
                <p className={styles.OurCommunityCardParag}>
                  A unique blend of learning, <br /> investing, and networking
                  through <br /> the Dlicom App.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.OurCommunityoneAndThreeCard} flex`}>
            <div className={styles.oneAndThreeCardTop}>
              <span className={styles.cardNumber}>12+ Years</span>
              <div className={styles.OurCommunitycardtext}>
                <h2 className={styles.OurCommunityCardTitle}>
                  Our team experience
                </h2>
                <p className={styles.OurCommunityCardParag}>
                  12 Years of experience in the field
                </p>
              </div>
            </div>
            <div className={`${styles.oneAndThreeCardBottom} bottom`}></div>
          </div>
        </div>
      </div>

      <div className={styles.getStartedSection}>
        <h2 className={styles.getStartedTitle}>Welcome to the Community</h2>
        <p className={styles.getStartedParagraph}>
          We resolve problems associated with creative procedures.
        </p>
        <Link href="https://login.shlenpower.com/Login" target="_blank">
          <button className={styles.getStartedButton}>Get Stared</button>
        </Link>
        <p className={styles.getStartedSecondParagraph}>
          ShlenPower through the dynamic realms of fintech and investment From
          groundbreaking blockchain innovations.
        </p>
      </div>
      <Email />
    </div>
  );
}
