import { GetServerSidePropsContext } from "next";

// data
import projectsData from "@/utils/data/projects";
import articlesData from "@/utils/data/articles";

const Sitemap = () => {};

export default Sitemap;

export const getServerSideProps = ({
  res,
}: GetServerSidePropsContext) => {
  const urls: string[] = [];

  // basic urls
  urls.push("");
  urls.push("/me-desabonner-de-la-newsletter");
  urls.push("/supprimer-ma-demande-de-contact");
  urls.push("/mentions-legales");
  urls.push("/404");

  // projects url
  for (const { url } of projectsData) {
    urls.push(`/projets/${url}`);
  }

  // articles url
  for (const { url } of articlesData) {
    urls.push(`/articles/${url}`);
  }

  // generate xml
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map((url) => {
          return `
        <url>
            <loc>https://mscholz.dev${url}</loc>
        </url>
      `;
        })
        .join("")}
    </urlset>
  `;

  // we send the XML to the browser
  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();

  return {
    props: {},
  };
};
