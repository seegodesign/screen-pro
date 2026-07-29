export const serviceAreas = [
  "Hanalei",
  "Princeville",
  "Kīlauea",
  "Anahola",
  "Kapaʻa",
  "Wailua",
  "Līhuʻe",
  "Kōloa",
  "Poʻipū",
  "Kalāheo",
] as const;

export const serviceAreaRegions = {
  "north-shore-kauai": {
    name: "North Shore Kauaʻi",
    shortName: "North Shore",
    towns: ["Hanalei", "Princeville", "Kīlauea"],
    title: "Screen Doors & Screen Repair on North Shore Kauaʻi",
    heroImage: "/images/Screen-Pro-Retractable-Doors-Kauai-2.avif",
    description:
      "Custom screen doors, window screens, motorized screens, and screen repair for homes in Hanalei, Princeville, and Kīlauea.",
    expertiseHeading: "Open-air living, protected",
    expertiseAccent: "on the North Shore.",
    intro:
      "North Shore homes are designed around open air, garden views, and covered outdoor living. Screen Pro measures, installs, and repairs screen systems that protect that connection without making the opening feel closed in.",
    conditions:
      "Frequent moisture, salt air, and daily use can be hard on mesh, tracks, wheels, and hardware. We recommend materials and systems suited to the opening, exposure, and way you use the home.",
    townCopy: {
      Hanalei:
        "Screen installation and repair for Hanalei homes, including window screens, retractable doors, sliders, and large lanai openings.",
      Princeville:
        "Clean-profile screen systems for Princeville residences, vacation properties, lanais, entry doors, and ocean-facing openings.",
      Kīlauea:
        "Custom-fit screen doors, replacement window screens, and dependable repairs for homes throughout Kīlauea.",
    },
  },
  "east-side-kauai": {
    name: "East Side Kauaʻi",
    shortName: "East Side",
    towns: ["Anahola", "Kapaʻa", "Wailua", "Līhuʻe"],
    title: "Screen Doors & Screen Repair on East Side Kauaʻi",
    heroImage: "/images/Screen-Pro-Retractable-Doors-Kauai.jpg",
    description:
      "Professional screen installation and repair in Anahola, Kapaʻa, Wailua, and Līhuʻe, including custom doors, windows, and power screens.",
    expertiseHeading: "Fresh air, fewer tradeoffs",
    expertiseAccent: "on the East Side.",
    intro:
      "East Side homes rely on natural airflow throughout the year. We build and service screen systems that make it easier to keep doors and windows open while helping keep insects and debris outside.",
    conditions:
      "Trade winds, coastal exposure, and frequent operation all affect how a screen performs over time. Every opening is measured on site so frames, mesh, tracks, and hardware work together properly.",
    townCopy: {
      Anahola:
        "Made-to-measure window screens, door screens, and screen repair for homes in Anahola and nearby communities.",
      Kapaʻa:
        "Retractable doors, sliding screen doors, window screens, and on-site screen repair for Kapaʻa properties.",
      Wailua:
        "Custom screen solutions for Wailua homes, from everyday window re-screening to wide lanai openings.",
      Līhuʻe:
        "Screen installation, replacement, and repair for Līhuʻe homes, rentals, and residential renovation projects.",
    },
  },
  "south-shore-kauai": {
    name: "South Shore Kauaʻi",
    shortName: "South Shore",
    towns: ["Kōloa", "Poʻipū", "Kalāheo"],
    title: "Screen Doors & Screen Repair on South Shore Kauaʻi",
    heroImage: "/images/screen-installation-3.avif",
    description:
      "Custom screen doors, power screens, window screens, and repairs for homes in Kōloa, Poʻipū, and Kalāheo.",
    expertiseHeading: "A seamless indoor-outdoor flow",
    expertiseAccent: "on the South Shore.",
    intro:
      "South Shore living often moves between indoor rooms, lanais, pools, and gardens. We install refined screen systems that support that flow while fitting the architecture and finish of the home.",
    conditions:
      "Strong sun, salt air, and wide outdoor openings call for well-fitted frames and durable, serviceable components. We help choose the right screen for the opening rather than forcing one product into every application.",
    townCopy: {
      Kōloa:
        "Custom screen doors, window screens, slider service, and repairs for homes throughout Kōloa.",
      Poʻipū:
        "Low-profile retractable and motorized screens for Poʻipū homes, lanais, and large indoor-outdoor openings.",
      Kalāheo:
        "New screens and practical screen repair for Kalāheo homes, including windows, doors, and patio openings.",
    },
  },
} as const;

export type ServiceAreaSlug = keyof typeof serviceAreaRegions;
