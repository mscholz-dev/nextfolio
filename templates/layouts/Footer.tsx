import React, { FC } from "react";
import IconLogo from "@/public/icons/logo.svg";
import IconCopyright from "@/public/icons/copyright.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

// data
import socialNetworks from "@/utils/data/socialNetworks";

const Footer: FC = () => {
  return (
    <footer
      id="footer"
      className="footer wrapper-padding-x wrapper-padding-y"
    >
      <div className="footer-wrapper">
        <motion.div
          className="footer-brand-motion"
          // motion
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        >
          <Link href="/" className="footer-brand">
            <IconLogo className="footer-brand-logo" />
            <h2 className="footer-brand-title">
              mscholz.dev
            </h2>
          </Link>
        </motion.div>

        <div className="footer-outro">
          <motion.p
            className="footer-outro-text"
            // motion
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={FramerMotion.viewportOne}
            transition={FramerMotion.transitionEaseInOut(
              1,
            )}
          >
            Je suis déterminé à fournir des
            solutions de développement web de
            qualité pour aider mes clients à
            atteindre leurs objectifs en ligne.
          </motion.p>
        </div>

        <div className="footer-social-link">
          {socialNetworks.map(
            ({ id, icon, url, title }) => (
              <motion.div
                key={id}
                // motion
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={
                  FramerMotion.viewportOne
                }
                transition={{
                  ...FramerMotion.transitionEaseInOut(
                    1,
                  ),
                  delay: id * 0.1,
                }}
              >
                <a
                  href={url}
                  className="footer-social-link-item"
                  title={title}
                  target="_blank"
                >
                  {icon}
                </a>
              </motion.div>
            ),
          )}
        </div>

        <motion.div
          className="footer-copyright"
          // motion
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        >
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
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
