import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#674BAF] bg-[url('/images/bg-desktop.svg')]">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
