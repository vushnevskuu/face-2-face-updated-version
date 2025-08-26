import React from 'react';
import CountdownTimer from './CountdownTimer';

const HeroSection = ({ onRegisterClick }: { onRegisterClick?: (el: HTMLElement) => void }) => {
  return (
    <section className="relative bg-white dark:bg-gray-950 py-10 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left side - Content (below on mobile) */}
          <div className="order-2 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-[36px] lg:text-[44px] font-bold text-black dark:text-white mb-6 leading-[1.1]">
              <span className="block">Как эксперту</span>
              <span className="block">построить личный бренд</span>
              <span className="block">и монетизировать знания</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-[1.3]">
              Практически лайфхаки 2025
            </p>

            {/* Таймер до события */}
            <CountdownTimer targetISO="2025-09-16T16:00:00Z" />

            <div className="relative inline-block">
              <button onClick={(e) => onRegisterClick?.(e.currentTarget)} className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg relative z-10">
                Зарегистрироваться
              </button>
              {/* Geometric elements near button */}
              <div className="absolute -top-3 -left-4 w-12 h-12 bg-green-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -right-4 w-8 h-8 bg-blue-600 transform rotate-45 opacity-30"></div>
            </div>
          </div>

          {/* Right side - Group photo */}
          <div className="relative order-1 lg:order-1 mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-black">
              <img
                src="/images/speakers-group.png"
                alt="Спикеры вебинара"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;