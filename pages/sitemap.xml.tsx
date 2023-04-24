import { GetServerSidePropsContext } from "next";

const Sitemap = () => {};

export default Sitemap;

export const getServerSideProps = ({
  res,
}: GetServerSidePropsContext) => {
  const urls: string[] = [];

  // basic urls
  urls.push("");
  urls.push("/404");

  // generate xml
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map((url) => {
          return `
        <url>
            <loc>https://pixel-renovate.com${url}</loc>
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
