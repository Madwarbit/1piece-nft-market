import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
  const CategoryArray = [
    {
      images: images.creatorbackground11,
      name: "Pixel Art",
    },
    {
      images: images.creatorbackground11,
      name: "Sports",
    },
    {
      images: images.creatorbackground11,
      name: "Animated Art",
    },
    {
      images: images.creatorbackground11,
      name: "Programable NFTs",
    },
    {
      images: images.creatorbackground11,
      name: "Animal Art",
    },
    {
      images: images.creatorbackground11,
      name: "Music",
    },
    {
      images: images.creatorbackground11,
      name: "Digital Arts",
    },
    {
      images: images.creatorbackground11,
      name: "Blockchain Ids",
    },
    {
      images: images.creatorbackground11,
      name: "Charity & Social",
    },
    {
      images: images.creatorbackground11,
      name: " Photography",
    },
    {
      images: images.creatorbackground11,
      name: "My Fav",
    },
    {
      images: images.creatorbackground11,
      name: "Videos",
    },
    {
      images: images.creatorbackground11,
      name: "Graphic Novals",
    },
    {
      images: images.creatorbackground11,
      name: "Digital Comics",
    },
    {
      images: images.creatorbackground11,
      name: "Utility Tokens",
    },
    {
      images: images.creatorbackground11,
      name: "Meta Fashion",
    },
    {
      images: images.creatorbackground11,
      name: "Virtual Assets",
    },
    {
      images: images.creatorbackground11,
      name: "Collectables",
    },
  ];
  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={i + 1}>
            <Image
              src={el.images}
              className={Style.category_box_img}
              alt="Background image"
              width={350}
              height={150}
              objectFit="cover"
            />

            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>{el.name}</h4>
                <small>{i + 1}11 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
