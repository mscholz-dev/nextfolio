import Page from "@/templates/layouts/Page";
import React, { FC } from "react";
import DataMeta from "@/utils/data/meta.json";
import HomeIntro from "@/templates/components/Home/HomeIntro";
import HomeAgency from "@/templates/components/Home/HomeAgency";
import Separator from "@/templates/components/Separator";
import HomeXp from "@/templates/components/Home/HomeXp";

const Index: FC = () => {
  return (
    <Page
      title="Page d'accueil"
      description={DataMeta.metaHome}
      padding
    >
      <>
        <HomeIntro />
        <Separator />
        <HomeAgency />
        <Separator />
        <HomeXp />
        <Separator />
        <div style={{ height: "100vh" }}></div>
      </>
    </Page>
  );
};

export default Index;
