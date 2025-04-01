"use client"
import React from "react";
import Link from "next/link";

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

        <div className="mx-auto max-w-4xl pt-5">
          <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-grey sm:rounded-full">
            <div>
              <input
                type="name"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-transparent pl-1 focus:outline-none bg-emailbg focus:text-black"
                placeholder="Ваше имя"
                autoComplete="off"
              />
            </div>
            <div>
              <input
                type="email"
                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-transparent focus:outline-none bg-emailbg focus:text-black"
                placeholder="Ваш email"
                autoComplete="off"
              />
            </div>
            <div className="sm:mr-3">
              <Link
                href="#"
                className="w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-primary py-5 px-12 hover:bg-darkmode duration-300"
              >
                Отправить
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Join;
