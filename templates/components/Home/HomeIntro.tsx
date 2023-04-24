import React, { FC } from "react";
import IconLogo from "@/public/icons/logo.svg";

const HomeIntro: FC = () => {
  const words = [
    {
      id: 0,
      title: "Design",
    },
    {
      id: 1,
      title: "Branding",
    },
    {
      id: 2,
      title: "Development",
    },
    {
      id: 3,
      title: "Strategy",
    },
    {
      id: 4,
      title: "Product design",
    },
    {
      id: 5,
      title: "Motion graphic",
    },
    {
      id: 6,
      title: "Art direction",
    },
  ];

  return (
    <section className="home-intro wrapper-padding-x">
      <h2>
        <span>Hi, I&apos;m Tayler.</span>
        <span>
          a creative <IconLogo /> designer
        </span>
        <span>
          based in <s>london</s>
        </span>
      </h2>

      <div className="home-intro-keywords">
        <p>Design</p>
        <IconLogo />
        <p>Développement</p>
        <IconLogo />
        <p>Webflow</p>
      </div>

      <div className="home-intro-btn">
        <button>Got a project?</button>
        <button>Let&apos;s talk</button>
      </div>

      <div className="home-intro-banner">
        {words.map(({ id, title }) => (
          <div key={id}>
            <p>{title}</p>
            <IconLogo />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeIntro;
