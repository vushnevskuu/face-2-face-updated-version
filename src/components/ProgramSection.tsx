import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const programParts = [
  {
    title: "Что такое бизнес-психология",
    items: [
      "Определение бизнес-психологии простыми словами",
      "Основная идея: успешность бизнеса зависит от мотивации людей и культуры общения между ними",
      "Примеры компаний с одинаковыми продуктами, но разными результатами из-за различий в корпоративной культуре и управлении",
      "Интерактив: опрос аудитории — какая модель команды ближе вашей организации?"
    ]
  },
  {
    title: "Основные блоки бизнес-психологии",
    items: [
      "Психология управления: роль лидера, типы мотивации, управление конфликтами",
      "Психология потребителя: глубинные причины поведения покупателей",
      "Психология продаж: формирование доверия, инструменты влияния и методы удержания клиента",
      "Психология карьеры: развитие потенциала сотрудников внутри компании",
      "Задание для зрителей: выберите одну суперспособность из предложенных блоков"
    ]
  },
  {
    title: "Диагностика вашего бизнеса",
    items: [
      "Как отмечаются достижения в вашей компании?",
      "Реакция на ошибки коллег?",
      "Источник новых идей?",
      "Отзывы клиентов («спасибо» или жалобы)?",
      "Скорость внедрения изменений?",
      "По результатам диагностики определяются ключевые зоны роста"
    ]
  },
  {
    title: "Психология управления и лидерство",
    items: [
      "Рассказ о трёх стилях лидерства и их влиянии на команду",
      "Плюсы и минусы каждого подхода",
      "Экспресс-тест: определите ваш собственный стиль лидерства прямо сейчас!"
    ]
  },
  {
    title: "Психология потребителей",
    items: [
      "Три главных фактора, определяющих решение покупателя о покупке",
      "Практический кейс: один продукт, проданный тремя способами (логика, престиж, эмоции)",
      "Голосование среди участников: какой способ наиболее привлекателен лично вам?"
    ]
  },
  {
    title: "Психология успешных продаж",
    items: [
      "Почему покупатели выбирают именно вас: фактор доверия",
      "Распространённые ошибки продавцов",
      "Типичные психологические профили ваших клиентов"
    ]
  },
  {
    title: "Развитие персонала и повышение эффективности",
    items: [
      "Формула успеха: обучение сотрудников через практику (70%), наставничество (20%) и формальное образование (10%)",
      "Кейс успешной программы внутренней ротации кадров, позволяющей удерживать лучших специалистов",
      "Задача участникам: придумайте одно простое действие для повышения квалификации вашей команды уже завтра"
    ]
  },
  {
    title: "Итоги и выводы",
    items: [
      "Кратко повторяется главное: психология — ключ к росту доходов и прибыльности бизнеса",
      "Запоминающаяся формула: Люди → Процессы → Результат",
      "Вопрос зрителям: напишите ваше самое ценное открытие и первый шаг, который планируете сделать уже завтра!"
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