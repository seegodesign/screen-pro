import data from "./service-meta.json";

export const serviceMeta = Object.fromEntries(
  data.services.map(({ slug, ...service }) => [slug, service]),
) as Record<string, Omit<(typeof data.services)[number], "slug">>;

export type ServiceSlug = (typeof data.services)[number]["slug"];
