export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-linear-135 from-slate-dark via-primary-dark to-primary">
      <p className="text-primary-light text-xs font-medium tracking-[3px] uppercase mb-8">
        Lets Revolve
      </p>
      <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] max-w-3xl mb-6">
        Met passie voor ons vak
      </h1>
      <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
        Wij streven ernaar om iedere ondernemer binnen ons netwerk te
        ondersteunen met een persoonlijke, passende en pragmatische aanpak.
      </p>
      <div className="absolute bottom-10 animate-pulse">
        <svg
          className="w-6 h-6 text-white/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
