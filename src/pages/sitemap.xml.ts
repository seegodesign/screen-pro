import type { APIRoute } from "astro";
import { serviceAreaRegions } from "../data/service-areas";
import { serviceMeta } from "../data/service-meta";
import { siteSettings } from "../data/site-settings";

const staticPaths = [
  "/",
  "/about/",
  "/contact/",
  "/free-quote/",
  "/gallery/",
  "/partners/",
  "/reviews/",
  "/services/",
];

const paths = [
  ...staticPaths,
  ...Object.keys(serviceMeta).map((slug) => `/services/${slug}/`),
  ...Object.keys(serviceAreaRegions).map((region) => `/service-areas/${region}/`),
];

export const GET: APIRoute = () => {
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, `${siteSettings.siteUrl}/`)}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
