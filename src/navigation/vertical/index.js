export default [
  {
    title: 'Главная',
    route: 'home',
    icon: 'HomeIcon',
  },
  {
    header: 'Основные',
  },
  {
    title: 'See CV',
    icon: 'GridIcon',
    children: [
      {
        title: 'Мои папки',
        route: 'see-cv',
      },
      {
        title: 'Кандидаты',
        route: 'candidate-user',
      },
      {
        title: 'Счёт',
        route: 'see-cv-bill',
      },
    ],
  },
]
