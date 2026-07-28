import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Phone, MapPin, ArrowRight, Check, ChevronDown, Star } from "lucide-react";
import { SERVICES, TESTIMONIALS } from "@/app/data";

interface ServicePageProps {
  slug: string;
  heroImage: string;
  intro: string;
  benefits: { title: string; body: string }[];
  process: { step: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
      ))}
    </div>
  );
}

export default function ServicePage({ slug, heroImage, intro, benefits, process, faqs, relatedSlugs }: ServicePageProps) {
  const service = SERVICES.find(s => s.slug === slug)!;
  const related = SERVICES.filter(s => relatedSlugs.includes(s.slug));
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", address: "", description: "", measurements: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Set page title for basic SEO
  document.title = `${service.heroKeyword} | Screen Pro`;

  return (
    <main style={{ paddingTop: "80px" }}>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <div className="absolute inset-0 bg-[#1B3D56]">
          <img src={heroImage} alt={service.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(27,61,86,0.92) 0%, rgba(27,61,86,0.7) 55%, rgba(27,61,86,0.4) 100%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20 flex flex-col justify-center" style={{ minHeight: "520px" }}>
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <button onClick={() => { navigate("/"); setTimeout(() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" }), 100); }}
              className="hover:text-white transition-colors">Services</button>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#AABFD8" }}>Screen Pro Kauai</p>
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
              {service.heroKeyword}
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>{intro}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#quote" onClick={e => { e.preventDefault(); document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" }); }}
                className="px-6 py-3 rounded font-semibold text-sm text-white flex items-center gap-2 transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--accent)" }}>
                Get a Free Quote <ArrowRight size={15} />
              </a>
              <a href="tel:+18083884552"
                className="px-6 py-3 rounded font-semibold text-sm flex items-center gap-2 transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.35)", color: "#fff" }}>
                <Phone size={15} /> (808) 388-4552
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>What's Included</p>
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight mb-6" style={{ fontFamily: "'DM Serif Display', serif", color: "var(--primary)" }}>
              {service.title} on Kauai — Done Right
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted-foreground)" }}>{service.description}</p>
            <ul className="space-y-3 mb-8">
              {service.bullets.map(b => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "var(--accent)" }}>
                    <Check size={11} color="#fff" />
                  </div>
                  <span className="text-sm leading-snug">{b}</span>
                </li>
              ))}
            </ul>
            <a href="tel:+18083884552"
              className="inline-flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--primary)" }}>
              <Phone size={15} /> Call for a Free Estimate
            </a>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Why It Matters</p>
            {benefits.map((b, i) => (
              <div key={i} className="rounded-xl p-6"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <h3 className="font-semibold text-base mb-2">{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--secondary)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>How It Works</p>
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight" style={{ fontFamily: "'DM Serif Display', serif", color: "var(--primary)" }}>
              Our Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="relative">
                <div className="rounded-xl p-6 h-full" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white mb-4"
                    style={{ backgroundColor: "var(--primary)" }}>
                    {p.step}
                  </div>
                  <h3 className="font-semibold text-base mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{p.body}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                    <ArrowRight size={16} style={{ color: "var(--muted-foreground)" }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section id="quote" className="py-20 lg:py-28" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-5xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#AABFD8" }}>Free Estimate</p>
            <h2 className="text-3xl lg:text-4xl font-normal text-white mb-5" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Get a Quote for {service.title}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              Describe your project and we'll respond quickly — usually the same day. No pressure, no guesswork.
            </p>
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Call or Text", value: "(808) 388-4552", href: "tel:+18083884552" },
                { icon: MapPin, label: "Service Area", value: "All of Kauai — North Shore, East Side, South Side" },
              ].map((item, i) => {
                const Icon = item.icon;
                return item.href ? (
                  <a key={i} href={item.href} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                      <Icon size={17} style={{ color: "#AABFD8" }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>{item.label}</p>
                      <p className="font-semibold text-white group-hover:text-[#AABFD8] transition-colors">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                      <Icon size={17} style={{ color: "#AABFD8" }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>{item.label}</p>
                      <p className="font-semibold text-white">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl p-8" style={{ backgroundColor: "var(--card)" }}>
            {formSubmitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "var(--secondary)" }}>
                  <Check size={26} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "'DM Serif Display', serif", color: "var(--primary)" }}>
                  We Got Your Request!
                </h3>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  We'll be in touch shortly. If it's urgent, call (808) 388-4552.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                    { name: "phone", label: "Phone Number", type: "tel", placeholder: "(808) 555-0100" },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--muted-foreground)" }}>{f.label} *</label>
                      <input type={f.type} name={f.name} required value={formData[f.name as keyof typeof formData]}
                        onChange={handleFormChange} placeholder={f.placeholder}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                        style={{ backgroundColor: "var(--input-background)", border: "1px solid var(--border)", color: "var(--foreground)" }} />
                    </div>
                  ))}
                </div>
                {[
                  { name: "email", label: "Email", type: "email", placeholder: "jane@example.com", required: false },
                  { name: "address", label: "Property Address", type: "text", placeholder: "Your Kauai address", required: true },
                ].map(f => (
                  <div key={f.name}>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--muted-foreground)" }}>{f.label}{f.required ? " *" : ""}</label>
                    <input type={f.type} name={f.name} required={f.required} value={formData[f.name as keyof typeof formData]}
                      onChange={handleFormChange} placeholder={f.placeholder}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                      style={{ backgroundColor: "var(--input-background)", border: "1px solid var(--border)", color: "var(--foreground)" }} />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--muted-foreground)" }}>
                    Opening Size / Measurements <span className="font-normal">(optional)</span>
                  </label>
                  <input type="text" name="measurements" value={formData.measurements} onChange={handleFormChange}
                    placeholder='e.g. 36" W × 80" H'
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                    style={{ backgroundColor: "var(--input-background)", border: "1px solid var(--border)", color: "var(--foreground)" }} />
                </div>
                <div>
                  <label className="text-xs font-semibold block mb-1.5" style={{ color: "var(--muted-foreground)" }}>Project Details *</label>
                  <textarea name="description" required value={formData.description} onChange={handleFormChange}
                    rows={3} placeholder={`Tell us about your ${service.title.toLowerCase()} project...`}
                    className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
                    style={{ backgroundColor: "var(--input-background)", border: "1px solid var(--border)", color: "var(--foreground)" }} />
                </div>
                <button type="submit"
                  className="w-full py-3.5 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ backgroundColor: "var(--accent)" }}>
                  Request a Free Quote <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>Reviews</p>
            <h2 className="text-3xl lg:text-4xl font-normal" style={{ fontFamily: "'DM Serif Display', serif", color: "var(--primary)" }}>
              What Kauai Homeowners Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="rounded-xl p-6" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <Stars count={t.rating} />
                <p className="mt-4 text-sm leading-relaxed mb-5" style={{ color: "var(--muted-foreground)" }}>"{t.text}"</p>
                <div className="border-t pt-4" style={{ borderColor: "var(--border)" }}>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color: "var(--muted-foreground)" }}>
                    <MapPin size={11} /> {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--secondary)" }}>
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-normal" style={{ fontFamily: "'DM Serif Display', serif", color: "var(--primary)" }}>
              Common Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-sm pr-4">{faq.q}</span>
                  <ChevronDown size={16} className={`flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    style={{ color: "var(--muted-foreground)" }} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t" style={{ borderColor: "var(--border)" }}>
                    <p className="text-sm leading-relaxed pt-4" style={{ color: "var(--muted-foreground)" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>More Services</p>
            <h2 className="text-3xl lg:text-4xl font-normal" style={{ fontFamily: "'DM Serif Display', serif", color: "var(--primary)" }}>
              Other Screen Services We Offer
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map(s => (
              <Link key={s.slug} to={s.path}
                className="group rounded-xl p-6 transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", boxShadow: "0 1px 4px rgba(26,25,22,0.06)" }}>
                <h3 className="font-semibold text-base mb-1 group-hover:text-[#567194] transition-colors">{s.title}</h3>
                <p className="text-xs mb-3" style={{ color: "var(--accent)" }}>{s.tagline}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{s.shortDescription}</p>
                <div className="flex items-center gap-1 mt-4 text-xs font-semibold" style={{ color: "var(--accent)" }}>
                  Learn More <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
