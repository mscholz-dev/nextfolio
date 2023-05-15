import React, { FC } from "react";
import IconChevron from "@/public/icons/chevron.svg";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

// interfaces
import { IProjectItem } from "@/utils/interfaces";

const ProjectItem: FC<IProjectItem> = ({
  id,
  imgSrc,
  imgAlt,
  category,
  title,
}) => {
  return (
    <div className="project-item">
      <span className="project-item-cover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src={`/img/cover/${imgSrc}.webp`}
          alt={imgAlt}
          className="project-item-img"
          // motion
          initial={{
            clipPath:
              id % 2 === 1
                ? FramerMotion.clipPathPolygonRightClose
                : FramerMotion.clipPathPolygonLeftClose,
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

      <div className="project-item-content">
        <motion.div
          className="project-item-category"
          // motion
          initial={{
            opacity: 0,
            x: id % 2 === 1 ? -100 : 100,
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
          <p className="project-item-category-light">
            {category}
          </p>

          <p className="project-item-category-colored">
            {category}
          </p>
        </motion.div>

        <motion.h3
          className="project-item-title title-tertiary"
          // motion
          initial={{
            opacity: 0,
            x: id % 2 === 1 ? -100 : 100,
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
          className="project-item-cta"
          // motion
          initial={{
            opacity: 0,
            x: id % 2 === 1 ? -100 : 100,
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
          <span className="project-item-cta-text">
            Voir plus
          </span>
          <IconChevron className="project-item-cta-arrow" />
        </motion.p>
      </div>
    </div>
  );
};

export default ProjectItem;
