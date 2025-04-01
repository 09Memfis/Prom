"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";

// Define the plan structure and its types
const plans = [
  {
    heading: "Базовый",
    price: {
      monthly: 19000,
      yearly: 14000,
    },
    user: "в месяц",
    features: {
      profiles: "Аудит процессов",
      posts: "5 часов консультаций",
      templates: "Базовые рекомендации",
      view: "Отчет с планом улучшений",
      support: "Поддержка по email",
    },
  },
  {
    heading: "Стандарт",
    price: {
      monthly: 35000,
      yearly: 29000,
    },
    user: "в месяц",
    features: {
      profiles: "Углубленный аудит",
      posts: "15 часов консультаций",
      templates: "Внедрение инструментов 5S",
      view: "Обучение персонала",
      support: "Поддержка 24/7",
    },
  },
  {
    heading: "Премиум",
    price: {
      monthly: 70000,
      yearly: 59000,
    },
    user: "в месяц",
    features: {
      profiles: "Комплексная оптимизация",
      posts: "Неограниченные консультации",
      templates: "Внедрение полной системы Lean",
      view: "Разработка и внедрение KPI",
      support: "Персональный консультант 24/7",
    },
  },
];

const Manage = () => {
  const [enabled, setEnabled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"yearly" | "monthly">("yearly");

  const toggleEnabled = () => {
    // Toggle the enabled state
    setEnabled((prevEnabled) => !prevEnabled);

    // Update selected category based on the switch position
    setSelectedCategory((prevCategory) => (prevCategory === "yearly" ? "monthly" : "yearly"));
  };

  const filteredData = plans.map((plan) => ({
    ...plan,
    price: plan.price[selectedCategory], // Use the selectedCategory to show either monthly or yearly
  }));

  return (
    <section id="services-section dark:bg-darkmode">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-center text-6xl font-black mx-24">
          Комплексное сопровождение производственных процессов
        </h3>

        <div className="md:flex md:justify-around mt-20">
          <div className="flex gap-5 justify-center md:justify-start">
            <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
            <h4 className="text-18 font-semibold">Бесплатный аудит</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
            <h4 className="text-18 font-semibold">Неограниченные консультации</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
            <h4 className="text-18 font-semibold">Гибкие условия</h4>
          </div>
        </div>

        <div className="mt-6 relative">
          <div className="dance-text -ml-80 text-center -rotate-[10deg] mb-5">скидка 15%</div>
          <Image src="/images/manage/toggle.svg" alt="toggle-image" width={24} height={24} className="absolute left-[37%] top-8" />
          <div className="flex justify-center">
            <h3 className="text-14 font-medium mr-5">Ежегодно</h3>
            <Switch
              checked={enabled}
              onChange={toggleEnabled}
              className={`${
                enabled ? "bg-primary" : "bg-black"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Переключение периода оплаты</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <h3 className="text-14 font-medium ml-5">Ежемесячно</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-14 manage">
          {filteredData.map((items, i) => (
            <div className="shadow-manage-shadow border border-border text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
              <h2 className="text-6xl font-extrabold mb-3">₽{items.price}</h2>
              <p className="text-14 font-medium text-darkgrey mb-6">{items.user}</p>

              <button className="text-14 font-bold text-primary bg-transparent hover:bg-primary hover:text-white border-2 border-primary rounded-full py-4 px-12 mb-6">
                Заказать аудит
              </button>
              {/* Map through the features object and render each key-value pair dynamically */}
              {Object.entries(items.features).map(([key, value]) => (
                <h3 className="text-sm font-medium text-darkgrey mb-3" key={key}>
                  {value}
                </h3>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manage;
