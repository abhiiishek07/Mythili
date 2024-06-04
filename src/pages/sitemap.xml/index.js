import buildSitemapXml from "@/lib/buildSitemapXml";
import { getAllPublicRoutesFn } from "../api/getAllPublicRoutes";

export const getServerSideProps = async ({ res }) => {
  const routes = await getAllPublicRoutesFn();

  const sitemapContent = buildSitemapXml(routes);

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate"
  );
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapContent);

  res.end();

  // Empty since we don't render anything
  return {
    props: {},
  };
};

const SitemapXML = () => {
  return null;
};

export default SitemapXML;
