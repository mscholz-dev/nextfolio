import React, { FC } from "react";
import IconLogo from "@/public/icons/logo.svg";
import Banner from "./Banner";

// data
import homeBanner from "@/utils/data/homeBanner";

const Intro: FC = () => {
  return (
    <section className="intro wrapper-padding-x">
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

      <Banner words={homeBanner} />
    </section>
  );
};

export default Intro;
