import React, { FC } from "react";

// data
import servicesData from "@/utils/data/services";

const Services: FC = () => {
  return (
    <section
      id="services"
      className="services wrapper-padding-x"
    >
      <h2 className="title-home-secondary title-secondary">
        Services
      </h2>
      <p className="title-home-subtitle">
        Solution web personnalisée sur mesure
      </p>

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
