/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/sections/HeroSection";
import FounderSection from "./components/sections/FounderSection";
import AboutSection from "./components/sections/AboutSection";
import ProgramsSection from "./components/sections/ProgramsSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import TimelineSection from "./components/sections/TimelineSection";
import GallerySection from "./components/sections/GallerySection";
import TestimonialSection from "./components/sections/TestimonialSection";
import BlogSection from "./components/sections/BlogSection";
import FAQSection from "./components/sections/FAQSection";
import RegistrationSection from "./components/sections/RegistrationSection";
import ContactSection from "./components/sections/ContactSection";
import AdminLogin from "./components/AdminLogin";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import ChatWidget from "./components/ChatWidget";

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FounderSection />
        <AboutSection />
        <ProgramsSection />
        <FeaturesSection />
        <TimelineSection />
        <GallerySection />
        <TestimonialSection />
        <BlogSection />
        <FAQSection />
        <RegistrationSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFAB />
      <ChatWidget />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-gray text-gray-900 font-sans selection:bg-primary selection:text-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}
