export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden grain">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-135 from-slate-dark via-primary-dark to-primary" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full opacity-[0.07] animate-float"
          style={{
            background:
              "radial-gradient(circle, #38BDF8 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[60%] right-[8%] w-48 h-48 rounded-full opacity-[0.05] animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, #0EA5E9 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute bottom-[20%] left-[20%] w-32 h-32 rounded-full opacity-[0.04] animate-float"
          style={{
            background:
              "radial-gradient(circle, #7dd3fc 0%, transparent 70%)",
            animationDelay: "4s",
          }}
        />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p
          className="shimmer-text text-xs font-semibold tracking-[4px] uppercase mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Lets Revolve
        </p>
        <h1
          className="text-white text-4xl md:text-5xl lg:text-[60px] font-bold leading-[1.08] max-w-3xl mb-8 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Met passie voor
          <br />
          <span className="text-primary-light">ons vak</span>
        </h1>
        <p
          className="text-white/60 text-base md:text-lg max-w-xl leading-relaxed mx-auto animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Wij streven ernaar om iedere ondernemer binnen ons netwerk te
          ondersteunen met een persoonlijke, passende en pragmatische aanpak.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 z-10 animate-fade-in"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/30 text-[10px] tracking-[3px] uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
