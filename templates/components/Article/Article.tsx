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
    <div className="article-motion">
      <Link
        href={`/articles/${url}`}
        className="article"
      >
        <span className="article-img-container">
          {/* eslint-disable-next-line */}
          <motion.img
            src={`/img/articles/${imgSrc}.webp`}
            alt={imgAlt}
            className="article-img"
            // motion
            initial={{
              clipPath:
                FramerMotion.clipPathPolygonLeftClose,
            }}
            whileInView={{
              clipPath:
                FramerMotion.clipPathPolygonOpen,
            }}
            viewport={FramerMotion.viewportOne}
            transition={FramerMotion.transitionEaseInOut(
              1,
            )}
          />
        </span>

        <div className="article-wrapper">
          <motion.p
            className="article-details"
            // motion
            initial={{
              opacity: 0,
              x: 100,
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
            <span className="article-details-item">
              {category}
            </span>{" "}
            /{" "}
            <span className="article-details-item">
              {date}
            </span>
          </motion.p>

          <motion.h3
            className="article-title"
            // motion
            // motion
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={FramerMotion.viewportOne}
            transition={{
              ...FramerMotion.transitionEaseInOut(
                1,
              ),
              delay: 0.25,
            }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="article-description"
            // motion
            // motion
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={FramerMotion.viewportOne}
            transition={{
              ...FramerMotion.transitionEaseInOut(
                1,
              ),
              delay: 0.5,
            }}
          >
            {description}
          </motion.p>
        </div>
      </Link>
    </div>
  );
};

export default Article;
