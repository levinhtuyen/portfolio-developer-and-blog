import type { AppConfigInput } from 'nuxt/schema'

export default defineAppConfig({
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
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: `Lê Vĩnh Tuyến - Blog's của tôi`,
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'LeTuyen',
      links: {
        github: 'https://github.com/levinhtuyen/myblog',
        website: 'https://tuyenleblog.tech',
      },
    },
  },
})
