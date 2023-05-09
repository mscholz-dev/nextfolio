import React, { FC, useEffect } from "react";
import Page from "@/templates/layouts/Page";
import dynamic from "next/dynamic";
import Link from "next/link";
const WebGlBackground = dynamic(
  () =>
    import(
      "@/templates/components/WebGlBackground"
    ),
  { ssr: false },
);

//data
import metaData from "@/utils/data/meta";

const NotFound: FC = () => {
  const handleFullHeight = () => {
    const main = document.getElementById("main");
    const footer =
      document.getElementById("footer");

    if (!main || !footer) return;

    main.style.minHeight = `calc(100vh - ${footer.offsetHeight}px)`;
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
      title="Page non trouvée"
      description={metaData.notFoundDescription}
      center
    >
      <section className="not-found-section wrapper-padding-x">
        <WebGlBackground />

        <article className="not-found">
          <h2 className="not-found-title">
            Cette page n&apos;existe pas ou plus.
          </h2>

          <p className="not-found-text">
            Malgré une équipe acharnée partie à sa
            recherche, la page que vous recherchez
            reste introuvable...
          </p>

          <Link
            href="/"
            className="not-found-btn"
          >
            Retourner à la page d&apos;accueil
          </Link>
        </article>
      </section>
    </Page>
  );
};

export default NotFound;
