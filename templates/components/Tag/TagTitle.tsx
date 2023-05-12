import React, { FC } from "react";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

// interfaces
import { ITagTitle } from "@/utils/interfaces";

const TagTitle: FC<ITagTitle> = ({ title }) => {
  return (
    <motion.h2
      className="title-home-secondary"
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
      {title}
    </motion.h2>
  );
};

export default TagTitle;
