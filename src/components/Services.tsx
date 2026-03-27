import { useReveal } from "../hooks/useReveal";
import serviceImg1 from "../assets/image copy 3.png";
import serviceImg2 from "../assets/image copy 2.png";

const services = [
  {
    name: "Boekhouding en administratie",
    description:
      "Overzichtelijke boekhouding, altijd op orde. Wij zorgen ervoor dat uw administratie correct en compleet is, zodat u zich kunt richten op ondernemen.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    name: "Salarisadministratie",
    description:
      "Correcte en tijdige salarisverwerking. Van loonstroken tot jaaropgaven — wij nemen het volledig uit handen.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    name: "Financiële administratie",
    description:
      "Helder inzicht in uw financiële positie. Wij leveren overzichtelijke rapportages waarmee u weloverwogen beslissingen neemt.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    name: "Facturatie en debiteurenbeheer",
    description:
      "Efficiënt beheer van uw geldstromen. Van factuurverwerking tot actief debiteurenbeheer — wij houden uw cashflow gezond.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section
      id="dienstverlening"
      className="relative bg-cloud py-24 md:py-32 lg:py-40 px-6 overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.015] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div ref={ref} className="reveal relative max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-primary text-[11px] font-semibold tracking-[4px] uppercase mb-4">
            Wat wij doen
          </p>
          <h2 className="text-heading text-3xl md:text-[42px] font-bold leading-[1.15] mb-6">
            Onze dienstverlening
          </h2>
          <div className="w-10 h-[2px] bg-primary/40 mx-auto" />
        </div>

        {/* Main content: image left + services right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Left: image composition */}
          <div className="lg:col-span-2 relative">
            <div className="relative">
              {/* Primary image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={serviceImg1}
                  alt="Financiële dienstverlening"
                  className="w-full h-[300px] md:h-[360px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/25 via-transparent to-transparent" />
              </div>

              {/* Secondary image — overlapping offset */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 w-[55%] rounded-2xl overflow-hidden shadow-xl border-4 border-cloud">
                <img
                  src={serviceImg2}
                  alt="Administratie en documentbeheer"
                  className="w-full h-[140px] md:h-[170px] object-cover object-top"
                />
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-l-2 border-t-2 border-primary/15 rounded-tl-2xl pointer-events-none" />

            {/* Spacer for overlap on mobile */}
            <div className="h-12 lg:h-0" />
          </div>

          {/* Right: service items */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <div
                key={service.name}
                className="group relative bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,165,233,0.08)] border border-gray-100 hover:border-primary/20"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-heading text-[15px] font-semibold mb-2">
                  {service.name}
                </h3>
                <p className="text-muted text-sm leading-[1.7]">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-7 right-7 h-[2px] bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
