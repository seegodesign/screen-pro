import settings from "./site-settings.json";

export const siteSettings = {
  ...settings.identity,
  ...settings.contact,
  ...settings.business,
  nav: settings.navigation,
  footer: settings.footer,
};
