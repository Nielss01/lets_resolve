const services = [
  { icon: "📊", name: "Boekhouding en administratie" },
  { icon: "💰", name: "Salarisadministratie" },
  { icon: "📈", name: "Financiële administratie" },
  { icon: "📄", name: "Facturatie en debiteurenbeheer" },
];

export default function Services() {
  return (
    <section
      id="dienstverlening"
      className="bg-cloud py-20 md:py-28 lg:py-32 px-6"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-primary text-xs font-medium tracking-[3px] uppercase mb-3">
          Wat wij doen
        </p>
        <h2 className="text-heading text-3xl md:text-4xl font-semibold leading-[1.2] mb-4">
          Onze dienstverlening
        </h2>
        <div className="w-12 h-[3px] bg-primary rounded-full mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[800px] mx-auto">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(14,165,233,0.12)]"
            >
              <div className="w-12 h-12 bg-linear-135 from-sky-100 to-sky-200 rounded-xl mx-auto mb-4 flex items-center justify-center text-xl">
                {service.icon}
              </div>
              <h3 className="text-heading text-base font-semibold">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
