import React, { FC } from "react";

// data
import customersData from "@/utils/data/customers";

const Customers: FC = () => {
  return (
    <section className="customers wrapper-padding-x">
      <h2 className="title-home-secondary title-secondary">
        Clients conquis
      </h2>
      <p className="title-home-subtitle">
        Clientèle satisfaite, résultats concrets
      </p>

      <article className="customers-wrapper">
        {customersData.map(
          ({ id, icon, name }) => (
            <div
              key={id}
              className="customers-item"
            >
              <span className="customers-item-icon">
                {icon}
              </span>
              <p className="customers-item-name">
                {name}
              </p>
            </div>
          ),
        )}
      </article>
    </section>
  );
};

export default Customers;
