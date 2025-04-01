"use client"
import React from "react";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-darkmode">
      <div className="container mx-auto px-4 lg:max-w-screen-xl md:max-w-screen-md">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <svg 
              className="w-16 h-16 text-green-500 mx-auto mb-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
              Заявка успешно отправлена!
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Спасибо за ваше обращение. Наша команда свяжется с вами в ближайшее время.
            </p>
          </div>
          <Link 
            href="/" 
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-darkmode transition duration-300"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage; 