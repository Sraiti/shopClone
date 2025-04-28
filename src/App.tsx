import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ProductSlider } from "./components/ProductSlider";
import { ProductGroups } from "./components/ProductGroups";
import { Categories } from "./components/Categories";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import "./styles.css"; // We'll create this file next

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductSlider />
        <ProductGroups />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
