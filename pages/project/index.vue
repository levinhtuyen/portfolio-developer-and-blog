<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
// compiler micro
definePageMeta({ layout: 'page' })
useHead({
  title: `Lê Vĩnh Tuyến - Blog's của tôi`,
  meta: [
    {
      name: 'description',
      content: `Lê Vĩnh Tuyến - Blog's của tôi - Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...`,
    },
    {
      property: 'og:title',
      content: `Lê Vĩnh Tuyến - Blog's của tôi - Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...`,
    },
    {
      property: 'og:url',
      content: computed(() => 'https://tuyenleblog.tech/post'),
    },
    {
      property: 'og:type',
      content: computed(() => 'website'),
    },
    {
      property: 'og:description',
      content: `Lê Vĩnh Tuyến - Blog's của tôi - Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...`,
    },
    {
      property: 'og:image',
      content: 'https://tuyenleblog.tech/logo.png',
    },
    {
      name: 'robots',
      content: computed(() => 'index, follow'),
    },
    {
      property: 'og:image:width',
      content: '1200',
    },
    {
      property: 'og:site_name',
      content: 'website',
    },
    {
      property: 'og:image:height',
      content: '628',
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
// query
const query: QueryBuilderParams = { path: '/post' }
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Projects" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <ContentList path="/project">
        <template #default="{ list }">
          <div class="min-h-[calc(100vh+1rem)]">
            <div
              class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16"
            >
              <article v-for="feel in list" :key="feel._path">
                <div class="leading-none mb-2 md:mb-2">
                  <AwesomeLink
                    :to="feel._path"
                    class="uppercase text-slate-500 text-[10px] hover:text-sky-600 dark:hover:text-sky-500"
                    >My story</AwesomeLink
                  >
                </div>
                <AwesomeLink
                  :to="feel._path"
                  class="group block relative rounded-lg bg-white border border-gray-200 overflow-hidden dark:bg-slate-800 dark:border-slate-800"
                >
                  <img
                    width="600"
                    height="300"
                    style="max-height: 265px"
                    :alt="feel.title"
                    :src="feel.image" />
                  <div
                    class="bg-black/10 absolute left-0 right-0 bottom-0 top-0 opacity-0 duration-200 transition-all group-hover:opacity-100"
                  ></div
                ></AwesomeLink>
                <div class="mt-3 md:mr-2">
                  <div>
                    <AwesomeLink
                      class="text-xl font-title hover:text-sky-600 dark:hover:text-sky-500"
                      :to="feel._path"
                    >
                      {{ feel.title }}</AwesomeLink
                    >
                  </div>
                  <div
                    class="text-slate-500 mt-2 text-sm line-clamp-3 leading-normal"
                  >
                    {{ feel.description }}
                  </div>
                  <div
                    class="mt-2.5 text-xs text-slate-400 dark:text-slate-600"
                  >
                    <span>Đăng ngày {{ feel.date }}</span>
                    <span>, {{ feel.author }}</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </template>
        <template #not-found>
          <p>No project found.</p>
        </template>
      </ContentList>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
