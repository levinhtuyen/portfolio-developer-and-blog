import { NuxtAwesomeAppConfig } from './app.config'

export default defineNuxtSchema({
  appConfig: {
    awesome: {
      name: `Lê Vĩnh Tuyến - Blog's của tôi`,
      description:
        'Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...',
      project: {
        links: {
          github: 'https://github.com/levinhtuyen/myblog',
        },
      },
      layout: {
        page: {
          navbar: {
            menus: [],
          },
        },
        footer: {
          year: 2023,
        },
        welcome: {
          title: `Lê Vĩnh Tuyến - Blog's của tôi`,
          disableInfoReplaceIndexInWelcomePage: true,
        },
      },
      author: {
        name: 'TuyenLe',
        links: {
          github: 'https://github.com/levinhtuyen/myblog',
          website: 'https://tuyenleblog.tech',
        },
      },
    } as NuxtAwesomeAppConfig,
  },
})
