export default function Footer() {
  return (
    <footer className="relative bg-slate-dark overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col items-center">
          {/* Wordmark */}
          <div className="text-2xl font-bold tracking-tight mb-3">
            <span className="text-primary-light">Lets</span>{" "}
            <span className="text-white">Revolve</span>
          </div>

          {/* Tagline */}
          <p className="text-white/30 text-sm mb-8">
            Persoonlijk, passend en pragmatisch
          </p>

          {/* Nav links */}
          <div className="flex gap-8 mb-10">
            {[
              { label: "Wie zijn wij", id: "over-ons" },
              { label: "Dienstverlening", id: "dienstverlening" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white/40 text-sm hover:text-white/70 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.06] mb-8" />

          {/* Copyright */}
          <p className="text-white/20 text-xs tracking-wider">
            © {new Date().getFullYear()} Lets Revolve — Alle rechten
            voorbehouden
          </p>
        </div>
      </div>
    </footer>
  );
}
