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
  website,
  content,
}) => {
  return (
    <Page title={title} description={description}>
      <section className="project-url">
        {/* eslint-disable-next-line */}
        <motion.img
          src={`/img/projects/${imgSrc}.webp`}
          alt={imgAlt}
          className="project-url-img"
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

        <div className="project-url-main">
          <motion.h2
            className="project-url-title"
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

          <div className="project-url-details">
            <p className="project-url-details-item">
              <motion.span
                className="project-url-details-item-title"
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
                className="project-url-details-item-value"
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

            <p className="project-url-details-item">
              <motion.span
                className="project-url-details-item-title"
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
                Site web :
              </motion.span>

              <motion.span
                className="project-url-details-item-value"
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
                {website ? (
                  <a
                    href={`https://${website}`}
                    target="_blank"
                  >
                    {website}
                  </a>
                ) : (
                  "Hors ligne"
                )}
              </motion.span>
            </p>
          </div>

          <motion.article
            className="project-url-content"
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
