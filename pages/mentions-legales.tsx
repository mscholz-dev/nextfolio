import Page from "@/templates/layouts/Page";
import React, { FC } from "react";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

// data
import metaData from "@/utils/data/meta";

const LegalNotice: FC = () => {
  return (
    <Page
      title="Mentions légales"
      description={
        metaData.legalNoticeDescription
      }
      padding
    >
      <section className="legal-notice wrapper-padding-x">
        <motion.div
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
          <h2 className="title-secondary">
            Éditeur du site
          </h2>
          <p>
            <b>Nom et prénom : </b>Morgan Scholz
          </p>
          <p>
            <b>Adresse : </b>Wasquehal,
            France
          </p>
          <p>
            <b>Email : </b>
            <a href="mailto:mscholz.dev@gmail.com">
              mscholz.dev@gmail.com
            </a>
          </p>
          <p>
            <b>Site web : </b>
            <a href="https://mscholz.dev">
              mscholz.dev
            </a>
          </p>
        </motion.div>

        <motion.div
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
          <h2>Hébergeur du site</h2>
          <p>
            <b>Nom : </b>Vercel
          </p>
          <p>
            <b>Adresse : </b>340 S Lemon Ave #4133
            Walnut, CA 91789
          </p>
          <p>
            <b>Email : </b>
            <a href="mailto:privacy@vercel.com">
              privacy@vercel.com
            </a>
          </p>
          <p>
            <b>Site web : </b>
            <a
              href="https://vercel.com"
              target="_blank"
            >
              vercel.com
            </a>
          </p>
        </motion.div>

        <motion.div
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
          <h2>
            Numéro d&apos;identification fiscale
          </h2>
          <p>
            <b>SIRET : </b>XXXXXXXXX
          </p>
          <h2>
            Autorités de régulation compétentes
          </h2>
          <p>
            Conforme <b>RGPD</b> (Règlement
            général sur la protection des
            données).
          </p>
        </motion.div>

        <motion.div
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
          <h2>Reproduction</h2>
          <p>
            Tous les contenus présents sur ce
            site, y compris mais sans s&apos;y
            limiter, les textes, les images, les
            graphiques, les logos et les vidéos,
            sont{" "}
            <b>
              protégés par des droits
              d&apos;auteur et sont la propriété
              exclusive de Morgan Scholz
            </b>
            , sauf indication contraire. Toute
            reproduction, distribution,
            modification ou utilisation non
            autorisée de ces contenus, en tout ou
            en partie, est strictement interdite.
          </p>
          <p>
            Vous ne pouvez pas copier, modifier,
            reproduire, republier, télécharger,
            afficher, transmettre ou distribuer
            ces contenus sans notre consentement
            écrit préalable. Toute violation de
            ces droits d&apos;auteur peut
            entraîner des poursuites judiciaires
            et des réclamations pour dommages et
            intérêts. Nous nous réservons tous les
            droits qui ne sont pas expressément
            accordés dans ces mentions légales.
          </p>
        </motion.div>

        <motion.div
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
          <h2>Newsletter</h2>
          <p>
            En vous inscrivant à notre newsletter,
            vous consentez à recevoir des e-mails
            promotionnels, des actualités et des
            informations liées à nos produits et
            services.{" "}
            <b>
              Nous nous engageons à respecter
              votre vie privée et à protéger vos
              données personnelles.
            </b>{" "}
            Votre adresse e-mail sera stockée en
            toute sécurité dans notre base de
            données, conformément à notre
            politique de confidentialité.
          </p>
          <p>
            Nous conservons vos coordonnées
            pendant une période de <b>deux ans</b>{" "}
            à des fins d&apos;analyse, de suivi et
            d&apos;amélioration de nos campagnes
            de marketing. Si vous souhaitez vous
            désabonner de notre liste de diffusion
            à tout moment, veuillez suivre les{" "}
            <b>instructions de désabonnement</b>{" "}
            fournies dans nos e-mails ou nous
            contacter directement.
          </p>
        </motion.div>

        <motion.div
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
          <h2>Formulaire de contact</h2>
          <p>
            En utilisant notre formulaire de
            contact, vous consentez à ce que nous
            utilisions les informations que vous
            fournissez afin de répondre à votre
            demande. Nous nous réservons le droit
            de vous contacter par e-mail ou par
            téléphone pour discuter de votre
            demande spécifique. Les informations
            collectées via le formulaire de
            contact comprennent votre nom, prénom,
            adresse e-mail, numéro de téléphone,
            ainsi que le sujet et le message de
            votre demande. Ces données seront
            stockées en toute sécurité dans notre
            base de données conformément à notre
            politique de confidentialité.
          </p>
          <p>
            Nous conservons vos informations
            pendant une période de <b>deux ans</b>
            , afin de pouvoir vous fournir un
            service continu, assurer le suivi de
            votre demande et améliorer notre
            qualité de service. Vos données
            personnelles ne seront pas partagées
            avec des tiers sans votre consentement
            préalable. Si vous souhaitez que vos{" "}
            <b>informations soient supprimées</b>{" "}
            de notre base de données avant la fin
            de cette période, veuillez nous
            contacter directement.
          </p>
        </motion.div>

        <motion.div
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
          <h2>Cookies</h2>
          <p>
            Nous ne utilisons{" "}
            <b>pas de cookies</b> sur ce site.
            Nous respectons votre vie privée et ne
            collectons pas d&apos;informations
            personnelles à travers des cookies.
            Par conséquent, vous pouvez naviguer
            sur notre site en toute tranquillité,
            sans craindre le suivi ou la collecte
            de données via des cookies. Si à
            l&apos;avenir nous décidons
            d&apos;utiliser des cookies, nous
            mettrons à jour notre politique en
            matière de cookies pour vous fournir
            toutes les informations nécessaires
            sur leur utilisation.
          </p>
        </motion.div>

        <motion.div
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
          <h2>Clause de non-responsabilité</h2>
          <p>
            Nous{" "}
            <b>déclinons toute responsabilité</b>{" "}
            quant aux contenus des sites externes
            vers lesquels des liens peuvent être
            fournis sur ce site.
          </p>
        </motion.div>

        <motion.div
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
          <h2>
            Signalement des contenus illicites
          </h2>
          <p>
            Si vous constatez un contenu illicite
            ou inapproprié sur ce site, veuillez
            nous
            <b>
              contacter à l&apos;adresse e-mail
              mentionnée ci-dessus
            </b>{" "}
            pour nous en informer.
          </p>
        </motion.div>

        <motion.div
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
          <h2>Juridiction et loi applicable</h2>
          <p>
            En cas de litige, la juridiction
            compétente est celle de Lille, France,
            et la loi applicable est celle de
            France.
          </p>
        </motion.div>
      </section>
    </Page>
  );
};

export default LegalNotice;
