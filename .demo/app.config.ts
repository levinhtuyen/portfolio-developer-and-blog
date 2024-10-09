export default defineAppConfig({
  awesome: {
    name: `Lê Vĩnh Tuyến - Blog's của tôi`,
    description:
      'Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...',
    author: {
      name: 'viandwi24',
      links: {
        github: 'https://github.com/levinhtuyen/myblog',
        website: 'https://tuyenleblog.tech',
      },
    },
    layout: {
      welcome: {
        // if false, in index page will show alert "create file "~/pages/index.vue" to replace this page"
        disableInfoReplaceIndexInWelcomePage: false,
        secondaryActionButton: {
          title: 'See Github',
        },
      },
    },
    project: {
      links: {
        github: 'https://github.com/levinhtuyen/myblog',
      },
    },
  },
})
function defineAppConfig(arg0: {
  awesome: {
    name: string
    description: string
    author: { name: string; links: { github: string; website: string } }
    layout: {
      welcome: {
        // if false, in index page will show alert "create file "~/pages/index.vue" to replace this page"
        disableInfoReplaceIndexInWelcomePage: boolean
        secondaryActionButton: { title: string }
      }
    }
    project: { links: { github: string } }
  }
}) {
  throw new Error('Function not implemented.')
}
