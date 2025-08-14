import React, { useState } from 'react';
import { Star, Calendar } from 'lucide-react';

interface Speaker {
  id: number;
  name: string;
  specialization: string;
  description: string;
  achievements: string;
  rating: number;
  reviews: number;
  image: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Георгий Асатурян",
    specialization: "Продажи, упаковка, масштабирование",
    description: "Как выстроить отдел продаж с нуля и масштабировать бизнес. Эксперт по системным продажам.",
    achievements: "Более 15 лет опыта в продажах. Помог масштабировать более 200 компаний. Автор методики системных продаж.",
    rating: 4.9,
    reviews: 127,
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
  },
  {
    id: 2,
    name: "Анаит Гаспарян",
    specialization: "Бизнес медиация / Корпоративное управление",
    description: "Преодоление конфликтов и построение эффективных команд. Эксперт по корпоративному управлению.",
    achievements: "Сертифицированный медиатор. Разрешила более 500 корпоративных конфликтов. MBA в области управления.",
    rating: 4.8,
    reviews: 89,
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
  },
  {
    id: 3,
    name: "Александр Кравцов",
    specialization: "Старший товарищ",
    description: "Наставничество и менторство для руководителей. Помогает развивать лидерские качества.",
    achievements: "20+ лет в топ-менеджменте. Наставник для более чем 100 руководителей. Эксперт по лидерству.",
    rating: 5.0,
    reviews: 156,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
  },
  {
    id: 4,
    name: "Ярослав Сеньшин",
    specialization: "Стратегия / Самосаботаж",
    description: "Сертифицированный тренер по интеллект-картам. Помогает преодолевать внутренние барьеры.",
    achievements: "Психолог-консультант. Автор методики работы с самосаботажем. Провел более 1000 индивидуальных сессий.",
    rating: 4.9,
    reviews: 203,
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
  },
  {
    id: 5,
    name: "Natalia Paloma",
    specialization: "Личный бренд / Психология / Коучинг",
    description: "Магистр психологии, University of East London. Эксперт по развитию личного бренда.",
    achievements: "Магистр психологии. Помогла создать личные бренды 300+ экспертам. Международный сертифицированный коуч.",
    rating: 4.9,
    reviews: 178,
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
  }
];

const SpeakerCarousel = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    setFlippedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Выберите своего наставника из топ-экспертов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наши специалисты — это профессионалы с многолетним опытом и тысячами довольных клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="relative h-80 perspective-1000">
              <div 
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flippedCards.includes(speaker.id) ? 'rotate-y-180' : ''
                }`}
                onClick={() => toggleCard(speaker.id)}
              >
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{speaker.name}</h3>
                    <p className="text-sm opacity-90">{speaker.specialization}</p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
                    <p className="text-black font-semibold mb-3 text-sm">{speaker.specialization}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{speaker.achievements}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(speaker.rating) ? 'text-black fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-gray-600 text-sm">
                          {speaker.rating} ({speaker.reviews})
                        </span>
                      </div>
                    </div>

                    <button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Записаться
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default SpeakerCarousel;