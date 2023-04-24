import React, { FC } from "react";
import IconLogo from "@/public/icons/logo.svg";

const HomeAgency: FC = () => {
  const informations = [
    {
      id: 0,
      title: "Born in",
      text: "New York",
    },
    {
      id: 1,
      title: "Experience",
      text: "7+ years",
    },
    {
      id: 2,
      title: "Date of birth",
      text: "27 June 1992",
    },
  ];

  const statistics = [
    {
      id: 0,
      number: 7,
      text: "Years of experience",
    },
    {
      id: 1,
      number: 50,
      text: "Project completed",
    },
    {
      id: 2,
      number: 30,
      text: "Happy clients",
    },
  ];

  return (
    <section className="home-agency wrapper-padding-x wrapper-padding-y">
      <article className="home-agency-article-top">
        <div className="home-agency-block-title">
          <p>
            Tayler <IconLogo /> Barthold
          </p>
          <h2 className="title-secondary">
            Best creative and modern agency.
          </h2>
        </div>

        <div className="home-agency-block-text">
          <p>
            Various versions have evolved over the
            years, sometimes by accident,
            sometimes on purpose injected humour
            and the like.
          </p>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do
            elusmod tempor incident ut labore et
            dolore magna aliqua.
          </p>

          <div className="home-agency-info">
            {informations.map(
              ({ id, title, text }) => (
                <div key={id}>
                  <span>{title}</span>
                  <span>{text}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </article>

      <article className="home-agency-article-bottom">
        {statistics.map(
          ({ id, number, text }) => (
            <div key={id}>
              <span>{number}+</span>
              <span>{text}</span>
            </div>
          ),
        )}
      </article>
    </section>
  );
};

export default HomeAgency;
