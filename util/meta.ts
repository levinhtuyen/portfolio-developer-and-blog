// @ts-ignore

import { reactive, computed } from 'vue'
export const useMetaSeoIndex = () => {
  const siteData = reactive({
    title: 'Lê Vĩnh Tuyến - Portfolio developer',
    description:
      "Lê Vĩnh Tuyến - Blog's của tôi - Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...",
    content: "Lê Vĩnh Tuyến - Blog's của tôi",
    ogTitle: 'Lê Vĩnh Tuyến - Portfolio developer',
    ogDescription:
      "Lê Vĩnh Tuyến - Blog's của tôi - Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...",
    ogImage: 'https://tuyenleblog.tech/logo.png',
    ogType: 'article',
    ogLink: 'https://tuyenleblog.tech/',
    robots: 'index, follow',
    ogImageWidth: '1200',
    ogSideName: 'tuyenleblog.tech',
    ogImageHeight: '628',
  })

  useHead({
    // Can be static or computed
    title: computed(() => siteData.title),
    meta: [
      {
        name: 'description',
        content:
          "Lê Vĩnh Tuyến - Blog's của tôi - Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...",
      },
      {
        property: 'og:title',
        content: "Lê Vĩnh Tuyến - Blog's của tôi",
      },
      {
        property: 'og:url',
        content: computed(() => siteData.ogLink),
      },
      {
        property: 'og:type',
        content: computed(() => 'website'),
      },
      {
        property: 'og:description',
        content:
          "Lê Vĩnh Tuyến - Blog's của tôi - Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...",
      },

      {
        property: 'og:image',
        content: 'https://tuyenleblog.tech/logo.png',
      },
      {
        name: 'robots',
        content: computed(() => siteData.robots),
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:site_name',
        content: computed(() => 'website'),
      },
      {
        property: 'og:image:height',
        content: computed(() => siteData.ogImageHeight),
      },
      {
        property: 'msvalidate.01',
        content: computed(() => '11B70B71EB4BE19284312ADFF0011957'),
      },
    ],

    link: [
      { rel: 'canonical', href: 'https://tuyenleblog.tech', id: 'canonical' },
    ],
  })
  return useHead
}
