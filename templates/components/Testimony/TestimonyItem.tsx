import React, {
  FC,
  useEffect,
  useState,
  useRef,
} from "react";
import Image from "next/image";
import IconPause from "@/public/icons/pause.svg";
import IconPlay from "@/public/icons/play.svg";
import IconBackward from "@/public/icons/backward.svg";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

// interfaces
import { ITestimonyItem } from "@/utils/interfaces";

const TestimonyItem: FC<ITestimonyItem> = ({
  img,
  firstName,
  lastName,
  job,
  company,
  audio,
  transcription,
}) => {
  const indicatorRef =
    useRef<HTMLSpanElement>(null);

  const [audioFile, setAudioFile] =
    useState<null | HTMLAudioElement>(null);

  const [listening, setListening] =
    useState(false);

  const handleClick = (): void => {
    // prevent nullable
    if (!audioFile) return;

    if (listening) {
      setListening(false);
      audioFile.pause();
      return;
    }

    audioFile.currentTime = 0;
    audioFile.play();
    setListening(true);
  };

  const handleCurrentTime = (): void => {
    // prevent nullable
    if (!indicatorRef.current || !audioFile)
      return;

    indicatorRef.current.style.width = `${
      (audioFile.currentTime /
        audioFile.duration) *
      100
    }%`;
  };

  useEffect((): void => {
    setAudioFile(
      new Audio(
        `/audios/testimonies/${audio}.mp3`,
      ),
    );

    // eslint-disable-next-line
  }, []);

  useEffect((): void => {
    // prevent nullable
    if (!audioFile) return;

    audioFile.addEventListener(
      "timeupdate",
      handleCurrentTime,
    );

    // eslint-disable-next-line
  }, [audioFile]);

  return (
    <motion.div
      className="testimony-item-motion"
      // motion
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={FramerMotion.viewportOne}
      transition={FramerMotion.transitionEaseInOut(
        1,
      )}
    >
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

        <span className="testimony-item-filter" />

        <p className="testimony-item-transcription">
          {transcription}
        </p>

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

        <span className="testimony-item-btn">
          {audioFile !== null &&
          audioFile.currentTime !== 0 ? (
            <IconBackward className="testimony-item-btn-icon" />
          ) : listening ? (
            <IconPause className="testimony-item-btn-icon" />
          ) : (
            <IconPlay className="testimony-item-btn-icon play" />
          )}
        </span>

        <span
          ref={indicatorRef}
          className="testimony-item-indicator"
        />
      </button>
    </motion.div>
  );
};

export default TestimonyItem;
