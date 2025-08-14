import React from 'react';

const speakers = [
  {
    name: "Наталья Палома",
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    bio: "Магистр психологии, University of East London («Прикладная психология и коучинг»), Магистр психологии, РПУ св. Иоанна Богослова - Центр системной семейной терапии, ICEEFT (Эмоционально-Фокусированная терапия), Besser-Siegmund-Institut (wingwave-коучинг), программы по стресс-менеджменту и экзистенциальной терапии, регулярно учавствует в международных обучающих программах и конференциях, модератор бизнес-сообществ (Клуб Первых, Лидеры России, СберУниверситет, А1, Эквиум и др.)."
  },
  {
    name: "Алексей Назаров",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    bio: "Основатель сервиса видеоконсультаций Face2Face.ru. Его профессиональный опыт включает работу в ведущих российских операторах связи, включая: NetByNet, ТрансТелеКом, МГТС. Являлся Генеральным директором крупнейшего российского видеохостинга Rutube, руководил увеличением аудитории платформы и её технологической модернизацией. Сегодня Алексей Назаров является основателем сервиса Face2Face, демонстрируя своё стремление развивать инновационные проекты и создавать полезные продукты для общества. Спикер активно участвует в формировании цифровой экономики России, стремясь повышать качество предоставляемых услуг и улучшать взаимодействие между людьми и технологиями."
  }
];

const SpeakersSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Спикеры вебинара
          </h2>
          <p className="text-xl text-gray-600">
            Эксперты с многолетним опытом в психологии и бизнесе
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {speaker.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;