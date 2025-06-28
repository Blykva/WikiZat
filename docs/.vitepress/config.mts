import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "База знаний",
  description: "Википедия проекта Затмение",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Кратко', link: '/' },
      { text: 'Как играть', link: '/start-guide' },
      { text: 'Особенности', link: '/features/' }
    ],

    sidebar: [
      {
        text: 'О проекте',
        items: [
          { text: '📮・Как начать играть?', link: '/start-guide' },
          { text: '📜・Что уникального?', link: '/features/' },
          { text: '📝・Правила', link: '/rules' }
        ]
      },
      {
        text: 'Фишки',
        items: [
          { text: '⛏️・Ресурсы и изделия', link: '/features/minerals' },
          { text: '🤹‍♂️・Скиллы', link: '/features/skills' },
          { text: '🗽・Расы', link: '/features/lineages' },
          { text: '📦・Лобби', link: '/features/lobby' }
        ]
      },
      {
        text: 'Прочее',
        items: [
          { text: '✨・Спонсорство', link: '/advanced/sponsorship' },
          { text: '🗳️・Стать модератором', link: '/advanced/mod-team' },
          //{ text: '🔮・Работа сервера', link: '/advanced/server-status' } ? - что это должно быть быть
        ]
      }
    ],

    //ПЕРЕВОД
    outlineTitle: 'Заголовки страницы:',

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
  },
  markdown: {
    container: {
      tipLabel: 'Подсказка',
      warningLabel: 'Важно',
      dangerLabel: 'Внимание',
      infoLabel: 'Справка',
      detailsLabel: 'Подробно'
    }
  }
})
