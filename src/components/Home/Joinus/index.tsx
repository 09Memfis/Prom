"use client"
import React from "react";

const Join = () => {
  return (
    <section className="overflow-hidden dark:bg-darkmode bg-joinus">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="text-center">
          <h3 className="text-blue text-lg font-normal tracking-widest uppercase">
            Получите консультацию
          </h3>
          <h2 className="text-6xl font-bold my-6">
            Повысьте эффективность производства
          </h2>
          <p className="text-black/50 text-base font-normal">
            Оставьте контакты, и мы свяжемся с вами для обсуждения вашей задачи. 
            Проведем бесплатный аудит процессов и предложим стратегию оптимизации.
          </p>
        </div>

        {/* Форма для быстрого контакта */}
        <form name="quick-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="mt-10">
          <input type="hidden" name="form-name" value="quick-contact" />
          <div className="hidden">
            <label>
              Не заполняйте это поле, если вы человек: <input name="bot-field" />
            </label>
          </div>
          
          <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-grey sm:rounded-full">
            <div className="w-full sm:w-auto">
              <input
                type="text"
                name="name"
                className="w-full my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-transparent pl-1 focus:outline-none bg-emailbg focus:text-black"
                placeholder="Ваше имя"
                autoComplete="off"
                required
              />
            </div>
            <div className="w-full sm:w-auto">
              <input
                type="email"
                name="email"
                className="w-full my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-transparent focus:outline-none bg-emailbg focus:text-black"
                placeholder="Ваш email"
                autoComplete="off"
                required
              />
            </div>
            <div className="sm:mr-3">
              <button
                type="submit"
                className="w-full sm:w-auto text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-primary py-5 px-12 hover:bg-darkmode duration-300"
              >
                Отправить
              </button>
            </div>
          </div>
        </form>

        {/* Подробная форма для описания задачи */}
        <div className="mt-16 bg-white dark:bg-darkmode shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Расскажите о вашей задаче подробнее</h3>
          
          <form name="detailed-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="detailed-contact" />
            <div className="hidden">
              <label>
                Не заполняйте это поле, если вы человек: <input name="bot-field" />
              </label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="fullname">Ваше имя</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="company">Компания</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="ООО Производство"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="mail@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="phone">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="message">Опишите вашу задачу</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Расскажите о вашем производстве и какие задачи вы хотите решить"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="py-4 px-12 bg-primary text-white font-bold rounded-full hover:bg-darkmode transition duration-300"
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Join;
