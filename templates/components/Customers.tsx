import React, { FC } from "react";
import IconCopyright from "@/public/icons/copyright.svg";

const Customers: FC = () => {
  const companies = [
    {
      id: 0,
      icon: <IconCopyright />,
      name: "PC Genius",
    },
    {
      id: 2,
      icon: <IconCopyright />,
      name: "PC Genius",
    },
  ];

  // TODO: here

  return (
    <section className="customers">
      <h2 className="customers-title">
        Clients conquis
      </h2>

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
