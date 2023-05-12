import React, { FC } from "react";
import TagTitle from "@/templates/components/Tag/TagTitle";
import TagSubtitle from "@/templates/components/Tag/TagSubtitle";

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
            <a
              key={id}
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
          ),
        )}
      </article>
    </section>
  );
};

export default Customers;
