import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import SpeakersSection from './components/SpeakersSection';
import ProgramSection from './components/ProgramSection';
import RegistrationSection from './components/RegistrationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <SpeakersSection />
      <ProgramSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
}

export default App;