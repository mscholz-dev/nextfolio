import Page from "@/templates/layouts/Page";
import React, { FC } from "react";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import HTMLReactParser from "html-react-parser";

// data
import articlesData from "@/utils/data/articles";

// interfaces
import { IArticleUrl } from "@/utils/interfaces";

const ArticleUrl: FC<IArticleUrl> = ({
  id,
  imgSrc,
  imgAlt,
  title,
  url,
  description,
  category,
  date,
  content,
}) => {
  return (
    <Page title={title} description={description}>
      <section className="article-url">
        {/* eslint-disable-next-line */}
        <img
          src={`/img/articles/${imgSrc}.webp`}
          alt={imgAlt}
          className="article-url-img"
        />

        <div className="article-url-main wrapper-padding-x">
          <h2 className="article-url-title">
            {title}
          </h2>

          <div className="article-url-details">
            <p className="article-url-details-item">
              <span className="article-url-details-item-title">
                Catégorie :
              </span>
              <span className="article-url-details-item-value">
                {category}
              </span>
            </p>

            <p className="article-url-details-item">
              <span className="article-url-details-item-title">
                Date :
              </span>
              <span className="article-url-details-item-value">
                {date}
              </span>
            </p>
          </div>

          <article className="article-url-content">
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
  const paths = articlesData.map(
    ({ url }) => `/articles/${url}`,
  );

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params: { url },
}: GetStaticPropsContext<any>): Promise<
  GetStaticPropsResult<any>
> => {
  const article = articlesData.find(
    (item) => item.url === url,
  );

  return {
    props: { ...article },
  };
};

export default ArticleUrl;
