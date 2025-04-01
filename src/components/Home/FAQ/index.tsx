"use client"
import React from "react";
import { Icon } from "@iconify/react";
import { Disclosure } from "@headlessui/react";

const FAQ = () => {
  return (
    <section className="relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="relative rounded-2xl py-24 bg-faqBg bg-no-repeat bg-cover bg-primary">
          <p className="text-lg font-normal text-white text-center mb-6">Вопросы</p>
          <h2 className="text-6xl font-semibold text-center text-white mx-72">
            Часто задаваемые вопросы
          </h2>
          <div className="w-full px-4 pt-16">
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-none ">
                      <span className="text-black">Как работает услуга удаленного производственного директора?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""
                          }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-16 text-black/50 font-normal text-left pt-4 mt-6 border-t border-border">
                      <div className="lg:max-w-70%">
                        Мы анализируем ваши процессы, выявляем потери и разрабатываем план оптимизации. Далее внедряем изменения и контролируем результаты. Работаем дистанционно с выездами на производство по необходимости. Вы получаете компетенции опытного директора без затрат на постоянного сотрудника.
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5">
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-none">
                      <span className="text-black">Что такое бережливое производство и как оно поможет нашей компании?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""
                          }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-base text-black/50 pt-4 mt-6 text-left border-t border-border">
                      <div className="lg:max-w-70%">
                        Бережливое производство — это методология устранения потерь без ущерба для качества. Наши клиенты сокращают издержки на 15-30%, ускоряют производственный цикл и повышают качество продукции. Внедряем только те инструменты, которые дадут максимальный эффект именно в вашем случае.
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white">
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-none">
                      <span className="text-black">Где вы находитесь и как организована работа?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""
                          }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-base text-black/50 pt-4 mt-6 font-normal text-left border-t border-border">
                      <div className="lg:max-w-70%">
                        Наш офис находится в Санкт-Петербурге, но мы работаем с клиентами по всей России. Большая часть работы выполняется удаленно через системы видеоконференций и специализированное ПО. При необходимости выезжаем на производство для аудита и обучения персонала.
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;