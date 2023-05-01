import React, { FC } from "react";
import IconLogo from "@/public/icons/logo.svg";

// interfaces
import { IBanner } from "@/utils/interfaces";

const Banner: FC<IBanner> = ({ words }) => {
  return (
    <div className="banner">
      {words.map(({ id, word }) => (
        <div
          key={id}
          className="banner-container"
        >
          {id !== 0 && (
            <IconLogo className="banner-icon" />
          )}
          <p className="banner-word">{word}</p>
        </div>
      ))}
    </div>
  );
};

export default Banner;
