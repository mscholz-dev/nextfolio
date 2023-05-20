import React, { FC } from "react";
import Page from "@/templates/layouts/Page";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import HTMLReactParser from "html-react-parser";
import { motion } from "framer-motion";
import FramerMotion from "@/utils/FramerMotion";

// data
import projectsData from "@/utils/data/projects";

// interfaces
import { IProjectUrl } from "@/utils/interfaces";

const ProjectUrl: FC<IProjectUrl> = ({
  id,
  imgSrc,
  imgAlt,
  title,
  url,
  description,
  category,
  dates,
  responsability,
  problemToSolve,
  goals,
  strenghts,
  content,
}) => {
  return (
    <Page title={title} description={description}>
      <section className="project-url">
        {/* eslint-disable-next-line */}
        <img
          src={`/img/projects/${imgSrc}.webp`}
          alt={imgAlt}
          className="project-url-img"
        />

        <div className="project-url-main">
          <h2 className="project-url-title">
            {title}
          </h2>

          <article className="project-url-content">
            {HTMLReactParser(content)}
          </article>
        </div>
      </section>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths<{
  url: string;
}> = async () => {
  const paths = projectsData.map(
    ({ url }) => `/projets/${url}`,
  );

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params: { url },
}: GetStaticPropsContext<any>): Promise<
  GetStaticPropsResult<any>
> => {
  const project = projectsData.find(
    (item) => item.url === url,
  );

  return {
    props: { ...project },
  };
};

export default ProjectUrl;
