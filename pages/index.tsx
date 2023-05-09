import React, { FC } from "react";
import Customers from "@/templates/components/Customers";
import Newsletter from "@/templates/components/Newsletter";
import Separator from "@/templates/components/Separator";
import Page from "@/templates/layouts/Page";
import Services from "@/templates/components/Services";
import Projects from "@/templates/components/Project/Projects";
import Diplomas from "@/templates/components/Diploma/Diplomas";
import Articles from "@/templates/components/Article/Articles";
import Intro from "@/templates/components/Intro";
import Details from "@/templates/components/Details";
import Testimony from "@/templates/components/Testimony/Testimony";
import Mernt from "@/templates/components/Mernt/Mernt";
import FormHome from "@/templates/components/Form/FormHome";
import { useRouter } from "next/router";

// data
import metaData from "@/utils/data/meta";

const Index: FC = () => {
  const router = useRouter();

  return (
    <Page
      title="Page d'accueil"
      description={metaData.indexDescription}
      padding
    >
      <>
        <Intro />

        <Details />
        <Separator />

        <Diplomas />
        <Separator />

        <Projects />
        <Separator />

        <Mernt />
        <Separator />

        <Services />
        <Separator />

        <Customers />
        <Separator />

        <Testimony />
        <Separator />

        <Articles />
        <Separator />

        <Newsletter />
        <Separator />

        <FormHome />
        <Separator />
      </>
    </Page>
  );
};

export default Index;
