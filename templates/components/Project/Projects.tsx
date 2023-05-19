import React, { FC } from "react";
import ProjectItem from "@/templates/components/Project/ProjectItem";
import TagTitle from "@/templates/components/Tag/TagTitle";
import TagSubtitle from "@/templates/components/Tag/TagSubtitle";

// data
import projectsData from "@/utils/data/projects";

const Projects: FC = () => {
  return (
    <section
      id="projets"
      className="projects wrapper-padding-x"
    >
      <TagTitle title="Projets" />
      <TagSubtitle subtitle="Projets web innovants" />

      <article className="projects-wrapper">
        {projectsData.map(
          ({
            id,
            imgSrc,
            imgAlt,
            title,
            url,
            category,
          }) => (
            <ProjectItem
              key={id}
              id={id}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              title={title}
              url={url}
              category={category}
            />
          ),
        )}
      </article>
    </section>
  );
};

export default Projects;
