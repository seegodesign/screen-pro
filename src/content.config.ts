import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const orderedEntry = {
  order: z.number().int().positive(),
};

const partners = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/cms/partners" }),
  schema: z.object({
    name: z.string(),
    shortName: z.string(),
    logo: z.string(),
    url: z.string().url(),
    label: z.string(),
    homepageCopy: z.string(),
    intro: z.string(),
    points: z.array(z.string()),
    monochrome: z.boolean(),
    ...orderedEntry,
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/cms/reviews" }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    place: z.string(),
    service: z.string(),
    featured: z.boolean(),
    ...orderedEntry,
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/data/cms/gallery" }),
  schema: z.object({
    src: z.string(),
    alt: z.string(),
    title: z.string(),
    location: z.string(),
    featured: z.boolean(),
    ...orderedEntry,
  }),
});

export const collections = { partners, reviews, gallery };
