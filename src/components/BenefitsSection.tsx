import React from 'react';
import { Brain, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: "Что такое бизнес-психология",
    description: "Какие инструменты использовать для совершенствования коммуникаций с клиентами и партнерами",
    color: "blue"
  },
  {
    icon: Users,
    title: "Эффективные коммуникации управленца",
    description: "Стиль лидерства, мотивация, конфликты. Как выстроить работающую систему управления",
    color: "green"
  },
  {
    icon: TrendingUp,
    title: "Психология продаж",
    description: "Что реально движет клиентом при выборе продавца? Как установить доверительный контакт с клиентом? 3 ключевых триггера покупок",
    color: "blue"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            На вебинаре узнаете:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Практические инструменты для повышения эффективности вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const colorClasses = benefit.color === 'blue' 
              ? 'bg-blue-600 text-white' 
              : 'bg-green-600 text-white';
            
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                {/* Geometric accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 ${benefit.color === 'blue' ? 'bg-blue-600' : 'bg-green-600'} opacity-10 rounded-bl-full`}></div>
                
                <div className={`w-16 h-16 rounded-2xl ${colorClasses} flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-black mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;