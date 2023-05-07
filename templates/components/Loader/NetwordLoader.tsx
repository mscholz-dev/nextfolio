import React, { FC } from "react";

// interfaces
import { INetworkLoader } from "@/utils/interfaces";

const NetworkLoader: FC<INetworkLoader> = ({
  tiny,
}) => {
  return (
    <div
      className={`network-loader${
        tiny ? " network-loader-tiny" : ""
      }`}
    >
      <div className="network-loader-bar"></div>
      <div className="network-loader-bar"></div>
      <div className="network-loader-bar"></div>
      <div className="network-loader-bar"></div>
    </div>
  );
};

export default NetworkLoader;
