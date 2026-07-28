import ServicePage from "./ServicePage";

export default function HurricaneScreens() {
  return (
    <ServicePage
      slug="hurricane-screens"
      heroImage="/images/kauai-hurricane-weather.avif"
      intro="Hurricane-rated screen protection for Kauai homes. Easy to deploy before a storm, compact to store after, and installable from inside or outside depending on your opening."
      benefits={[
        {
          title: "Real Hurricane-Rated Protection",
          body: "Not all hurricane screens are equal. We work with fabrics rated for sustained high winds, protecting your windows and doors from flying debris — one of the leading causes of storm damage.",
        },
        {
          title: "Deploy in Minutes, Not Hours",
          body: "Unlike plywood boarding or metal shutters, hurricane screens can be attached and secured quickly. Less time scrambling when a storm watch becomes a warning.",
        },
        {
          title: "Compact Storage Between Seasons",
          body: "Screens roll or fold into a fraction of the space that plywood or metal panels require. Store them in a closet, garage, or under a bed — ready to go when you need them.",
        },
        {
          title: "Inside or Outside Installation",
          body: "Depending on your opening configuration, screens can be installed from inside or outside. We assess your home and recommend the setup that makes the most sense for your situation.",
        },
      ]}
      process={[
        { step: "1", title: "Home Assessment", body: "We evaluate your openings, note any unique configurations, and recommend the right hurricane screen system for your home." },
        { step: "2", title: "Custom Measurement", body: "Every opening is measured. Hurricane screens need to overlap the frame and anchor securely — precision matters more here than anywhere." },
        { step: "3", title: "Anchoring System Install", body: "We install the attachment hardware — tracks, clips, or bolt anchors — so the screens go up and come down easily when needed." },
        { step: "4", title: "Walkthrough & Training", body: "We walk you through how to deploy and store each screen so you're confident before storm season hits." },
      ]}
      faqs={[
        {
          q: "Do hurricane screens actually work?",
          a: "Yes, when properly specified and installed. Hurricane-rated fabrics are tested to withstand high-velocity wind-borne debris impact. They're an approved protection method under Hawaii's building code for properties that use them correctly.",
        },
        {
          q: "Can I install hurricane screens myself?",
          a: "The hardware installation requires professional placement to ensure the anchors are properly set and load-rated. Once the hardware is in, homeowners can typically attach and remove the screens themselves — we walk you through it.",
        },
        {
          q: "How do I store hurricane screens when I'm not using them?",
          a: "Screens roll or fold compactly. We provide storage recommendations based on your screen size and configuration. Most homeowners store them in a closet, garage shelf, or storage cabinet.",
        },
        {
          q: "Do hurricane screens work on doors as well as windows?",
          a: "Yes. We install hurricane screens for windows, sliding glass doors, French doors, and lanai openings. Each installation is custom-measured and anchored appropriately for the opening size and type.",
        },
        {
          q: "How early before a storm should I put hurricane screens up?",
          a: "Ideally as soon as a hurricane watch is issued for your area. Most installations take less than an hour once the hardware is in place. We recommend a practice run before storm season so you're confident when it matters.",
        },
      ]}
      relatedSlugs={["window-screens", "screen-doors", "motorized-screens"]}
    />
  );
}
