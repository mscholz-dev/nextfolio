import React, { FC } from "react";
import IconLogo from "@/public/icons/logo.svg";

const Separator: FC = () => {
  return (
    <div className="separator wrapper-padding-x">
      <span className="separator-line-one" />
      <IconLogo className="separator-icon" />
      <span className="separator-line-one" />
    </div>
  );
};

export default Separator;
