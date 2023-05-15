import React, { FC } from "react";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

// interfaces
import { IDiploma } from "@/utils/interfaces";

const Diploma: FC<IDiploma> = ({
  id,
  title,
  school,
  category,
  year,
}) => {
  return (
    <motion.div
      className="diploma-motion"
      // motion
      initial={{
        opacity: 0,
        x: id % 2 === 0 ? -200 : 200,
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
      <div className="diploma">
        <span className="diploma-id">
          {id + 1}
        </span>

        <div className="diploma-wrapper">
          <div className="diploma-content">
            <h3 className="diploma-title">
              {title}
            </h3>
            <p className="diploma-school">
              {school}
            </p>
          </div>

          <div className="diploma-details">
            <p className="diploma-category">
              {category}
            </p>
            <p className="diploma-year">{year}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Diploma;
