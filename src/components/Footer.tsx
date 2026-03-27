export default function Footer() {
  return (
    <footer className="bg-slate-dark py-16 px-6 text-center">
      <div className="text-2xl font-bold mb-2">
        <span className="text-primary-light">Lets</span>{" "}
        <span className="text-white">Revolve</span>
      </div>
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} Lets Revolve
      </p>
    </footer>
  );
}
