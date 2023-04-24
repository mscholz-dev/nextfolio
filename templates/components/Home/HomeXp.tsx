import React, { FC } from "react";

const HomeXp: FC = () => {
  const experiences = [
    {
      id: 0,
      title: "AIGA Modern Painting Award Jump",
      company: 'Runner Up - "Decor of the week "',
      category: "Product design",
      year: "2021",
    },
    {
      id: 1,
      title: "AIGA Modern Painting Award Jump",
      company: 'Runner Up - "Decor of the week "',
      category: "Development",
      year: "2020",
    },
    {
      id: 2,
      title: "AIGA Modern Painting Award Jump",
      company: 'Runner Up - "Decor of the week "',
      category: "Branding",
      year: "2018",
    },
  ];

  return (
    <section className="home-xp wrapper-padding-y wrapper-padding-x">
      <h2 className="title-secondary">Awards</h2>
      <p>Regonitions & accomplishments</p>

      <article>
        {experiences.map(
          ({
            id,
            title,
            company,
            category,
            year,
          }) => (
            <div key={id}>
              <div className="home-xp-item-number">
                <span>{id + 1}</span>
              </div>

              <div>
                <div className="home-xp-item-titles">
                  <h3>{title}</h3>
                  <p>{company}</p>
                </div>

                <div className="home-xp-item-aside">
                  <p>{category}</p>
                  <p>{year}</p>
                </div>
              </div>
            </div>
          ),
        )}
      </article>
    </section>
  );
};

export default HomeXp;
