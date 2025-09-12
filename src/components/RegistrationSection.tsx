import React, { useState } from 'react';
import { User, Phone, Mail, CheckCircle2, X, Building, Briefcase } from 'lucide-react';

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    position: '',
    phone: '',
    email: '',
    privacyConsent: false,
    dataProcessingConsent: false
  });

  const [showThanks, setShowThanks] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const TELEGRAM_BOT_URL = 'https://t.me/face2face';
  const SUPPORT_URL = 'https://t.me/';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_TOKEN || 'YOUR_TOKEN_HERE',
          subject: 'Регистрация на вебинар Face2Face',
          from_name: 'Face2Face',
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          position: formData.position,
          message: `
Новая регистрация на вебинар:

ФИО: ${formData.fullName}
Компания: ${formData.company}
Должность: ${formData.position}
Телефон: ${formData.phone}
Email: ${formData.email}

Согласие на обработку данных: Да
Согласие с политикой конфиденциальности: Да
          `.trim()
        }),
      });

      if (response.ok) {
        setFormData({
          fullName: '',
          company: '',
          position: '',
          phone: '',
          email: '',
          privacyConsent: false,
          dataProcessingConsent: false
        });
        setShowThanks(true);
      } else {
        throw new Error('Ошибка отправки формы');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Произошла ошибка при отправке формы. Попробуйте еще раз.');
      setShowThanks(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <section className="py-8 md:py-20 bg-black text-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-[28px] md:text-4xl font-bold mb-4">
            Регистрация на вебинар
          </h2>
          <p className="text-xl text-gray-300">
            Заполните форму и получите доступ к эксклюзивным материалам
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 text-black dark:text-gray-100">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  ФИО *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  onInvalid={(e)=> e.currentTarget.setCustomValidity('Пожалуйста, укажите ваше полное имя')}
                  onInput={(e)=> e.currentTarget.setCustomValidity('')}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="Введите ваше полное имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  <Building className="w-4 h-4 inline mr-2" />
                  Наименование компании *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  onInvalid={(e)=> e.currentTarget.setCustomValidity('Пожалуйста, укажите название компании')}
                  onInput={(e)=> e.currentTarget.setCustomValidity('')}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="Название вашей компании"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Должность *
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  onInvalid={(e)=> e.currentTarget.setCustomValidity('Пожалуйста, укажите вашу должность')}
                  onInput={(e)=> e.currentTarget.setCustomValidity('')}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="Ваша должность"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Телефон *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  onInvalid={(e)=> e.currentTarget.setCustomValidity('Пожалуйста, укажите номер телефона')}
                  onInput={(e)=> e.currentTarget.setCustomValidity('')}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                onInvalid={(e)=> e.currentTarget.setCustomValidity('Пожалуйста, введите корректный email')}
                onInput={(e)=> e.currentTarget.setCustomValidity('')}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-3 md:space-y-4">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={handleInputChange}
                  required
                  onInvalid={(e)=> (e.currentTarget as HTMLInputElement).setCustomValidity('Необходимо согласие с политикой конфиденциальности')}
                  onInput={(e)=> (e.currentTarget as HTMLInputElement).setCustomValidity('')}
                  className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Я согласен с{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    политикой конфиденциальности
                  </a>
                  {' '}*
                </span>
              </label>

              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="dataProcessingConsent"
                  checked={formData.dataProcessingConsent}
                  onChange={handleInputChange}
                  required
                  onInvalid={(e)=> (e.currentTarget as HTMLInputElement).setCustomValidity('Необходимо согласие на обработку персональных данных')}
                  onInput={(e)=> (e.currentTarget as HTMLInputElement).setCustomValidity('')}
                  className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Я даю согласие на обработку персональных данных *
                </span>
              </label>
            </div>

            {submitError && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-sm">{submitError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className={`w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg ${submitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-700 hover:to-green-700 transform hover:scale-105'}`}
            >
              {submitting ? 'Отправка…' : 'Зарегистрироваться бесплатно'}
            </button>
          </form>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-300">
            После регистрации вы получите ссылку на вебинар и доступ к нашему Telegram каналу<br />с дополнительными материалами
          </p>
        </div>
      </div>
    </section>
    
    {/* Thank you modal */}
    {(showThanks || submitError) && (
      <div
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={() => { setShowThanks(false); setSubmitError(''); }}
        aria-modal
        role="dialog"
      >
        <div
          className="relative w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/5 dark:ring-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            aria-label="Закрыть"
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={() => { setShowThanks(false); setSubmitError(''); }}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="px-6 pt-8 pb-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-[22px] md:text-3xl font-bold leading-tight text-black dark:text-white mb-2">
              {submitError ? 'Заявка сохранена локально' : 'Подтвердите регистрацию — получите ссылку на\u00A0трансляцию'}
            </h3>
            {submitError && (
              <p className="mb-3 text-sm text-red-600 dark:text-red-400">{submitError}</p>
            )}

            {/* hint about mail folders - moved above green text */}
            <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
              <p>
                Не видите письмо?
                <br />
                Загляните в{'\u00A0'}«Спам», «Промоакции» или{'\u00A0'}«Оповещения».
              </p>
            </div>

            <p className="text-[20px] md:text-[22px] font-normal text-green-500 mb-4 leading-snug">
              Чтобы не потерять ссылку, подключите Telegram‑бота.
              <br />Он пришлёт доступ и{'\u00A0'}запись.
            </p>

            <div className="flex flex-col items-center gap-3 mb-4">
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-green-600 px-6 py-3 font-semibold text-white shadow-md hover:from-blue-700 hover:to-green-700 transition-colors"
              >
                Получить ссылку в{'\u00A0'}Telegram
              </a>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              Если письма всё{'\u00A0'}ещё нет — напишите нам:
              <br />
              <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">t.me</a>
            </p>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default RegistrationSection;