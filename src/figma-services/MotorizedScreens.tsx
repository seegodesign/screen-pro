import ServicePage from "./ServicePage";

export default function MotorizedScreens() {
  return (
    <ServicePage
      slug="motorized-screens"
      heroImage="/images/kauai-luxury-motorized-screen.avif"
      intro="Premium motorized screens for Kauai lanais, decks, and large openings. Remote-controlled, custom-fit, and built for the kinds of spaces that manual screens can't handle."
      benefits={[
        {
          title: "Designed for Large Openings",
          body: "Motorized screens shine on wide lanai openings, large deck spans, and open-concept indoor-outdoor spaces where manual screens would be impractical or ugly. We size systems for openings up to 30+ feet wide.",
        },
        {
          title: "Sun Shade and Bug Protection in One",
          body: "Select from solar shade fabrics that cut UV and glare while maintaining outward visibility, insect screening for bug control, or combination systems. The right fabric depends on your orientation and priorities.",
        },
        {
          title: "Disappears When Not Needed",
          body: "When retracted, motorized screens tuck into a compact housing at the top of the opening — leaving the view and the architecture completely unobstructed.",
        },
        {
          title: "Premium Brands, Professional Installation",
          body: "We install Rainier, Wizard, and Centaur motorized screen systems. These aren't the Amazon-budget variety — they're built for longevity, quiet operation, and serviceability.",
        },
      ]}
      process={[
        { step: "1", title: "Site Consultation", body: "We assess the opening, discuss fabric options, housing placement, and control preferences. Large-format installs need a proper plan." },
        { step: "2", title: "System Specification", body: "We specify the right motor, housing size, and fabric for your opening and goals. You'll know exactly what you're getting before any work begins." },
        { step: "3", title: "Professional Installation", body: "Housing is mounted, motor is wired, fabric is hung and tensioned. This is not a DIY project — precision matters for proper operation and longevity." },
        { step: "4", title: "Programming & Walkthrough", body: "We program your remote, test full travel in both directions, and walk you through operation and basic maintenance." },
      ]}
      faqs={[
        {
          q: "What motorized screen brands do you install on Kauai?",
          a: "We install Rainier, Wizard, and Centaur motorized screen systems. Rainier is our preferred system for most residential applications. Centaur is our recommendation for very large openings. We'll match you with the right brand for your project.",
        },
        {
          q: "How wide of an opening can a motorized screen cover?",
          a: "Depending on the system, motorized screens can cover single openings up to 20 feet wide without a center post, and much wider with coupled or paired systems. We'll tell you exactly what's achievable for your opening.",
        },
        {
          q: "What fabric options are available for motorized screens?",
          a: "We offer insect screening for bug protection, solar shade fabrics in various openness factors for UV/glare control, and blackout fabrics for privacy or media rooms. Fabric choice depends on your orientation, goals, and aesthetic preference.",
        },
        {
          q: "Can motorized screens be operated without a remote?",
          a: "Yes. Most systems can be wired to a wall switch in addition to or instead of a remote. Some systems are also compatible with smart home integration. We discuss your preferred control setup during the consultation.",
        },
        {
          q: "What happens if my motorized screen stops working?",
          a: "Most motor and fabric issues are serviceable. We support the systems we install and can diagnose and repair motor, track, or fabric problems. This is one of the reasons we only install brands with real service support.",
        },
        {
          q: "How much do motorized screens cost on Kauai?",
          a: "Pricing depends on opening size, fabric, brand, and installation complexity. Motorized screens are a premium product — they're not cheap — but they're built to last and add real value to a home. Contact us for a no-obligation quote.",
        },
      ]}
      relatedSlugs={["screen-doors", "hurricane-screens", "screen-repair"]}
    />
  );
}
