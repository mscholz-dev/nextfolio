import React, { FC } from "react";
import IconPCGenius from "@/public/icons/customers/pc-genius.svg";

const Customers: FC = () => {
  const companies = [
    {
      id: 0,
      icon: <IconPCGenius />,
      name: "PC Genius",
    },
  ];

  return (
    <section className="customers wrapper-padding-x">
      <h2 className="customers-title title-secondary">
        Clients conquis
      </h2>
      <p className="customers-subtitle">
        Clientèle satisfaite, résultats concrets
      </p>

      <article className="customers-wrapper">
        {companies.map(({ id, icon, name }) => (
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
        ))}
      </article>
    </section>
  );
};

export default Customers;
