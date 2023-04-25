import Newsletter from "@/templates/components/Newsletter";
import Page from "@/templates/layouts/Page";
import React, { FC } from "react";

const Index: FC = () => {
  return (
    <Page
      title="Page d'accueil"
      description="TODO:"
      padding
    >
      <>
        <Newsletter />
      </>
    </Page>
  );
};

export default Index;
