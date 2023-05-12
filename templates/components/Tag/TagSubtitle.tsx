import React, { FC } from "react";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

// interfaces
import { ITagSubtitle } from "@/utils/interfaces";

const TagSubtitle: FC<ITagSubtitle> = ({
  subtitle,
}) => {
  return (
    <motion.p
      className="title-home-subtitle"
      // motion
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={FramerMotion.viewportOne}
      transition={FramerMotion.transitionEaseInOut(
        1,
      )}
    >
      {subtitle}
    </motion.p>
  );
};

export default TagSubtitle;
