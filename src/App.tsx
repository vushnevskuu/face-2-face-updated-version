import React, { useEffect, useRef, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import SpeakersSection from './components/SpeakersSection';
import ProgramSection from './components/ProgramSection';
import RegistrationSection from './components/RegistrationSection';
import Footer from './components/Footer';

function App() {
  const topRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
  const [showBackHint, setShowBackHint] = useState(false);
  const [backTarget, setBackTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Показываем стрелку, если пользователь прокрутился вниз
      // или если у нас сохранена точка возврата после кнопки
      setShowBackHint(window.scrollY > 200 || !!backTarget);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [backTarget]);

  const scrollToForm = (fromEl?: HTMLElement) => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setBackTarget(fromEl || null);
      // Immediately show arrow; scroll listener will keep it visible
      setShowBackHint(true);
    }
  };

  const scrollBack = () => {
    if (backTarget) {
      backTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setBackTarget(null);
    } else if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowBackHint(false);
  };

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className={"min-h-screen "+(isDark? 'bg-gray-950 text-gray-100':'')} ref={topRef}>
      <Header />
      <HeroSection onRegisterClick={(el) => scrollToForm(el)} />
      <BenefitsSection />
      <SpeakersSection />
      <ProgramSection onRegisterClick={(el) => scrollToForm(el)} />
      <div ref={formRef}>
        <RegistrationSection />
      </div>
      <Footer />

      {/* Theme toggle floating in footer area */}
      <div className="fixed left-6 bottom-6 z-[900]">
        <button
          onClick={() => setIsDark(v=>!v)}
          className="px-4 py-2 rounded-full border border-gray-300 bg-white/90 dark:bg-gray-800 dark:border-gray-700 shadow-md text-sm text-gray-800 dark:text-gray-100"
        >
          {isDark ? 'Светлая тема' : 'Тёмная тема'}
        </button>
      </div>

      {showBackHint && (
        <button
          aria-label="Back to previous section"
          onClick={scrollBack}
          className="fixed bottom-6 right-6 z-[1000] w-11 h-11 bg-white/90 border border-gray-300 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;