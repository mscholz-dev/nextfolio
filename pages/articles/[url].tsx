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
        <motion.img
          src={`/img/articles/${imgSrc}.webp`}
          alt={imgAlt}
          className="article-url-img"
          // motion
          initial={{
            clipPath:
              FramerMotion.clipPathPolygonLeftClose,
          }}
          whileInView={{
            clipPath:
              FramerMotion.clipPathPolygonOpen,
          }}
          viewport={FramerMotion.viewportOne}
          transition={FramerMotion.transitionEaseInOut(
            1,
          )}
        />

        <div className="article-url-main wrapper-padding-x">
          <motion.h2
            className="article-url-title"
            // motion
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={FramerMotion.viewportOne}
            transition={FramerMotion.transitionEaseInOut(
              1,
            )}
          >
            {title}
          </motion.h2>

          <div className="article-url-details">
            <p className="article-url-details-item">
              <motion.span
                className="article-url-details-item-title"
                // motion
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={
                  FramerMotion.viewportOne
                }
                transition={FramerMotion.transitionEaseInOut(
                  1,
                )}
              >
                Catégorie :
              </motion.span>

              <motion.span
                className="article-url-details-item-value"
                // motion
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={
                  FramerMotion.viewportOne
                }
                transition={{
                  ...FramerMotion.transitionEaseInOut(
                    1,
                  ),
                  delay: 0.25,
                }}
              >
                {category}
              </motion.span>
            </p>

            <p className="article-url-details-item">
              <motion.span
                className="article-url-details-item-title"
                // motion
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={
                  FramerMotion.viewportOne
                }
                transition={{
                  ...FramerMotion.transitionEaseInOut(
                    1,
                  ),
                  delay: 0.5,
                }}
              >
                Date :
              </motion.span>

              <motion.span
                className="article-url-details-item-value"
                // motion
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={
                  FramerMotion.viewportOne
                }
                transition={{
                  ...FramerMotion.transitionEaseInOut(
                    1,
                  ),
                  delay: 0.75,
                }}
              >
                {date}
              </motion.span>
            </p>
          </div>

          <motion.article
            className="article-url-content"
            // motion
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={FramerMotion.viewportOne}
            transition={FramerMotion.transitionEaseInOut(
              1,
            )}
          >
            {HTMLReactParser(content)}
          </motion.article>
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
