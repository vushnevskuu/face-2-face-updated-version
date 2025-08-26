import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const programParts = [
  {
    title: "Анализ текущей ситуации",
    items: [
      "Обзор глобальных и локальных факторов нестабильности",
      "Влияние экономических, технологических и социальных изменений",
      "Как эти факторы влияют на рынок труда и бизнес-среду"
    ]
  },
  {
    title: "Навыки и компетенции для устойчивости",
    items: [
      "Гибкость и адаптивность",
      "Постоянное обучение и развитие новых навыков",
      "Критическое мышление и умение быстро принимать решения",
      "Эмоциональный интеллект и стрессоустойчивость"
    ]
  },
  {
    title: "Стратегии личного и профессионального развития",
    items: [
      "Построение личного бренда",
      "Создание профессиональной сети контактов",
      "Использование онлайн-ресурсов и платформ для обучения",
      "Планирование карьеры в условиях неопределенности"
    ]
  },
  {
    title: "Инновации и технологические тренды",
    items: [
      "Внедрение новых технологий в работу",
      "Использование автоматизации и искусственного интеллекта",
      "Адаптация бизнес-моделей под новые реалии"
    ]
  },
  {
    title: "Практические советы и кейсы",
    items: [
      "Истории успеха в условиях кризиса",
      "Практические упражнения по развитию ключевых навыков",
      "Советы по управлению временем и приоритетами"
    ]
  }
];

const ProgramSection = ({ onRegisterClick }: { onRegisterClick?: (el: HTMLElement) => void }) => {
  return (
    <section className="py-10 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Программа вебинара
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Подробный план мероприятия с практическими заданиями
          </p>
        </div>

        <div className="space-y-4">
          {programParts.map((part, index) => {
            const [open, setOpen] = useState(false);
            const accentColor = index % 2 === 0 ? 'blue' : 'green';
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <div className={`absolute top-0 left-0 w-2 h-full ${accentColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'}`}></div>
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="w-full text-left p-6 pl-8 flex items-center justify-between"
                >
                  <span className="text-2xl font-bold text-black dark:text-white">Часть {index + 1}. {part.title}</span>
                  <span className="ml-4 text-gray-500 group-hover:text-gray-700">{open ? '−' : '+'}</span>
                </button>
                {open && (
                  <div className="px-6 pb-6 pl-8">
                    <ul className="space-y-3">
                      {part.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${accentColor === 'blue' ? 'text-blue-600' : 'text-green-600'}`} />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button onClick={(e) => onRegisterClick?.(e.currentTarget)} className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Присоединиться бесплатно
          </button>
          
          <div className="mt-4">
            <p className="text-[16px] font-normal text-black dark:text-white">
              Бонус: гайд + видео вебинара
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;