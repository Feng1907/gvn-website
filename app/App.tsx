import "./globals.css";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Products from "./components/Products";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Footer   from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero     />
        <Products />
        <Services />
        <Partners />
      </main>
      <Footer />
    </>
  );
}