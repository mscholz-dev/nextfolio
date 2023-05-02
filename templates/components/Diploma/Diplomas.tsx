import React, { FC } from "react";
import Diploma from "@/templates/components/Diploma/Diploma";

// data
import diplomasData from "@/utils/data/diplomas";

const Diplomas: FC = () => {
  return (
    <section className="diplomas wrapper-padding-x">
      <h2 className="title-home-secondary">
        Diplômes
      </h2>
      <p className="title-home-subtitle">
        Mon parcours en développement web
      </p>

      <article className="diplomas-wrapper">
        {diplomasData.map(
          ({
            id,
            title,
            school,
            category,
            year,
          }) => (
            <Diploma
              key={id}
              id={id}
              title={title}
              school={school}
              category={category}
              year={year}
            />
          ),
        )}
      </article>
    </section>
  );
};

export default Diplomas;
