import React, { FC } from "react";

// interfaces
import { IArticle } from "@/utils/interfaces";

const Article: FC<IArticle> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  category,
  date,
}) => {
  return (
    <article className="article">
      {/* eslint-disable-next-line */}
      <img
        src={`/img/articles/${imgSrc}.webp`}
        alt={imgAlt}
        className="article-img"
      />

      <div>
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
      </div>

      <p className="article-description">
        {description}
      </p>
    </article>
  );
};

export default Article;
