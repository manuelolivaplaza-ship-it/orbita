import React from "react";
import { CartProvider } from "./context/CartContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { CategoryGrid } from "./components/CategoryGrid";
import { ProductCatalog } from "./components/ProductCatalog";
import { BranchList } from "./components/BranchList";
import { Testimonials } from "./components/Testimonials";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";
import { CheckoutModal } from "./components/CheckoutModal";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#111827] selection:bg-[#1890FF] selection:text-white">
        <Header />
        <main className="flex-1">
          <Hero />
          <ProductCatalog />
          <BranchList />
          <HowItWorks />
          <Testimonials />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />

        {/* Overlays & Modals */}
        <CartDrawer />
        <CheckoutModal />
        <WhatsAppFloatingButton />
      </div>
    </CartProvider>
  );
}

