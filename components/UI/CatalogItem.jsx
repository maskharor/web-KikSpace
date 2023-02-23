import React from "react";
import classes from "../../styles/catalog-item.module.css";
import Image from "next/image";

const CatalogItem = (props) => {
  const { title, img, liveUrl, keyword } = props.item;
  return (
    <div className={`${classes.catalog_item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.catalog_keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.catalog_img}`}>
        <Image alt="portfolio-img" src={img} width="280" height="280" />
      </div>
    </div>
  );
};

export default CatalogItem;
