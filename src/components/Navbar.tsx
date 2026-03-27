import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-bold"
        >
          <span className={scrolled ? "text-primary" : "text-primary-light"}>
            Lets
          </span>{" "}
          <span className={scrolled ? "text-heading" : "text-white"}>
            Revolve
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollTo("over-ons")}
            className={`text-sm font-medium transition-colors ${
              scrolled
                ? "text-muted hover:text-heading"
                : "text-white/70 hover:text-white"
            }`}
          >
            Wie zijn wij
          </button>
          <button
            onClick={() => scrollTo("dienstverlening")}
            className={`text-sm font-medium transition-colors ${
              scrolled
                ? "text-muted hover:text-heading"
                : "text-white/70 hover:text-white"
            }`}
          >
            Dienstverlening
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${scrolled ? "text-heading" : "text-white"}`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4">
          <button
            onClick={() => scrollTo("over-ons")}
            className="text-sm font-medium text-muted hover:text-heading text-left"
          >
            Wie zijn wij
          </button>
          <button
            onClick={() => scrollTo("dienstverlening")}
            className="text-sm font-medium text-muted hover:text-heading text-left"
          >
            Dienstverlening
          </button>
        </div>
      )}
    </nav>
  );
}
