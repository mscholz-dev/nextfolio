import React, {
  FC,
  useEffect,
  useState,
} from "react";
import Page from "@/templates/layouts/Page";
import { GetServerSidePropsContext } from "next";
import NetworkLoader from "@/templates/components/Loader/NetworkLoader";
import axios from "axios";
import { useRouter } from "next/router";
import ContactValidatorClass from "@/utils/validators/ContactValidator";
import { toast } from "react-toastify";

// data
import metaData from "@/utils/data/meta";

// interfaces
import { ContactDelete } from "@/utils/interfaces";

// classes
const ContactValidator =
  new ContactValidatorClass();

const ContactDelete: FC<ContactDelete> = ({
  token,
}) => {
  const router = useRouter();

  const [loading, setLoading] =
    useState<boolean>(false);

  const handleRedirectClick = (): void => {
    // prevent form submit
    setLoading(true);

    router.push("/");
    return;
  };

  const handleDeleteClick =
    async (): Promise<void> => {
      // prevent spamming
      if (loading) return;

      setLoading(true);

      const errors =
        ContactValidator.inspectDeleteData(token);

      if (errors.length) {
        toast.error(errors[0].message);
        setLoading(false);
        return;
      }

      try {
        await axios.delete(
          `/api/contact?token=${token}`,
        );

        toast.success(
          "Votre demande de contact est supprimée !",
        );

        setLoading(false);

        return;
      } catch (err: unknown) {
        toast.error("Une erreur est survenu");
        setLoading(false);

        return;
      }
    };

  const handleFullHeight = (): void => {
    const main = document.getElementById("main");
    const footer =
      document.getElementById("footer");

    if (!main || !footer) return;

    main.style.minHeight = `${
      window.innerHeight -
      footer.offsetHeight -
      96
    }px`;
  };

  useEffect(() => {
    handleFullHeight();
    window.addEventListener(
      "resize",
      handleFullHeight,
    );
  }, []);

  return (
    <Page
      title="Supprimer ma demande de contact"
      description={
        metaData.contactDeleteDescription
      }
      padding
      center
    >
      <section className="question wrapper-padding-x">
        <h2 className="title-home-secondary">
          Souhaitez-vous supprimer votre demande
          de contact ?
        </h2>

        <p className="title-home-subtitle">
          Prenez le contrôle : Effacez votre
          demande de contact en un clic !
        </p>

        <div className="question-btn-container">
          <button
            className="btn-primary question-btn"
            onClick={handleDeleteClick}
          >
            {!loading ? (
              "Oui"
            ) : (
              <NetworkLoader tiny />
            )}
          </button>
          <button
            className="btn-primary-color question-btn"
            onClick={handleRedirectClick}
          >
            {!loading ? (
              "Non"
            ) : (
              <NetworkLoader tiny />
            )}
          </button>
        </div>
      </section>
    </Page>
  );
};

export const getServerSideProps = (
  ctx: GetServerSidePropsContext,
) => {
  return {
    props: {
      token: ctx.query.token || "",
    },
  };
};

export default ContactDelete;
