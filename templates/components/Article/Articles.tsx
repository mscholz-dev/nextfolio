import React, { FC } from "react";
import Article from "@/templates/components/Article/Article";
import TagTitle from "@/templates/components/Tag/TagTitle";
import TagSubtitle from "@/templates/components/Tag/TagSubtitle";

// data
import articlesData from "@/utils/data/articles";

const Articles: FC = () => {
  return (
    <section
      id="articles"
      className="articles wrapper-padding-x"
    >
      <TagTitle title="Articles" />
      <TagSubtitle subtitle="Mes réflexions sur le développement web" />

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
              id={id}
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

      {/* <button className="btn-primary-full articles-btn">
        Chercher plus d&apos;articles
      </button> */}
    </section>
  );
};

export default Articles;
