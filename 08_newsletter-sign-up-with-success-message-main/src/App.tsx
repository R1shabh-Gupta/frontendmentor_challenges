import Footer from "./components/Footer";
import NewsletterSignUp from "./components/NewsletterSignUp";

export default function App() {
  return (
    <div className="bg-[#37384F] h-full flex-col gap-4 lg:h-screen flex items-center justify-center">
      <NewsletterSignUp />
      <Footer />
    </div>
  );
}
