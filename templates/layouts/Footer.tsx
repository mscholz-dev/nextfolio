import React, { FC } from "react";
import IconLinkedin from "@/public/icons/linkedin.svg";
import IconGithub from "@/public/icons/github.svg";
import IconRootMe from "@/public/icons/root-me.svg";
import IconInstagram from "@/public/icons/instagram.svg";

const Footer: FC = () => {
  const socialLinks = [
    {
      id: 0,
      icon: <IconLinkedin />,
      title: "Profil Linkedin de Morgan Scholz",
    },
    {
      id: 1,
      icon: <IconGithub />,
      title: "Profil Github de Morgan Scholz",
    },
    {
      id: 2,
      icon: <IconInstagram />,
      title: "Profil Instagram de Morgan Scholz",
    },
    {
      id: 3,
      icon: <IconRootMe />,
      title: "Profil Root Me de Morgan Scholz",
    },
  ];

  return (
    <footer>
      <p>test</p>
    </footer>
  );
};

export default Footer;
