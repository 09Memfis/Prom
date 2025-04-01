import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md relative">
        <h2 className="text-6xl font-bold text-center mx-20">
          Команда экспертов в бережливом производстве
        </h2>
        <h3 className="text-2xl font-medium text-center pt-10 opacity-50 mx-52">
          Более 10 лет опыта внедрения производственных систем и оптимизации процессов на предприятиях различных отраслей
        </h3>
        <div className="grid grid-cols-1 mt-16">
          <Image
            src="/images/team/teamimg.png"
            alt="команда-фото"
            height={684}
            width={1296}
            className="relative z-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
