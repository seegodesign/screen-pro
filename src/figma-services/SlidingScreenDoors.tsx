import ServicePage from "./ServicePage";

export default function SlidingScreenDoors() {
  return (
    <ServicePage
      slug="sliding-screen-doors"
      heroImage="/images/kauai-sliding-screen-door.webp"
      intro="Heavy-duty aluminum sliding screen doors for Kauai homes — smooth, quiet, and built to handle Hawaii's humidity, salt air, and daily use."
      benefits={[
        {
          title: "Built for Island Conditions",
          body: "Standard sliding screen doors from big-box stores are built for mild climates. Our aluminum track systems resist corrosion from Kauai's salt air and hold up to year-round use.",
        },
        {
          title: "Nylon Wheels for Smooth Operation",
          body: "Cheap steel wheels corrode and seize. Our screens run on quality nylon rollers that stay smooth and quiet for years — and can be replaced when they eventually wear out.",
        },
        {
          title: "Custom-Cut to Your Opening",
          body: "We measure and cut tracks on-site. No adapters, no shimming, no gaps at the edges. Your sliding screen door will fit flush from day one.",
        },
        {
          title: "Serviceable by Design",
          body: "When a wheel wears out or a latch breaks, we can fix it without replacing the whole door. We install systems that can be maintained — not just replaced.",
        },
      ]}
      process={[
        { step: "1", title: "Quote & Consult", body: "We discuss your opening size, track configuration, and frame color preference. We'll let you know what to expect before any work begins." },
        { step: "2", title: "On-Site Measurement", body: "We measure the exact opening and existing track space. Sliding doors require precise track dimensions for smooth operation." },
        { step: "3", title: "Cut & Build", body: "Frames and tracks are cut to your exact dimensions. No standard sizes — every door is made for your specific opening." },
        { step: "4", title: "Install & Adjust", body: "We install the door, set the wheel height, adjust the latch, and test the slide before we leave." },
      ]}
      faqs={[
        {
          q: "My sliding screen door is hard to slide — can you fix it without replacing it?",
          a: "Often yes. Stiff or sticky sliding doors are usually caused by worn nylon wheels, dirty or bent tracks, or a warped frame. We assess first and repair what we can. Replacement is only recommended when the frame itself is too damaged to salvage.",
        },
        {
          q: "What frame colors do sliding screen doors come in?",
          a: "We offer white and bronze aluminum frames. Both are extruded aluminum, not rolled or hollow profiles, so they hold their shape and resist warping.",
        },
        {
          q: "Can you replace just the wheels on my sliding screen door?",
          a: "Yes. Wheel replacement is one of our most common repairs. It's fast, affordable, and restores smooth operation without replacing the whole door.",
        },
        {
          q: "How wide can a sliding screen door be?",
          a: "We build sliding screen doors for openings from standard 36\" widths up to large 8-10 foot spans for wide pocket-door openings. For very large openings, we may recommend a different system — we'll advise you honestly.",
        },
        {
          q: "Do you service sliding screen doors you didn't install?",
          a: "Yes. We repair and re-screen existing sliding doors regardless of brand or who installed them. Bring us the problem and we'll tell you what's fixable.",
        },
      ]}
      relatedSlugs={["screen-doors", "screen-repair", "motorized-screens"]}
    />
  );
}
