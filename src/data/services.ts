import data from "./service-cards.json";

export const services = data.services;
export type ServiceCardData = (typeof services)[number];
