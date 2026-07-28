export const serviceMeta = {
  "screen-doors": {
    source: "ScreenDoors.tsx",
    title: "Screen Doors",
    heroKeyword: "Custom Screen Doors Kauai",
    description: "Custom-measured screen doors for swing doors, French doors, patios, and other residential openings across Kauaʻi.",
    bullets: ["Single and double door systems", "White or bronze aluminum frames", "Custom mesh and security options"],
  },
  "motorized-screens": {
    source: "MotorizedScreens.tsx",
    title: "Motorized Screens",
    heroKeyword: "Motorized Screens Kauai",
    description: "Remote-controlled screen and shade systems for lanais, decks, outdoor kitchens, and large architectural openings.",
    bullets: ["Large-format screen systems", "Insect and solar shade fabrics", "Rainier, Wizard, and Centaur systems"],
  },
  "window-screens": {
    source: "WindowScreens.tsx",
    title: "Window Screens",
    heroKeyword: "Window Screens Kauai",
    description: "New window screens, aluminum frame replacement, and precise re-screening for homes across Kauaʻi.",
    bullets: ["New custom aluminum frames", "Re-screening existing frames", "Charcoal or light gray mesh"],
  },
  "sliding-screen-doors": {
    source: "SlidingScreenDoors.tsx",
    title: "Sliding Screen Doors",
    heroKeyword: "Sliding Screen Doors Kauai",
    description: "Custom-built aluminum sliding screen doors designed for smooth operation in Hawaiʻi’s coastal climate.",
    bullets: ["Custom-cut aluminum frames", "Smooth, serviceable nylon wheels", "White or bronze finishes"],
  },
  "hurricane-screens": {
    source: "HurricaneScreens.tsx",
    title: "Hurricane Screens",
    heroKeyword: "Hurricane Screens Kauai",
    description: "Custom hurricane screen systems that protect openings while remaining quick to deploy and compact to store.",
    bullets: ["Hurricane-rated fabric systems", "Custom anchoring hardware", "Inside or outside deployment"],
  },
  "screen-repair": {
    source: "ScreenRepair.tsx",
    title: "Screen Repair",
    heroKeyword: "Screen Repair Kauai",
    description: "On-site re-screening, hardware replacement, and repair for window, door, retractable, and motorized screens.",
    bullets: ["Mesh and spline replacement", "Wheels, clips, springs, and latches", "Honest repair-or-replace assessment"],
  },
} as const;

export type ServiceSlug = keyof typeof serviceMeta;
