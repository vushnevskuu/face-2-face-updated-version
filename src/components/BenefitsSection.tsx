import React from 'react';
import { Brain, Users, TrendingUp, Package } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: "Как остаться востребованным специалистом даже в\u00A0нестабильных условиях?",
    description: "Вы узнаете действенные способы поддерживать актуальность ваших профессиональных компетенций вне зависимости от\u00A0внешних факторов",
    color: "blue"
  },
  {
    icon: Users,
    title: "Что делать, если ушли с\u00A0руководящей позиции и\u00A0чувствуете себя потерянным?",
    description: "Вы сможете освоить проверенные методы преодоления последствий выгорания, стрессов и\u00A0неопределенности, верните утраченную энергию и\u00A0найдите внутреннюю гармонию",
    color: "green"
  },
  {
    icon: TrendingUp,
    title: "Почему важно активно искать новые перспективы?",
    description: "Вы узнаете секрет психологической готовности меняться и\u00A0управлять собственной судьбой, превращаясь из\u00A0пассивной жертвы обстоятельств в\u00A0активного создателя собственных возможностей.",
    color: "blue"
  },
  {
    icon: Package,
    title: "Какие продукты можно создать на\u00A0основе накопленного опыта?",
    description: "Вы получите пошаговую инструкцию, как упаковать свои знания и\u00A0умения в\u00A0востребованные форматы консалтинга, наставничества и\u00A0коучинга, привлекая молодые команды и\u00A0создавая прибыльные проекты",
    color: "green"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            На вебинаре узнаете:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const colorClasses = benefit.color === 'blue' 
              ? 'bg-blue-600 text-white' 
              : 'bg-green-600 text-white';
            
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                {/* Geometric accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 ${benefit.color === 'blue' ? 'bg-blue-600' : 'bg-green-600'} opacity-10 rounded-bl-full`}></div>
                
                <div className={`w-16 h-16 rounded-2xl ${colorClasses} flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                  {benefit.title}
                </h3>
                
                {benefit.items ? (
                  <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                    {benefit.items.map((item, idx) => (
                      <li key={idx}>
                        {typeof item === 'string' ? (
                          item
                        ) : (
                          // item может содержать JSX с переносом строки
                          item as unknown as React.ReactNode
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: benefit.description }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;