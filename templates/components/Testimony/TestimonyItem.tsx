import React, { FC, useState } from "react";
import Image from "next/image";

// interfaces
import { ITestimonyItem } from "@/utils/interfaces";

const TestimonyItem: FC<ITestimonyItem> = ({
  img,
  firstName,
  lastName,
  job,
  company,
  audio,
}) => {
  const [listening, setListening] =
    useState(false);

  const handleClick = () =>
    setListening(!listening);

  return (
    <button
      className={`testimony-item${
        listening
          ? " testimony-item-listening"
          : ""
      }`}
      onClick={handleClick}
    >
      <Image
        src={`/img/testimonies/${img}.webp`}
        alt={`${firstName} ${lastName}`}
        className="testimony-item-img"
        height={500}
        width={500}
      />

      <div className="testimony-item-content">
        <h3 className="testimony-item-title">
          <span className="testimony-item-title-item">
            {firstName}
          </span>{" "}
          <span className="testimony-item-title-item">
            {lastName}
          </span>
        </h3>

        <p className="testimony-item-job">
          {job}
        </p>

        <p className="testimony-item-company">
          {company}
        </p>
      </div>

      <div className="testimony-item-btn">
        <span className="testimony-item-btn-icon" />

        <audio
          src={`/audios/testimonies/${audio}.mp3`}
          className="testimony-item-audio"
        />
      </div>
    </button>
  );
};

export default TestimonyItem;
