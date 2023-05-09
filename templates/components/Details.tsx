import React, { FC } from "react";
import IconLogo from "@/public/icons/logo.svg";

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
        <p className="details-info-title">
          Solutions de développement web uniques
          et évolutives, conçues pour répondre à
          vos besoins spécifiques et améliorer
          votre efficacité et votre rentabilité.
        </p>

        <h2 className="details-title">
          Solutions de développement web sur
          mesure
        </h2>
        <h3 className="details-name">
          Morgan{" "}
          <IconLogo className="details-name-logo" />{" "}
          Scholz
        </h3>
      </div>

      <div className="details-info">
        <p className="details-info-text">
          Je suis un développeur web expérimenté,
          passionné par la création de solutions
          web personnalisées pour les entreprises
          de toutes tailles. Je travaille en
          étroite collaboration avec mes clients
          pour comprendre leurs défis et leurs
          objectifs uniques, afin de concevoir des
          solutions web uniques et évolutives qui
          répondent à leurs besoins spécifiques.
        </p>

        <p className="details-info-text">
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
        </p>

        <p className="details-info-text">
          Si vous cherchez un partenaire en
          développement web pour des solutions sur
          mesure, n&apos;hésitez pas à explorer
          mon portfolio pour découvrir mes
          réalisations et à me contacter pour
          discuter de votre projet.
        </p>

        <div className="details-info-wrapper">
          {informations.map(
            ({ id, title, text }) => (
              <div
                key={id}
                className="details-info-item"
              >
                <p className="details-info-item-title">
                  {title}
                </p>
                <p className="details-info-item-text">
                  {text}
                </p>
              </div>
            ),
          )}
        </div>
      </div>

      <article className="details-article">
        {statistics.map(({ id, title, stat }) => (
          <div
            key={id}
            className="details-article-item"
          >
            <p className="details-article-item-stat">
              {stat}
            </p>
            <p className="details-article-item-title">
              {title}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Details;
