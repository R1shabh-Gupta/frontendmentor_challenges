import Footer from "./components/Footer";
import MultiplePreviewCard from "./components/MultiplePreviewCard";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:h-screen">
      <MultiplePreviewCard />
      <Footer />
    </div>
  );
}
