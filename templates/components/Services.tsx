import React, { FC } from "react";
import TagTitle from "@/templates/components/Tag/TagTitle";
import TagSubtitle from "@/templates/components/Tag/TagSubtitle";

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
          ),
        )}
      </article>
    </section>
  );
};

export default Services;
