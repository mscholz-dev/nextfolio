import React, { FC } from "react";

// interfaces
import { IArticle } from "@/utils/interfaces";
import Link from "next/link";

const Article: FC<IArticle> = ({
  imgSrc,
  imgAlt,
  title,
  url,
  description,
  category,
  date,
}) => {
  return (
    <Link
      href={`/articles/${url}`}
      className="article"
    >
      <span className="article-img-container">
        {/* eslint-disable-next-line */}
        <img
          src={`/img/articles/${imgSrc}.webp`}
          alt={imgAlt}
          className="article-img"
        />
      </span>

      <div className="article-wrapper">
        <p className="article-details">
          <span className="article-details-item">
            {category}
          </span>{" "}
          /{" "}
          <span className="article-details-item">
            {date}
          </span>
        </p>

        <h3 className="article-title">{title}</h3>

        <p className="article-description">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Article;
