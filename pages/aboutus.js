import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Bilal Gilani",
      position: "founder & CEO",
      images: images.founder1,
    },
    {
      name: "Profsaz",
      position: "Block chain dev",
      images: images.founder2,
    },
    {
      name: "Luffy",
      position: "Community manager",
      images: images.founder3,
    },
    {
      name: "Eva Green",
      position: "Marketing Director",
      images: images.founder4,
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Articles have been public around the world (as of Sept. 30, 2021)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of Sept. 30, 2021)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2021",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              At 1piece nft marketplace, our vision extends beyond being a mere NFT marketplace; we strive to be a transformative force in the digital realm. We envision a cutting-edge platform where NFT staking isn't just a transaction but a rewarding experience. By participating in NFT staking on our platform, you unlock a realm of incentives — from tokens and exclusive NFTs to exciting airdrops and more. Our commitment to innovation goes further as we pioneer the integration of real-world assets with NFTs. Imagine the fusion of digital and tangible realms, where our exclusive Mad-Rabbitz clothing and shoe line becomes an intrinsic part of the NFT ecosystem. This bold step not only enhances the value of digital ownership but also brings the tangible essence of luxury and style to the world of blockchain. At 1 piece nft marketplace, we are not just shaping the future of NFTs; we are redefining the very concept of ownership, seamlessly blending the digital and physical for an unparalleled and rewarding user experience. Join us as we embark on this groundbreaking journey where NFTs transcend boundaries and redefine the possibilities of the digital frontier.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founder</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Fast Facts</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;
