import React, { FC } from "react";
import TagTitle from "@/templates/components/Tag/TagTitle";
import TagSubtitle from "@/templates/components/Tag/TagSubtitle";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

// data
import servicesData from "@/utils/data/services";

const Services: FC = () => {
  return (
    <section
      id="services"
      className="services wrapper-padding-x"
    >
      <TagTitle title="Services" />
      <TagSubtitle subtitle="Solution web personnalisée sur mesure" />

      <article className="services-wrapper">
        {servicesData.map(
          ({ id, title, text }) => (
            <motion.div
              key={id}
              // motion
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={FramerMotion.viewportOne}
              transition={FramerMotion.transitionEaseInOut(
                1,
              )}
            >
              <div
                key={id}
                className="services-item"
              >
                <h3 className="services-item-title title-tertiary">
                  {title}
                </h3>
                <p className="services-item-text">
                  {text}
                </p>
              </div>
            </motion.div>
          ),
        )}
      </article>
    </section>
  );
};

export default Services;
