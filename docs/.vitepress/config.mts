import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "База знаний",
  description: "Википедия сервера Затмение",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Дом', link: '/' },
      { text: 'Прочее', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'О проекте',
        items: [
          { text: '📮・Как начать играть?', link: '/markdown-examples' },
		  { text: '', link: '/examples' },
          { text: '📝・Правила', link: '/rules' }
        ]
      },
	  {
        text: 'Фишки',
        items: [
          { text: '🧢・Косметика', link: '/cosmet' },
		  { text: '🤹‍♂️・Скиллы', link: '/skills' },
          { text: '🗽・Рассы', link: '/rass' }
		  { text: '📦・Лобби', link: '/lobby'}
        ]
      },
	  {
        text: 'Прочее',
        items: [
          { text: '✨・Спонсорство', link: '/prem' },
		  { text: '📸・Модераторство', link: '/examples' },
          { text: '🔮・Работа сервера', link: '/api-examples' }
        ]
      }
    ],
  }
})
