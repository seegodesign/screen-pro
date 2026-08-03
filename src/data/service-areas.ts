import data from "./service-areas.json";

export const serviceAreas = data.towns;
export const serviceAreaRegions = data.regions;
export type ServiceAreaSlug = keyof typeof serviceAreaRegions;
