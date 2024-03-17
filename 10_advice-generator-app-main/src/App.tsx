import AdviceCard from "./components/AdviceCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="h-screen flex items-center flex-col gap-16 justify-center bg-[#19181A]">
      <AdviceCard />
      <Footer />
    </div>
  );
}
