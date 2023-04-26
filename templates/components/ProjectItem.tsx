import React, { FC } from "react";

// interfaces
import { IProjectItem } from "@/utils/interfaces";

const ProjectItem: FC<IProjectItem> = ({
  imgSrc,
  imgAlt,
  category,
  title,
}) => {
  return (
    <div className="project-item">
      <span className="project-item-cover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/img/cover/${imgSrc}.webp`}
          alt={imgAlt}
          className="project-item-img"
        />
      </span>

      <div className="project-item-content">
        <p className="project-item-category">
          {category}
        </p>
        <h3 className="project-item-title title-tertiary">
          {title}
        </h3>

        <p className="project-item-cta">
          Voir plus
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
