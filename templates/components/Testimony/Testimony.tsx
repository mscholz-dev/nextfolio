import React, { FC } from "react";
import TestimonyItem from "./TestimonyItem";
import TagTitle from "@/templates/components/Tag/TagTitle";
import TagSubtitle from "@/templates/components/Tag/TagSubtitle";

// data
import testimonies from "@/utils/data/testimonies";

const Testimony: FC = () => {
  return (
    <section
      id="temoignages"
      className="testimony wrapper-padding-x"
    >
      <TagTitle title="Témoignages" />
      <TagSubtitle subtitle="Ce qu'on dit de moi" />

      <article className="testimony-wrapper">
        {testimonies.map(
          ({
            id,
            firstName,
            lastName,
            job,
            company,
            audio,
            img,
            transcription,
          }) => (
            <TestimonyItem
              key={id}
              firstName={firstName}
              lastName={lastName}
              job={job}
              company={company}
              audio={audio}
              img={img}
              transcription={transcription}
            />
          ),
        )}
      </article>
    </section>
  );
};

export default Testimony;
