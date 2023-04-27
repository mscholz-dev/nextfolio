import React, { FC } from "react";
import Customers from "@/templates/components/Customers";
import Newsletter from "@/templates/components/Newsletter";
import Separator from "@/templates/components/Separator";
import Page from "@/templates/layouts/Page";
import Services from "@/templates/components/Services";
import Projects from "@/templates/components/Project/Projects";
import Diplomas from "@/templates/components/Diploma/Diplomas";
import Articles from "@/templates/components/Article/Articles";

const Index: FC = () => {
  return (
    <Page
      title="Page d'accueil"
      description="TODO:"
      padding
    >
      <>
        <Separator />
        <Diplomas />
        <Separator />
        <Projects />
        <Separator />
        <Services />
        <Separator />
        <Customers />
        <Separator />
        <Articles />
        <Separator />
        <Newsletter />
      </>
    </Page>
  );
};

export default Index;
