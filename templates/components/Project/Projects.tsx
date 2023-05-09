import React, { FC } from "react";
import ProjectItem from "@/templates/components/Project/ProjectItem";

// data
import projectsData from "@/utils/data/projects";

const Projects: FC = () => {
  return (
    <section
      id="projets"
      className="projects wrapper-padding-x"
    >
      <h2 className="title-home-secondary">
        Projets
      </h2>
      <p className="title-home-subtitle">
        Projets web innovants
      </p>

      <article className="projects-wrapper">
        {projectsData.map(
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
