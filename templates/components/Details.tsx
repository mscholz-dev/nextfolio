import React, { FC } from "react";
import IconLogo from "@/public/icons/logo.svg";
import IconFileDownload from "@/public/icons/file-download.svg";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

// data
import informations from "@/utils/data/details/informations";
import statistics from "@/utils/data/details/statistics";

const Details: FC = () => {
  return (
    <section
      id="presentation"
      className="details wrapper-padding-x"
    >
      <div className="details-titles">
        <motion.p
          className="details-info-title"
          // motion
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        >
          Solutions de développement web uniques
          et évolutives, conçues pour répondre à
          vos besoins spécifiques et améliorer
          votre efficacité et votre rentabilité.
        </motion.p>

        <motion.h2
          className="details-title"
          // motion
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        >
          Solutions de développement web sur
          mesure
        </motion.h2>

        <motion.h3
          className="details-name"
          // motion
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        >
          Morgan{" "}
          <IconLogo className="details-name-logo" />{" "}
          Scholz
        </motion.h3>
      </div>

      <div className="details-info">
        <motion.p
          className="details-info-text"
          // motion
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        >
          Je suis un développeur web expérimenté,
          passionné par la création de solutions
          web personnalisées pour les entreprises
          de toutes tailles. Je travaille en
          étroite collaboration avec mes clients
          pour comprendre leurs défis et leurs
          objectifs uniques, afin de concevoir des
          solutions web uniques et évolutives qui
          répondent à leurs besoins spécifiques.
        </motion.p>

        <motion.p
          className="details-info-text"
          // motion
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        >
          Mes solutions de développement web sur
          mesure sont conçues pour améliorer
          l&apos;efficacité et la rentabilité de
          votre entreprise, en s&apos;adaptant à
          vos processus et workflows uniques. Avec
          une approche centrée sur
          l&apos;utilisateur, je m&apos;assure que
          mes solutions web offrent une expérience
          utilisateur exceptionnelle, tout en
          répondant à vos objectifs commerciaux.
        </motion.p>

        <motion.p
          className="details-info-text"
          // motion
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        >
          Si vous cherchez un partenaire en
          développement web pour des solutions sur
          mesure, n&apos;hésitez pas à explorer
          mon portfolio pour découvrir mes
          réalisations et à me contacter pour
          discuter de votre projet.
        </motion.p>

        <div className="details-info-wrapper">
          {informations.map(
            ({ id, title, text }) => (
              <motion.div
                key={id}
                className="details-info-item"
                // motion
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={
                  FramerMotion.viewportOne
                }
                transition={{
                  ...FramerMotion.transitionEaseInOut(
                    1,
                  ),
                  delay: (id - 1) * 0.25,
                }}
              >
                <p className="details-info-item-title">
                  {title}
                </p>
                <p className="details-info-item-text">
                  {text}
                </p>
              </motion.div>
            ),
          )}
        </div>
      </div>

      <article className="details-article">
        {statistics.map(({ id, title, stat }) => (
          <motion.div
            key={id}
            className="details-article-item"
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
            <p className="details-article-item-stat">
              {stat}
            </p>
            <p className="details-article-item-title">
              {title}
            </p>
          </motion.div>
        ))}
      </article>

      <motion.div
        className="details-download-motion"
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
        <a
          href="/pdf/CV_Morgan_SCHOLZ.pdf"
          target="_blank"
          className="details-download"
        >
          <IconFileDownload className="details-download-icon" />

          <p className="details-download-text">
            Télécharger mon CV
          </p>
        </a>
      </motion.div>
    </section>
  );
};

export default Details;
