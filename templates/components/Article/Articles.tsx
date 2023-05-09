import React, { FC } from "react";
import Article from "@/templates/components/Article/Article";

// data
import articlesData from "@/utils/data/articles";

const Articles: FC = () => {
  return (
    <section
      id="articles"
      className="articles wrapper-padding-x"
    >
      <h2 className="title-home-secondary">
        Articles
      </h2>
      <p className="title-home-subtitle">
        Mes réflexions sur le développement web
      </p>

      <div className="articles-wrapper">
        {articlesData.map(
          ({
            id,
            imgSrc,
            imgAlt,
            title,
            url,
            description,
            category,
            date,
          }) => (
            <Article
              key={id}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              title={title}
              url={url}
              description={description}
              category={category}
              date={date}
            />
          ),
        )}
      </div>

      <button className="btn-primary-full articles-btn">
        Chercher plus d&apos;articles
      </button>
    </section>
  );
};

export default Articles;
