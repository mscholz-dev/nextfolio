import React, {
  FC,
  useEffect,
  useRef,
} from "react";
import IconLogo from "@/public/icons/logo.svg";
import Banner from "@/templates/components/Banner";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

// data
import homeBanner from "@/utils/data/homeBanner";

const Intro: FC = () => {
  const router = useRouter();

  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);

  const handleSectionPadding = (): void => {
    // prevent nullable
    if (!sectionRef.current || !photoRef.current)
      return;

    if (window.innerWidth < 768) {
      sectionRef.current.style.paddingBottom = `${
        photoRef.current.offsetHeight - 64
      }px`;

      return;
    }

    sectionRef.current.style.paddingBottom = `${0}px`;
  };

  const handleProjectClick = () => {
    router.push(`/?section=contact`);
  };

  useEffect(() => {
    handleSectionPadding();

    window.addEventListener(
      "resize",
      handleSectionPadding,
    );
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="intro wrapper-padding-x"
      // motion
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      viewport={FramerMotion.viewportOne}
      transition={FramerMotion.transitionEaseInOut(
        1,
      )}
    >
      <div className="intro-main">
        <h2 className="intro-title">
          <span className="intro-title-item">
            Bonjour, je suis Morgan.
          </span>
          <span className="intro-title-item">
            un développeur{" "}
            <IconLogo className="intro-title-item-icon" />{" "}
            créatif
          </span>
          <span className="intro-title-item">
            basé à{" "}
            <s className="intro-title-item-strike">
              Lille
            </s>
          </span>
        </h2>

        <div className="intro-keywords">
          <h3 className="intro-keywords-title">
            Créatif
          </h3>
          <IconLogo className="intro-keywords-icon" />
          <h3 className="intro-keywords-title">
            Conception
          </h3>
          <IconLogo className="intro-keywords-icon" />
          <h3 className="intro-keywords-title">
            Développement
          </h3>
        </div>

        <button
          className="intro-btn"
          onClick={handleProjectClick}
        >
          <div className="intro-btn-container">
            <span className="intro-btn-text">
              Un projet ?
            </span>
            <span className="intro-btn-text">
              Un projet ?
            </span>
          </div>

          <div className="intro-btn-container">
            <span className="intro-btn-text">
              Parlons-en
            </span>
            <span className="intro-btn-text">
              Parlons-en
            </span>
          </div>
        </button>
      </div>

      {/* eslint-disable-next-line */}
      <img
        ref={photoRef}
        src="/img/morgan-scholz-picture.webp"
        alt="Photo de Morgan Scholz"
        className="intro-photo"
      />

      <Banner words={homeBanner} />
    </motion.section>
  );
};

export default Intro;
