import React, {
  FC,
  useEffect,
  useRef,
} from "react";
import IconLogo from "@/public/icons/logo.svg";
import Banner from "./Banner";

// data
import homeBanner from "@/utils/data/homeBanner";

const Intro: FC = () => {
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

  useEffect(() => {
    handleSectionPadding();

    window.addEventListener(
      "resize",
      handleSectionPadding,
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="intro wrapper-padding-x"
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

        <button className="intro-btn">
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
    </section>
  );
};

export default Intro;
