import { Icon } from "@iconify/react/dist/iconify.js";
export const ProductType: { id: number; section: string; link: string[]; }[] = [
  {
    id: 1,
    section: "Услуги",
    link: ['Аудит процессов', 'Оптимизация производства', 'Внедрение 5S/Lean', 'Обучение персонала'],
  },
  {
    id: 2,
    section: "Компания",
    link: ['О нас', 'Команда', 'Проекты', 'Отзывы']
  },
  {
    id: 3,
    section: "Ресурсы",
    link: ['Статьи', 'Видео', 'Калькуляторы', 'Чек-листы']
  },
  {
    id: 4,
    section: "Связаться",
    link: ['+7 (931) 303-93-03', 'Заказать звонок', 'Telegram']
  }
];


export const Aboutdata: { heading: string; imgSrc: string; paragraph: string; link: string; }[] = [
  {
    heading: "О нас",
    imgSrc: "/images/aboutus/imgOne.svg",
    paragraph:
      "Помогаем производствам работать эффективнее. Применяем принципы бережливого производства без лишних затрат. Результат — прозрачность процессов и рост прибыли.",
    link: "Подробнее",
  },
  {
    heading: "Услуги",
    imgSrc: "/images/aboutus/imgTwo.svg",
    paragraph:
      "Анализируем, оптимизируем, внедряем. Предоставляем услуги удаленного производственного директора, когда нужны результаты без увеличения штата.",
    link: "Подробнее",
  },
  {
    heading: "Проекты",
    imgSrc: "/images/aboutus/imgThree.svg",
    paragraph:
      "Сократили время производственного цикла на 30%. Уменьшили запасы на складе без риска простоев. Увеличили выработку без найма персонала.",
    link: "Подробнее",
  },
];

export const DataType: { profession: string; name: string; imgSrc: string; }[] = [
  {
    profession: "Эксперт по бережливому производству",
    name: "Алексей Иванов",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    profession: "Специалист по системе 5S",
    name: "Мария Смирнова",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    profession: "Внедрение ТРМ на производстве",
    name: "Дмитрий Петров",
    imgSrc: "/images/wework/avatar4.svg",
  },
  {
    profession: "Специалист по VSM-анализу",
    name: "Елена Козлова",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    profession: "Эксперт по автоматизации учёта",
    name: "Сергей Николаев",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    profession: "Стандарты ISO и ГОСТ",
    name: "Ольга Соколова",
    imgSrc: "/images/wework/avatar4.svg",
  },
];

export const postData: { heading: string; imgSrc: string; }[] = [
  {
    heading: "Оптимизация конвейерной линии для завода электроники",
    imgSrc: "/images/featured/feat1.jpg",
  },
  {
    heading: "Внедрение системы канбан на производстве мебели",
    imgSrc: "/images/featured/feat2.jpg",
  },
  {
    heading: "Сокращение простоев на металлообрабатывающем предприятии",
    imgSrc: "/images/featured/feat1.jpg",
  },
  {
    heading: "Повышение качества продукции в пищевой промышленности",
    imgSrc: "/images/featured/feat2.jpg",
  },
];

export const Testimonials: { profession: string; comment: string; imgSrc: string; name: string; rating: number }[] = [
  {
    name: "Андрей Семенов",
    profession: "Генеральный директор, ООО «ПромТех»",
    comment:
      "Работа с командой специалистов по бережливому производству превзошла ожидания. За 3 месяца мы сократили издержки на 15% и увеличили производительность на 20%. Особенно ценно, что все изменения были внедрены удаленно.",
    imgSrc: "/images/testimonial/user1.svg",
    rating: 5,
  },
  {
    name: "Екатерина Морозова",
    profession: "Операционный директор, АО «МеталлПром»",
    comment:
      "Скептически относилась к идее удаленного производственного директора. Но результаты говорят сами за себя: время выполнения заказа сократилось с 14 до 8 дней, брак уменьшился в 2 раза. Рекомендую!",
    imgSrc: "/images/testimonial/user2.svg",
    rating: 4,
  },
  {
    name: "Игорь Васильев",
    profession: "Владелец, ООО «ЛайтВуд»",
    comment:
      "Обратились за помощью, когда компания стала расти, а процессы начали давать сбои. Внедрили систему 5S и наладили управление запасами. Теперь производство работает как часы, даже без постоянного присутствия руководителя.",
    imgSrc: "/images/testimonial/user3.svg",
    rating: 4,
  },
  {
    name: "Марина Кузнецова",
    profession: "Финансовый директор, ЗАО «ПластикПро»",
    comment:
      "Главное достоинство — подход к оптимизации затрат. Наши расходы снизились, при этом не пришлось увольнять сотрудников или снижать качество. Решения были умными и учитывали специфику нашего бизнеса.",
    imgSrc: "/images/testimonial/user1.svg",
    rating: 4,
  },
  {
    name: "Павел Соловьев",
    profession: "Директор производства, ООО «ФудМастер»",
    comment:
      "Внедрение принципов бережливого производства помогло нам выжить в кризис. Оборудование стало работать эффективнее, а система контроля качества теперь выявляет дефекты раньше, чем они попадают к клиенту.",
    imgSrc: "/images/testimonial/user2.svg",
    rating: 4,
  },
  {
    name: "Наталья Белова",
    profession: "Руководитель отдела качества, ПАО «ТехноЛаб»",
    comment:
      "Консультации по системе quality management превзошли ожидания. Параллельно получили рекомендации по оптимизации логистики и планированию производства. Вложения окупились за первые два месяца работы.",
    imgSrc: "/images/testimonial/user3.svg",
    rating: 4,
  },
];


export const Article: { time: string; heading: string; heading2: string; date: string; imgSrc: string; name: string; }[] = [
  {
    time: "5 мин",
    heading: "Как внедрить канбан",
    heading2: "на малом производстве",
    name: "Кейс клиента",
    date: "20 марта, 2023",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "7 мин",
    heading: "5 способов сократить",
    heading2: "простои оборудования",
    name: "Практические советы",
    date: "15 февраля, 2023",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "4 мин",
    heading: "Как удаленный директор",
    heading2: "спас производство",
    name: "История успеха",
    date: "30 января, 2023",
    imgSrc: "/images/articles/article3.png",
  },
  {
    time: "6 мин",
    heading: "Бережливое производство",
    heading2: "в российских реалиях",
    name: "Аналитическая статья",
    date: "10 декабря, 2022",
    imgSrc: "/images/articles/article.png",
  },
  {
    time: "8 мин",
    heading: "Как оптимизировать",
    heading2: "запасы без рисков",
    name: "Экспертное мнение",
    date: "5 ноября, 2022",
    imgSrc: "/images/articles/article2.png",
  },
  {
    time: "5 мин",
    heading: "Автоматизация учета",
    heading2: "в производстве",
    name: "Технологическое решение",
    date: "20 октября, 2022",
    imgSrc: "/images/articles/article3.png",
  },
];
