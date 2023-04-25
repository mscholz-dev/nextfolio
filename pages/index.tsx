import React, { FC } from "react";
import Customers from "@/templates/components/Customers";
import Newsletter from "@/templates/components/Newsletter";
import Separator from "@/templates/components/Separator";
import Page from "@/templates/layouts/Page";

const Index: FC = () => {
  return (
    <Page
      title="Page d'accueil"
      description="TODO:"
      padding
    >
      <>
        <Customers />
        <Separator />
        <Newsletter />
      </>
    </Page>
  );
};

export default Index;
