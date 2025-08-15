import React from 'react';
import { CheckCircle, Users, Target, Lightbulb, Mic, Calendar, UserCheck, Settings, Play } from 'lucide-react';

const ConferenceArticle = () => {
  const steps = [
    {
      number: 1,
      title: "Определите цель и аудиторию",
      icon: Target,
      content: `Чтобы конференция не стала пустой тратой ресурсов, необходимо четко определить цели и аудиторию. Что вы хотите достичь: привлечь новых клиентов, укрепить позиции бренда, презентовать новый продукт или повысить экспертизу компании в отрасли? Вопросы, которые помогут вам описать целевую аудиторию мероприятия: кто эти люди, какие у них боли и потребности, какие решения они ищут? Чем точнее вы определите свою аудиторию, тем эффективнее будет ваше мероприятие.`,
      kpis: [
        "Количество привлеченных квалифицированных лидов",
        "Стоимость привлечения одного лида", 
        "Сумма заключенных контрактов",
        "ROI",
        "Уровень вовлеченности аудитории",
        "Увеличение узнаваемости бренда"
      ]
    },
    {
      number: 2,
      title: "Сформулируйте тему и тезисы",
      icon: Lightbulb,
      content: `Тема конференции – это первое, что видит потенциальный участник. Она должна быть актуальной, интересной и соответствовать потребностям целевой аудитории. Сформулируйте ее так, чтобы она решала конкретную проблему или предлагала новые возможности.`,
      example: `Вместо «Тенденции в маркетинге» используйте «Как увеличить ROI маркетинговых кампаний в 2025 году: проверенные стратегии и инструменты».`,
      criteria: [
        "Соответствие интересам целевой аудитории",
        "Актуальность трендам отрасли", 
        "Уникальность и новизна",
        "Использование триггеров вовлечения"
      ]
    },
    {
      number: 3,
      title: "Привлеките спикеров",
      icon: Mic,
      content: `Спикеры – это лицо и репутация вашей конференции. Даже самая продуманная тема и маркетинг не спасут мероприятие, если выступление окажется скучным или бесполезным.`,
      types: [
        {
          type: "Внутренние эксперты",
          description: "Сотрудники компании, обладающие глубокими знаниями о продукте или услуге"
        },
        {
          type: "Внешние эксперты", 
          description: "Авторитетные специалисты, лидеры мнений, приглашенные извне"
        }
      ]
    },
    {
      number: 4,
      title: "Подготовьте план мероприятия",
      icon: Calendar,
      content: `Первые 10-15 минут конференции критически важны, поскольку в этот промежуток времени слушатели принимают решение – дослушать до конца или отключиться. Поэтому откажитесь от долгих и банальных вступлений.`,
      tips: [
        "Чередуйте информативные блоки с интерактивом",
        "Оптимальный ритм: 20-30 минут информации и 5-10 минут активности",
        "Последние 5 минут оставьте для живого общения"
      ]
    },
    {
      number: 5,
      title: "Выберите формат и структуру",
      icon: Users,
      content: `Формат и структура конференции влияют на вовлечение аудитории. Подумайте заранее, какой результат, уровень активности и технические возможности вам нужны.`,
      formats: [
        "Мастер-класс/Воркшоп - интерактивный формат с практическим применением",
        "Вебинар - односторонний поток информации",
        "Панельная дискуссия - обсуждение с несколькими экспертами",
        "Нетворкинг-сессия - установление контактов между участниками"
      ]
    },
    {
      number: 6,
      title: "Привлеките участников",
      icon: UserCheck,
      content: `Для привлечения целевой аудитории используйте комплексную маркетинговую стратегию.`,
      channels: [
        "Performance-маркетинг",
        "Контент-маркетинг", 
        "Email-маркетинг",
        "Партнерский маркетинг",
        "SMM-маркетинг",
        "SEO-продвижение"
      ]
    },
    {
      number: 7,
      title: "Придумайте интерактивы после конференции",
      icon: Play,
      content: `Не бросайте участников после конференции. Держите контакт, и они придут снова.`,
      activities: [
        "Опросы и голосования для обратной связи",
        "Викторины и квизы по теме конференции",
        "Практические задания для применения знаний",
        "Закрытые клубы и чаты для нетворкинга"
      ]
    },
    {
      number: 8,
      title: "Проверьте техническую часть",
      icon: Settings,
      content: `Первые минуты конференции нельзя тратить на устранение технических проблем. Именно они могут серьезно повлиять на впечатление от конференции.`,
      checklist: [
        "Выбор надежной платформы",
        "Тестирование оборудования",
        "Стабильное интернет-соединение",
        "Техническая поддержка",
        "Настройка звука и видео"
      ]
    },
    {
      number: 9,
      title: "Проведите репетицию",
      icon: CheckCircle,
      content: `Онлайн-конференция без репетиции — как прыжок с парашютом без инструктажа. Можно выжить, но зачем рисковать?`,
      questions: [
        "В какой момент вам стало скучно?",
        "Что было непонятно?",
        "Какой момент запомнился больше всего?",
        "Как вы оцениваете полезность информации по шкале от 1 до 10?"
      ]
    }
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          9 шагов к успешной конференции: Чек-лист для организаторов
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Рассказываем как превратить онлайн-конференцию в мощный инструмент для продвижения бренда
        </p>
        
        {/* Author info */}
        <div className="flex items-center justify-center space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
          <img 
            src="/images/alexey-nazarov.jpg" 
            alt="Алексей Назаров" 
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-left">
            <h3 className="font-bold text-gray-900 dark:text-white">Алексей Назаров</h3>
            <p className="text-gray-600 dark:text-gray-300">Основатель</p>
            <p className="text-blue-600 dark:text-blue-400">Face2face</p>
            <a href="https://face2face.ru/" className="text-sm text-blue-600 hover:underline">
              https://face2face.ru/
            </a>
          </div>
        </div>
      </header>

      {/* Introduction */}
      <section className="mb-12 prose prose-lg max-w-none dark:prose-invert">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Онлайн-конференция – это мощный инструмент для развития бизнеса, который позволяет генерировать лиды и повышения лояльности клиентов. Правильно организованное мероприятие не только формирует имидж компании, но и напрямую влияет на доходность. Вместо ограниченного числа участников в зале, онлайн-формат позволяет охватить тысячи потенциальных клиентов по всему миру.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Для бизнеса, стремящегося к росту, организация конференций – это стратегический инструмент. Главное – подойти к подготовке системно, с четким пониманием целей и ожидаемых результатов.
        </p>
      </section>

      {/* Steps */}
      <section className="space-y-12">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {step.number}
                </div>
                <IconComponent className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Шаг {step.number}: {step.title}
                </h2>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {step.content}
              </p>

              {step.example && (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
                  <p className="text-blue-800 dark:text-blue-200 font-medium">
                    Пример: {step.example}
                  </p>
                </div>
              )}

              {step.kpis && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    KPI для оценки эффективности:
                  </h3>
                  <ul className="space-y-2">
                    {step.kpis.map((kpi, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{kpi}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.criteria && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    Критерии выбора темы:
                  </h3>
                  <ul className="space-y-2">
                    {step.criteria.map((criterion, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.types && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    Типы спикеров:
                  </h3>
                  <div className="space-y-4">
                    {step.types.map((type, idx) => (
                      <div key={idx} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {type.type}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step.tips && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    Рекомендации:
                  </h3>
                  <ul className="space-y-2">
                    {step.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.formats && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    Популярные форматы в 2025 году:
                  </h3>
                  <ul className="space-y-2">
                    {step.formats.map((format, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{format}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.channels && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    Каналы привлечения:
                  </h3>
                  <ul className="space-y-2">
                    {step.channels.map((channel, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{channel}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.activities && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    Виды активностей:
                  </h3>
                  <ul className="space-y-2">
                    {step.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.checklist && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    Чек-лист технической подготовки:
                  </h3>
                  <ul className="space-y-2">
                    {step.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.questions && (
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    Вопросы для тестовой группы:
                  </h3>
                  <ul className="space-y-2">
                    {step.questions.map((question, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{question}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-green-800 dark:text-green-200 font-medium">
                  💡 Экспертный совет: {step.number === 1 && "Проверьте тренды через Яндекс Wordstat, соцсети и конкурентов. Убедитесь, что тема не «перегрета»."}
                  {step.number === 2 && "Используйте A/B тестирование заголовков для определения наиболее привлекательной темы."}
                  {step.number === 3 && "Ищите не только «звезд», но и практиков с кейсами. Договоритесь об эксклюзивном контенте."}
                  {step.number === 4 && "Добавьте «буферные зоны» (+10-15 мин) между блоками — задержки неизбежны."}
                  {step.number === 5 && "Гибридный формат увеличивает охват, но требует двойной подготовки."}
                  {step.number === 6 && "Тщательно отслеживайте ROI каждого канала привлечения с помощью UTM-меток."}
                  {step.number === 7 && "Используйте геймификацию и предложите участникам специальные условия на ваши продукты."}
                  {step.number === 8 && "Протестируйте звук, свет и интернет за день до — не в последний момент."}
                  {step.number === 9 && "Моделируйте реальные условия и получайте конкретную обратную связь."}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Conclusion */}
      <section className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Заключение
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Организация эффективной онлайн-конференции требует стратегического подхода, тщательного планирования и профессиональной реализации. Следуя этим шагам, вы сможете создать мероприятие, которое принесет значительную пользу вашему бизнесу, укрепит позиции бренда и повысит лояльность клиентов.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Непрерывный анализ результатов и постоянное совершенствование – ключ к долгосрочному успеху.
        </p>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
          <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            А что на ваш взгляд делает конференцию действительно успешной и запоминающейся?
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium">
            Алексей Назаров, основатель платформы Face2Face
          </p>
        </div>
      </section>
    </article>
  );
};

export default ConferenceArticle;