import React, { FC } from "react";
import TagTitle from "@/templates/components/Tag/TagTitle";
import TagSubtitle from "@/templates/components/Tag/TagSubtitle";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

// data
import customersData from "@/utils/data/customers";

const Customers: FC = () => {
  return (
    <section
      id="clients-conquis"
      className="customers wrapper-padding-x"
    >
      <TagTitle title="Clients conquis" />
      <TagSubtitle subtitle="Clientèle satisfaite, résultats concrets" />

      <article className="customers-wrapper">
        {customersData.map(
          ({ id, icon, name, url }) => (
            <motion.div
              key={id}
              className="customers-item-motion"
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
              <a
                href={url}
                target="_blank"
                className="customers-item"
              >
                <span className="customers-item-icon">
                  {icon}
                </span>
                <p className="customers-item-name">
                  {name}
                </p>
              </a>
            </motion.div>
          ),
        )}
      </article>
    </section>
  );
};

export default Customers;
