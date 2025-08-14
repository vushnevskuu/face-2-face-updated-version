import React, { useState } from 'react';
import { User, Building, Briefcase, Phone, Mail } from 'lucide-react';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the registration logic
    console.log('Registration data:', formData);
    // Redirect to thank you page with Telegram channel
    alert('Спасибо за регистрацию! Переходите в наш Telegram канал для получения дополнительных материалов.');
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Регистрация на вебинар
          </h2>
          <p className="text-xl text-gray-300">
            Заполните форму и получите доступ к эксклюзивным материалам
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 text-black">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  ФИО *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="Введите ваше полное имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline mr-2" />
                  Наименование компании *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="Название вашей компании"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Должность *
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="Ваша должность"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Телефон *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-4">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={handleInputChange}
                  required
                  className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                />
                <span className="text-sm text-gray-600">
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
                  className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                />
                <span className="text-sm text-gray-600">
                  Я даю согласие на обработку персональных данных *
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Зарегистрироваться бесплатно
            </button>
          </form>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-300">
            После регистрации вы получите ссылку на вебинар и доступ к нашему Telegram каналу с дополнительными материалами
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;