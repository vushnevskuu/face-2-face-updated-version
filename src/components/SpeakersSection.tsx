 

const speakers = [
  {
    name: "Наталия Тихонова",
    image: "images/natalya-paloma.jpg",
    bio: "Эксперт по психологии влияния и коммуникациям для личного бренда. Магистр психологии (университеты Лондона и Москвы). Эксперт по жизнестойкости и стресс-менеджменту. Модератор форумов БК «Клуб Первых», «Лидеры России», «Сберуниверситет». С помощью личных методик помогает топ-менеджерам и собственникам бизнеса выстраивать эффективную личную стратегию в периоды неопределенности.",
    tags: ["Личный бренд", "Психология", "Коучинг", "Стратегия", "Саморазвитие"]
  },
  {
    name: "Алексей Назаров",
    image: "images/alexey-nazarov.jpg",
    bio: "Практик создания масштабных digital-продуктов, цифровых экосистем, сервисов и брендов. Основал сервис видеоконсультаций Face2Face.ru — инновационный продукт для экспертов из разных ниш для монетизации знаний и опыта. Ex-CEO Rutube, коммерческий директор МГТС/МТС, вице-президент ТКК, CBDO Мегафон. Создает и запускает новые продукты и бренды, руководил продуктовыми, маркетинговыми и коммерческими командами в крупнейших цифровых корпорациях РФ. Активно участвует в формировании цифровой экономики России, стремясь повышать качество предоставляемых услуг и улучшать взаимодействие между людьми и технологиями.",
    tags: ["Менеджмент", "Продажи", "Стратегия", "Технологии"]
  },
  {
    name: "Пётр Липов",
    image: "images/Petr-Lipov.jpg?v=2",
    fallbacks: [
      "images/Petr–Lipov.jpg",
      "/images/Petr-Lipov.jpg",
      "/images/Petr–Lipov.jpg",
      "images/petr-lipov.jpg",
      "images/Petr-Lipov.JPG"
    ],
    bio: "Карьерный стратег, который помогает экспертам стать востребованными и дорогостоящими. Карьерный коуч с 3000+ часов консультаций: помогает профессионалам упаковать свой опыт в узнаваемый личный бренд и повысить доход. Провел более 200 успешных подборов топ-менеджеров и знает, как ищут и «оценивают» экспертов. Преподает в ведущих вузах страны: РАНХиГС, ЛЭТИ, ИТМО, ИМИСП.",
    tags: ["HR", "Headhunter", "Личный бренд", "Карьера"]
  }
];

const SpeakersSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-4xl font-bold text-black dark:text-white mb-4">
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
                      src={`/${(speaker as any).image}`}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement & { dataset: DOMStringMap };
                        const variants = (speaker as any).fallbacks as string[] | undefined;
                        const index = Number(img.dataset.variantIndex || '0');
                        if (Array.isArray(variants) && index < variants.length) {
                          const next = variants[index];
                          img.src = next.startsWith('/') ? next : `/${next}`;
                          img.dataset.variantIndex = String(index + 1);
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mt-4 text-center md:hidden">{speaker.name}</h3>
                </div>
                <div className="flex-1">
                  <h3 className="hidden md:block text-[32px] md:text-3xl font-bold text-black dark:text-white mb-2">{speaker.name}</h3>
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