import React, { FC } from "react";
import TestimonyItem from "./TestimonyItem";

// data
import testimonies from "@/utils/data/testimonies";

const Testimony: FC = () => {
  return (
    <section className="testimony wrapper-padding-x">
      <h2 className="title-home-secondary">
        Témoignages
      </h2>
      <p className="title-home-subtitle">
        Ce qu&apos;on dit de moi
      </p>

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
          }) => (
            <TestimonyItem
              key={id}
              firstName={firstName}
              lastName={lastName}
              job={job}
              company={company}
              audio={audio}
              img={img}
            />
          ),
        )}
      </article>
    </section>
  );
};

export default Testimony;
