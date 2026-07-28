import ServicePage from "./ServicePage";

export default function ScreenDoors() {
  return (
    <ServicePage
      slug="screen-doors"
      heroImage="/images/kauai-retractable-screen-door.webp"
      intro="Custom-measured screen doors for Kauai homes — swing doors, French doors, patio sliders, and security screens. Every door is built to fit your exact opening."
      benefits={[
        {
          title: "Let the Breeze In, Keep the Bugs Out",
          body: "Kauai's trade winds are one of the best things about living here. A well-fitted screen door lets you enjoy the airflow without inviting in mosquitoes, gnats, or the occasional gecko.",
        },
        {
          title: "Custom-Fit Means No Gaps",
          body: "Off-the-shelf screen doors almost never fit perfectly — leaving gaps at the top, sides, or bottom that defeat the purpose. We measure every opening and build to spec.",
        },
        {
          title: "Aluminum Frames That Last",
          body: "Unlike plastic or hollow steel frames, our extruded aluminum frames resist corrosion, hold their shape, and can be repaired when hardware eventually wears out.",
        },
        {
          title: "Security Options Available",
          body: "For homeowners who want more than bug protection, we offer security screen doors with reinforced mesh and frames that provide a meaningful deterrent without sacrificing ventilation.",
        },
      ]}
      process={[
        { step: "1", title: "Call or Request a Quote", body: "Tell us what you need. We'll ask about your door type, opening size, and any special requirements." },
        { step: "2", title: "On-Site Measurement", body: "We come to your home and measure the actual opening — not from a photo or your best guess. Exact measurements matter." },
        { step: "3", title: "Build & Source", body: "Your screen door is built or sourced to match your opening, frame color preference, and mesh choice." },
        { step: "4", title: "Professional Installation", body: "We install the door, adjust the hardware, test the operation, and clean up. You're left with a door that works from day one." },
      ]}
      faqs={[
        {
          q: "What types of screen doors do you install on Kauai?",
          a: "We install single swing screen doors, double or French screen doors, patio sliding screen doors, security screen doors, and retractable screen doors. If you have an unusual opening, let us know — we've handled them all.",
        },
        {
          q: "What frame colors are available?",
          a: "We offer white and bronze aluminum frames. Bronze tends to blend better with darker door frames and is popular on higher-end homes. White works well with white or light-colored trim.",
        },
        {
          q: "Can you screen a French door opening?",
          a: "Yes. Double French door openings get a paired screen door system that swings out (or in, depending on your preference) and latches in the center. We custom-measure and fit each panel.",
        },
        {
          q: "How long does installation take?",
          a: "Most single screen door installations are completed in under two hours. Double doors or more complex hardware setups may take a half day. We'll give you a time estimate before we start.",
        },
        {
          q: "Do you service screen doors you didn't install?",
          a: "Yes. If your existing screen door needs new wheels, a new latch, a patched or replaced screen, or frame repair — we can help regardless of who installed it originally.",
        },
      ]}
      relatedSlugs={["sliding-screen-doors", "screen-repair", "motorized-screens"]}
    />
  );
}
