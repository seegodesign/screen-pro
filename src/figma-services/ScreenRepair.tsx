import ServicePage from "./ServicePage";

export default function ScreenRepair() {
  return (
    <ServicePage
      slug="screen-repair"
      heroImage="/images/kauai-broken-screen-repair.webp"
      intro="Screen repair on Kauai — re-screening, wheel replacement, hydraulic tube repair, clip fixes, and frame assessment. We fix screens others won't touch."
      benefits={[
        {
          title: "Repair First, Replace Only When Necessary",
          body: "Most damaged screens don't need to be replaced — they need to be repaired. We assess honestly and recommend the most cost-effective path forward.",
        },
        {
          title: "We Fix What Others Won't",
          body: "Many contractors won't bother with repairs — it's easier to sell a new product. We take repair work seriously because it's often the right answer for the homeowner.",
        },
        {
          title: "Any Brand, Any Type",
          body: "We work on sliding screen doors, retractable screens, motorized systems, window screens, and patio doors — regardless of brand or who installed them.",
        },
        {
          title: "Parts Stocked On-Site",
          body: "We carry common replacement parts — nylon wheels, spline, clips, springs, and hydraulic components — so most repairs can be completed in a single visit.",
        },
      ]}
      process={[
        { step: "1", title: "Diagnose the Problem", body: "We inspect the screen, identify what's actually wrong, and explain the options — repair vs. partial replacement vs. full replacement." },
        { step: "2", title: "Quote the Work", body: "No surprises. We quote the repair before starting so you know what to expect." },
        { step: "3", title: "Complete the Repair", body: "Most repairs are done on-site in a single visit. Complex jobs may require parts to be ordered." },
        { step: "4", title: "Test & Confirm", body: "We test the repaired screen before we leave — operation, fit, hardware — to make sure everything works as it should." },
      ]}
      faqs={[
        {
          q: "What types of screen repairs do you do on Kauai?",
          a: "We repair torn or sagging mesh (re-screening), worn nylon wheels on sliding doors, hydraulic tube closers, door clips, springs, latches, hinges, and frame damage. We also assess frames and recommend repair vs. replacement when damage is significant.",
        },
        {
          q: "Is it worth repairing an old screen door?",
          a: "Often yes, especially if the frame is still solid. A re-screening job or new set of wheels costs a fraction of a new door. We'll tell you honestly whether repair makes sense or whether you're better off replacing.",
        },
        {
          q: "My retractable screen is stuck — can you fix it?",
          a: "Yes. Stuck retractable screens are usually caused by a tension issue, a dirty track, a broken spring cartridge, or a damaged housing. Most are repairable. We work on Clearview, Wizard, and other retractable brands.",
        },
        {
          q: "Can you replace the wheels on my sliding screen door?",
          a: "Yes. Wheel replacement is one of our most common repair jobs. We carry standard nylon wheels that fit most sliding screen door profiles. Most wheel replacements are done in under an hour.",
        },
        {
          q: "Do I need to bring the screen to you or do you come to me?",
          a: "We come to you. On-site repair is standard — we bring the tools and common parts to your home and complete the work where the screen lives.",
        },
      ]}
      relatedSlugs={["screen-doors", "window-screens", "sliding-screen-doors"]}
    />
  );
}
