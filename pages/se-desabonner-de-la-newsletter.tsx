import React, { FC, useEffect } from "react";
import Page from "@/templates/layouts/Page";
import FormUnsubscribe from "@/templates/components/Form/FormUnsubscribe";
import { GetServerSidePropsContext } from "next";

// interfaces
import { INewsletterUnsubscribe } from "@/utils/interfaces";

const NewsletterUnsubscribe: FC<
  INewsletterUnsubscribe
> = ({ email }) => {
  const handleFullHeight = (): void => {
    const main = document.getElementById("main");
    const footer =
      document.getElementById("footer");

    console.log(main, footer);
    if (!main || !footer) return;

    console.log(footer.offsetHeight);

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
      title="Désabonnement de la newsletter"
      description="TODO:"
      padding
      center
    >
      <FormUnsubscribe email={email} />
    </Page>
  );
};

export const getServerSideProps = (
  ctx: GetServerSidePropsContext,
) => {
  const email = ctx.query.email || "";

  return {
    props: {
      email,
    },
  };
};

export default NewsletterUnsubscribe;
