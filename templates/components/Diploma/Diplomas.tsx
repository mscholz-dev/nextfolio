import React, { FC } from "react";
import Diploma from "@/templates/components/Diploma/Diploma";
import TagTitle from "@/templates/components/Tag/TagTitle";
import TagSubtitle from "@/templates/components/Tag/TagSubtitle";

// data
import diplomasData from "@/utils/data/diplomas";

const Diplomas: FC = () => {
  return (
    <section
      id="diplomes"
      className="diplomas wrapper-padding-x"
    >
      <TagTitle title="Diplômes" />
      <TagSubtitle subtitle="Mon parcours en développement web" />

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
