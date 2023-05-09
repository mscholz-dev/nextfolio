import React, { FC } from "react";
import IconLogo from "@/public/icons/logo.svg";
import IconCopyright from "@/public/icons/copyright.svg";
import Link from "next/link";

// data
import socialNetworks from "@/utils/data/socialNetworks";

const Footer: FC = () => {
  return (
    <footer
      id="footer"
      className="footer wrapper-padding-x wrapper-padding-y"
    >
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
          {socialNetworks.map(
            ({ id, icon, url, title }) => (
              <a
                key={id}
                href={url}
                className="footer-social-link-item"
                title={title}
                target="_blank"
              >
                {icon}
              </a>
            ),
          )}
        </div>

        <div className="footer-copyright">
          <IconCopyright className="footer-copyright-icon" />
          <p className="footer-copyright-text">
            Avril 2023 •{" "}
            <Link
              href="/mentions-legales"
              className="footer-legal-notice"
            >
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
