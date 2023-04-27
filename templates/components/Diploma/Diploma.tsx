import React, { FC } from "react";

// interfaces
import { IDiploma } from "@/utils/interfaces";

const Diploma: FC<IDiploma> = ({
  id,
  title,
  school,
  category,
  year,
}) => {
  return (
    <div className="diploma">
      <span className="diploma-id">{id + 1}</span>

      <div className="diploma-wrapper">
        <div className="diploma-content">
          <h3 className="diploma-title">
            {title}
          </h3>
          <p className="diploma-school">
            {school}
          </p>
        </div>

        <div className="diploma-details">
          <p className="diploma-category">
            {category}
          </p>
          <p className="diploma-year">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default Diploma;
