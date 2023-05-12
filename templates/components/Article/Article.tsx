import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

// interfaces
import { IArticle } from "@/utils/interfaces";

const Article: FC<IArticle> = ({
  id,
  imgSrc,
  imgAlt,
  title,
  url,
  description,
  category,
  date,
}) => {
  return (
    <motion.div
      className="article-motion"
      // motion
      initial={{
        opacity: 0,
        x: id % 2 === 0 ? -300 : 300,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={FramerMotion.viewportOne}
      transition={FramerMotion.transitionEaseInOut(
        1,
      )}
    >
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

          <h3 className="article-title">
            {title}
          </h3>

          <p className="article-description">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Article;
