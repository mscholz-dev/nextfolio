import React, { FC } from "react";

const Services: FC = () => {
  const services = [
    {
      id: 0,
      title: "Développement de site web ",
      text: "Je crée des sites web sur mesure pour répondre aux besoins de mes clients. Je travaille en étroite collaboration avec eux pour comprendre leur vision et leurs objectifs, puis je conçois et développe un site web qui les représente et répond à leurs besoins.",
    },
    {
      id: 1,
      title: "Création d'API",
      text: "Je peux créer des API personnalisées pour permettre à mes clients d'intégrer leurs applications, services ou logiciels avec d'autres plates-formes. Je travaille avec eux pour comprendre leurs besoins spécifiques, puis je crée une API qui fonctionne parfaitement avec leur infrastructure existante.",
    },
    {
      id: 2,
      title: "Conception de site web",
      text: "Je crée des designs de sites web élégants et modernes qui attirent l'attention des visiteurs et reflètent l'essence de l'entreprise. Je travaille avec mes clients pour comprendre leurs objectifs et leur vision, puis je conçois un site web qui les représente.",
    },
    {
      id: 3,
      title: "Conception de base de données",
      text: "Je peux concevoir et mettre en place des bases de données personnalisées pour répondre aux besoins de mes clients. Je travaille avec eux pour comprendre les données qu'ils doivent stocker et les utilise pour créer une base de données efficace et bien structurée.",
    },
  ];

  return (
    <section className="services wrapper-padding-x">
      <h2 className="services-title title-secondary">
        Services
      </h2>
      <p className="services-subtitle">
        Solution web personnalisée sur mesure
      </p>

      <article className="services-wrapper">
        {services.map(({ id, title, text }) => (
          <div key={id} className="services-item">
            <h3 className="services-item-title title-tertiary">
              {title}
            </h3>
            <p className="services-item-text">
              {text}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Services;
