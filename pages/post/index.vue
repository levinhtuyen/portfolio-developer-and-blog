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
// const query: QueryBuilderParams = { path: '/post' }
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Blog" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <ContentList path="/post">
        <template #default="{ list }">
          <div class="min-h-[calc(100vh+1rem)] ">
            <div
              class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16"
            >
              <article
                v-for="article in list"
                :key="article._path"
                class="flex flex-col items-center gap-4 md:flex-row lg:gap-6 shadow-xl rounded-lg p-4"
              >
                <AwesomeLink
                  :to="article._path"
                  class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
                >
                  <img
                    width="400"
                    height="400"
                    style="max-height: 365px"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    :alt="article.title"
                    :src="article.image"
                  />
                </AwesomeLink>

                <div class="flex flex-col gap-2">
                  <span class="text-sm text-gray-400">{{ article.date }}</span>

                  <h2 class="text-xl font-bold text-gray-800">
                    <AwesomeLink
                      :to="article._path"
                      class="transition duration-100 hover:text-rose-500 active:text-rose-600 line-clamp-1"
                      >{{ article.title }}</AwesomeLink
                    >
                  </h2>

                  <p class="text-gray-500 line-clamp-2">
                    {{ article.description }}
                  </p>

                  <div>
                    <AwesomeLink
                      :to="article._path"
                      class="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700"
                      >Read more</AwesomeLink
                    >
                  </div>
                </div>
              </article>
            </div>
          </div>
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
