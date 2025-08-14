import React from 'react';
import { Calendar, Clock, Monitor } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Бизнес-психология: как использовать лайфхаки из психологии
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Выстройте эффективные бизнес-процессы в компании с помощью проверенных психологических инструментов
            </p>

            {/* Event details */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="text-gray-900 font-medium">15 февраля 2024, 19:00 МСК</span>
                </div>
                <div className="flex items-center">
                  <Monitor className="w-5 h-5 mr-3 text-green-600" />
                  <span className="text-gray-900 font-medium">Онлайн-формат</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="text-gray-900 font-medium">Длительность: 2 часа</span>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Зарегистрироваться бесплатно
            </button>
          </div>

          {/* Right side - Speaker photos */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                    alt="Наталья Палома"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-3">
                  <h3 className="font-bold text-black text-sm">Наталья Палома</h3>
                  <p className="text-xs text-gray-600">Магистр психологии</p>
                </div>
              </div>
              
              <div className="relative mt-8">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                    alt="Алексей Назаров"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-3">
                  <h3 className="font-bold text-black text-sm">Алексей Назаров</h3>
                  <p className="text-xs text-gray-600">Основатель Face2Face</p>
                </div>
              </div>
            </div>

            {/* Geometric elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-green-600 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-blue-600 transform rotate-45 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;