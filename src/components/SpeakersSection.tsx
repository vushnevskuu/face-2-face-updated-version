import React from 'react';

const speakers = [
  {
    name: "Наталья Палома",
    image: "/images/natalya-paloma.jpg",
    bio: "Магистр психологии, University of East London («Прикладная психология и коучинг»), Магистр психологии, РПУ св. Иоанна Богослова - Центр системной семейной терапии, ICEEFT (Эмоционально-Фокусированная терапия), Besser-Siegmund-Institut (wingwave-коучинг), программы по стресс-менеджменту и экзистенциальной терапии, регулярно учавствует в международных обучающих программах и конференциях, модератор бизнес-сообществ (Клуб Первых, Лидеры России, СберУниверситет, А1, Эквиум и др.).",
    tags: ["Личный бренд", "Психология", "Коучинг", "Стратегия", "Саморазвитие"]
  },
  {
    name: "Алексей Назаров",
    image: "/images/alexey-nazarov.jpg",
    bio: "Основатель сервиса видеоконсультаций Face2Face.ru. Его профессиональный опыт включает работу в ведущих российских операторах связи, включая: NetByNet, ТрансТелеКом, МГТС. Являлся Генеральным директором крупнейшего российского видеохостинга Rutube, руководил увеличением аудитории платформы и её технологической модернизацией. Сегодня Алексей Назаров является основателем сервиса Face2Face, демонстрируя своё стремление развивать инновационные проекты и создавать полезные продукты для общества. Спикер активно участвует в формировании цифровой экономики России, стремясь повышать качество предоставляемых услуг и улучшать взаимодействие между людьми и технологиями.",
    tags: ["Менеджмент", "Продажи", "Стратегия", "Технологии"]
  }
];

const SpeakersSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Спикеры вебинара
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Эксперты с многолетним опытом в психологии и бизнесе
          </p>
        </div>

        <div className="space-y-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm ring-1 ring-black/5 dark:ring-white/10 p-6">
              <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-start gap-6">
                <div className="flex flex-col items-center md:items-start w-full md:w-40">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden w-36 md:w-full">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mt-4 text-center md:hidden">{speaker.name}</h3>
                </div>
                <div className="flex-1">
                  <h3 className="hidden md:block text-3xl font-bold text-black dark:text-white mb-2">{speaker.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-left md:text-left">{speaker.bio}</p>
                </div>
              </div>
              {speaker.tags && (
                <div className="mt-4 w-full border-t border-gray-200 dark:border-white/10 pt-4 flex flex-wrap gap-3">
                  {speaker.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 text-sm select-none transition-all duration-200 hover:bg-gray-200 hover:shadow-md hover:-translate-y-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;