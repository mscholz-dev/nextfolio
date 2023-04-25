import React, { FC } from "react";
import IconLinkedin from "@/public/icons/linkedin.svg";
import IconGithub from "@/public/icons/github.svg";
import IconInstagram from "@/public/icons/instagram.svg";
import IconRootMe from "@/public/icons/root-me.svg";
import IconLogo from "@/public/icons/logo.svg";
import IconCopyright from "@/public/icons/copyright.svg";
import Link from "next/link";

const Footer: FC = () => {
  const socialLinks = [
    {
      id: 0,
      icon: <IconLinkedin />,
      url: "https://www.linkedin.com/in/morgan-scholz/",
      title: "Profil Linkedin de Morgan Scholz",
    },
    {
      id: 1,
      icon: <IconGithub />,
      url: "https://github.com/mscholz-dev",
      title: "Profile Github de Morgan Scholz",
    },
    {
      id: 2,
      icon: <IconInstagram />,
      url: "https://www.instagram.com/mscholz.dev/",
      title: "Profil Instagram de Morgan Scholz",
    },
    {
      id: 3,
      icon: <IconRootMe />,
      url: "https://www.root-me.org/mscholz-dev",
      title: "Profil Root Me de Morgan Scholz",
    },
  ];

  return (
    <footer className="footer wrapper-padding-x wrapper-padding-y">
      <div className="footer-wrapper">
        <Link href="/" className="footer-brand">
          <IconLogo className="footer-brand-logo" />
          <h2 className="footer-brand-title">
            mscholz.dev
          </h2>
        </Link>

        <div className="footer-outro">
          <p className="footer-outro-text">
            Je suis déterminé à fournir des
            solutions de développement web de
            qualité pour aider mes clients à
            atteindre leurs objectifs en ligne.
          </p>
        </div>

        <div className="footer-social-link">
          {socialLinks.map(
            ({ id, icon, url, title }) => (
              <a
                key={id}
                href={url}
                className="footer-social-link-item"
                title={title}
              >
                {icon}
              </a>
            ),
          )}
        </div>

        <div className="footer-copyright">
          <IconCopyright className="footer-copyright-icon" />
          <p className="footer-copyright-text">
            Avril 2023 mscholz.dev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
