import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="over-ons" className="bg-white py-24 md:py-32 lg:py-40 px-6">
      <div ref={ref} className="reveal max-w-[1200px] mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary text-[11px] font-semibold tracking-[4px] uppercase mb-4">
            Over ons
          </p>
          <h2 className="text-heading text-3xl md:text-[42px] font-bold leading-[1.15] mb-6">
            Wie zijn wij?
          </h2>
          <div className="w-10 h-[2px] bg-primary/40 mx-auto mb-10" />
          <p className="text-body text-base md:text-[17px] leading-[1.8] max-w-[640px] mx-auto">
            Onze waarden vormen de basis van onze identiteit en de manier waarop
            wij werken. Wat voor onze klanten belangrijk is, staat bij Lets
            Revolve altijd centraal.
          </p>
          <p className="text-muted text-base md:text-[17px] leading-[1.8] max-w-[640px] mx-auto mt-6">
            Wij werken vanuit de belangen en principes van onze klanten. Onze
            adviseurs nemen eigenaarschap en staan persoonlijk achter hun werk.
            Zo zorgen wij ervoor dat jij als ondernemer altijd samenwerkt met een
            adviseur die écht bij jou en je onderneming past.
          </p>
        </div>
      </div>
    </section>
  );
}
