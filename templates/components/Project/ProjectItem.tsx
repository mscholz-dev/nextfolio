import React, { FC } from "react";
import IconChevron from "@/public/icons/chevron.svg";

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
        <div className="project-item-category">
          <p className="project-item-category-light">
            {category}
          </p>

          <p className="project-item-category-colored">
            {category}
          </p>
        </div>

        <h3 className="project-item-title title-tertiary">
          {title}
        </h3>

        <p className="project-item-cta">
          <span className="project-item-cta-text">
            Voir plus
          </span>
          <IconChevron className="project-item-cta-arrow" />
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
