import ServicePage from "./ServicePage";

export default function WindowScreens() {
  return (
    <ServicePage
      slug="window-screens"
      heroImage="/images/kauai-window-screens.webp"
      intro="New window screens, re-screening, and aluminum frame replacement for Kauai homes. Available in white or bronze frames with charcoal or light gray mesh."
      benefits={[
        {
          title: "Ventilation Without Compromise",
          body: "Good window screens let you keep windows open year-round without bug intrusion. In Kauai's climate, that's not a luxury — it's a quality-of-life essential.",
        },
        {
          title: "Re-Screening Costs Far Less Than Replacement",
          body: "If your frames are still solid, there's no reason to replace the whole window screen. We re-screen existing frames with fresh mesh for a fraction of the cost of new units.",
        },
        {
          title: "Mesh Color Makes a Difference",
          body: "Charcoal mesh offers better outward visibility and a sharper look. Light gray is more traditional and works well with older homes. We carry both and can help you choose.",
        },
        {
          title: "Aluminum Frames, Not Fiberglass",
          body: "Fiberglass frames warp, crack, and oxidize in Hawaii's UV and humidity. Our aluminum frames are built to last — and when hardware eventually fails, they can be repaired.",
        },
      ]}
      process={[
        { step: "1", title: "Assessment", body: "We evaluate your existing window screens — what's reusable, what needs replacement, and what mesh and frame options fit your home." },
        { step: "2", title: "Measure Every Opening", body: "Each window gets individually measured. Even windows from the same manufacturer can vary by fractions of an inch." },
        { step: "3", title: "Build or Re-Screen", body: "New screens are built to spec. Existing frames in good shape are re-screened with fresh mesh using a new spline." },
        { step: "4", title: "Install & Inspect", body: "Every screen is installed, checked for fit, and tested for proper retention before we leave." },
      ]}
      faqs={[
        {
          q: "What's the difference between re-screening and screen replacement?",
          a: "Re-screening means removing the old mesh from your existing frame and installing new mesh. Screen replacement means building a new frame with new mesh from scratch. If your frames are still in good condition, re-screening saves money. If they're bent, broken, or corroded, replacement is the right call.",
        },
        {
          q: "What mesh colors do you offer?",
          a: "We carry charcoal and light gray mesh as our standard options. Charcoal is the most popular because it improves outward visibility and gives a cleaner look. Both are fiberglass mesh — durable, flexible, and resistant to corrosion.",
        },
        {
          q: "What frame colors are available for new window screens?",
          a: "We offer white and bronze aluminum frames. White is standard and matches most window frames. Bronze blends well with darker trim and is popular on higher-end properties.",
        },
        {
          q: "Can you make screens for custom or non-standard window sizes?",
          a: "Yes. We custom-build screens for any size opening, including skylights, transom windows, casement windows, and unusual architectural openings. We measure on-site and build to fit.",
        },
        {
          q: "How long do window screens last on Kauai?",
          a: "With quality mesh and aluminum frames, window screens can last 10-15 years or more. Mesh in high-UV areas may need replacing sooner. If you see sagging, holes, or rusting, it's time to call us.",
        },
      ]}
      relatedSlugs={["screen-doors", "screen-repair", "hurricane-screens"]}
    />
  );
}
