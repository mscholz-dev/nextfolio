import React, { FC } from "react";
import ProjectItem from "./ProjectItem";

const Projects: FC = () => {
  const projects = [
    {
      id: 0,
      imgSrc: "pc-genius",
      imgAlt: "TODO:",
      category: "E-commerce",
      title:
        "Préstations de réparation informatique",
    },
    {
      id: 1,
      imgSrc: "pc-genius",
      imgAlt: "TODO:",
      category: "E-commerce",
      title:
        "Préstations de réparation informatique",
    },
    {
      id: 2,
      imgSrc: "pc-genius",
      imgAlt: "TODO:",
      category: "E-commerce",
      title:
        "Préstations de réparation informatique",
    },
    {
      id: 3,
      imgSrc: "pc-genius",
      imgAlt: "TODO:",
      category: "E-commerce",
      title:
        "Préstations de réparation informatique",
    },
  ];

  return (
    <section className="projects wrapper-padding-x">
      <h2 className="projects-title title-secondary">
        Projets
      </h2>
      <p className="projects-subtitle">
        Projets web innovants
      </p>

      <article className="projects-wrapper">
        {projects.map(
          ({
            id,
            imgSrc,
            imgAlt,
            category,
            title,
          }) => (
            <ProjectItem
              key={id}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              category={category}
              title={title}
            />
          ),
        )}
      </article>
    </section>
  );
};

export default Projects;
