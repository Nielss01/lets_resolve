import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-body">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
