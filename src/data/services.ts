export const services = [
  {
    num: "01",
    slug: "screen-doors",
    title: "Retractable Screen Doors",
    copy: "Low-profile screens for single, double, French, and patio doors—custom fit so the view stays open when the screen is away.",
    tags: ["Single & double doors", "French doors"],
    image: "/images/kauai-retractable-screen-door.webp",
  },
  {
    num: "02",
    slug: "motorized-screens",
    title: "Motorized Screens",
    copy: "Remote-controlled shade and bug protection for wide lanais, decks, outdoor kitchens, and other large-format openings.",
    tags: ["Large openings", "Sun + insect control"],
    image: "/images/kauai-luxury-motorized-screen.avif",
  },
  {
    num: "03",
    slug: "window-screens",
    title: "Window Screens",
    copy: "New aluminum frames and precise re-screening in white or bronze, with charcoal and light-gray mesh options.",
    tags: ["New frames", "Re-screening"],
    image: "/images/kauai-window-screens.webp",
  },
  {
    num: "04",
    slug: "sliding-screen-doors",
    title: "Sliding Screen Doors",
    copy: "Durable aluminum doors with nylon wheels, adjusted on site for a smooth glide and a clean, dependable close.",
    tags: ["Aluminum frames", "Smooth operation"],
    image: "/images/kauai-sliding-screen-door.webp",
  },
  {
    num: "05",
    slug: "hurricane-screens",
    title: "Hurricane Screens",
    copy: "Hurricane-rated fabric protection that is easy to deploy, compact to store, and fitted for inside or outside access.",
    tags: ["Compact storage", "Custom installation"],
    image: "/images/kauai-hurricane-weather.avif",
  },
  {
    num: "06",
    slug: "screen-repair",
    title: "Screen Repair",
    copy: "Re-screening, wheel and hydraulic tube replacement, clips, springs, and an honest assessment of tired frames.",
    tags: ["Serviceable repairs", "All screen types"],
    image: "/images/kauai-broken-screen-repair.webp",
  },
] as const;

export type ServiceCardData = (typeof services)[number];
