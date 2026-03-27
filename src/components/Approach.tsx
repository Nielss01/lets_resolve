import { useReveal } from "../hooks/useReveal";
import approach1 from "../assets/image.png";
import approach2 from "../assets/image copy.png";

const values = [
  {
    title: "Oprechte connecties",
    text: "Bij Lets Revolve geloven we dat sterke samenwerking begint met echte connecties. We investeren in relaties met onze klanten én binnen ons team. Zo zorgen we ervoor dat iedereen zich gehoord en begrepen voelt. Want alleen wanneer er vertrouwen is, haal je het maximale uit samenwerking en groei.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Duurzaam ondernemen",
    text: "Wij bouwen aan langdurige relaties en helpen bedrijven duurzaam vooruit. Met onze kennis en ervaring ondersteunen we organisaties in Nederland en daarbuiten bij het maken van slimme, toekomstbestendige keuzes. Niet alleen gericht op vandaag, maar juist op duurzame groei op de lange termijn.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Professioneel en betrokken",
    text: "Professionaliteit vormt de basis van alles wat we doen. We zijn inhoudelijk sterk, blijven ons continu ontwikkelen en denken actief met onze klanten mee. Onze aanpak is persoonlijk, betrokken en resultaatgericht — met als doel om altijd de beste oplossing te realiseren.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export default function Approach() {
  const ref = useReveal();

  return (
    <section id="onze-aanpak" className="relative bg-slate-dark py-24 md:py-32 lg:py-40 px-6 overflow-hidden grain">
      {/* Decorative floating shapes */}
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/[0.04] blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-20 right-[5%] w-96 h-96 rounded-full bg-primary/[0.03] blur-3xl animate-float pointer-events-none" />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div ref={ref} className="reveal relative z-10 max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-primary text-[11px] font-semibold tracking-[4px] uppercase mb-4">
            Onze aanpak
          </p>
          <h2 className="text-white text-3xl md:text-[42px] font-bold leading-[1.15]">
            Hoe wij werken
          </h2>
          <div className="w-10 h-[2px] bg-primary/40 mx-auto mt-6" />
        </div>

        {/* Image + values layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image composition */}
          <div className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src={approach1}
                  alt="Professionele financiële dienstverlening"
                  className="w-full h-[280px] md:h-[340px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/40 to-transparent" />
              </div>

              {/* Second image, offset and overlapping */}
              <div className="relative -mt-16 ml-12 md:ml-20 mr-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border-4 border-slate-dark">
                <img
                  src={approach2}
                  alt="Data-analyse en financieel inzicht"
                  className="w-full h-[200px] md:h-[240px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/30 to-transparent" />
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl pointer-events-none" />
          </div>

          {/* Right: Three values */}
          <div className="space-y-8 lg:pt-2">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="group relative pl-6 border-l-2 border-white/[0.08] hover:border-primary/60 transition-colors duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/[0.1] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-white text-lg font-semibold tracking-tight">
                    {value.title}
                  </h3>
                </div>
                <p className="text-white/50 text-[15px] leading-[1.8] group-hover:text-white/65 transition-colors duration-500">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
