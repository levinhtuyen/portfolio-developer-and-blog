<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { awesome } = useAppConfig()
const $screen = useAwesomeScreen()

const nuxtApp = useNuxtApp()
const route = useRoute()
const titlesText = computed<string[]>(() =>
  'Lê Vĩnh Tuyến'
    .replaceAll('&nbsp;', '[space]')
    .split(' ')
    .map((item: any) => item.replaceAll('[space]', ' ')),
)
const { t, locale } = useI18n()
console.log('locale.value :>> ', locale.value)
const leadingsText = computed(() => [
  {
    text: titlesText.value[0],
    startColor: '#007CF0',
    endColor: '#00DFD8',
    delay: 2,
  },
  {
    text: titlesText.value[1],
    startColor: '#7928CA',
    endColor: '#FF0080',
    delay: 4,
  },
  {
    text: titlesText.value[2],
    startColor: '#4dff6a',
    endColor: '#4dff6a',
    delay: 6,
  },
])
// drawer
const showDrawer = ref(false)
const isOpen = ref(false)
const isActive = computed(() => route.name)
const menus = computed(
  () =>
    (awesome?.layout?.page?.navbar?.menus ||
      []) as AwesomeLayoutPageNavbarMenu[],
)
const isOpenMenu = () => {
  isOpen.value = !isOpen.value
}
watch(route.name, () => {
  isActive.value = route.name
})
</script>

<template>
  <header>
    <div
      class="fixed top-0 left-0 right-0 bg-white/90 border-b-[1px] border-gray-900/10 backdrop-blur-sm z-50 dark:bg-slate-900/90 dark:border-slate-50/10"
    >
      <div class="max-w-6xl m-auto z-1000">
        <div class="container-inner h-14 flex items-center px-4">
          <div class="logo-col">
            <NuxtLink
              aria-current="page"
              tag="a"
              alt="Lê Vĩnh Tuyến - Blog's của tôi"
              to="/"
              class="router-link-active router-link-exact-active group hover:text-slate-900 flex items-center transition-all duration-200 dark:hover:text-slate-100"
            >
              <slot>
                <div class="mr-2 -mb-1">
                  <span class="rounded-full">
                    <img
                      width="24"
                      height="24"
                      loading="lazy"
                      alt="logo-icon-dark-mode"
                      class="rounded-full"
                      src="/images/logo.webp"
                  /></span>
                </div>
              </slot>

              <div
                class="drop-shadow-sm group-hover:drop-shadow-md transition-all duration-200"
              >
                <ClientOnly>
                  <div class="flex items-center">
                    <span
                      v-for="(item, i) in leadingsText"
                      :key="i"
                      :style="`--content: '${item.text}'; --start-color: ${
                        item.startColor
                      }; --end-color: ${
                        item.endColor
                      }; --animation-name: anim-fg-${i + 1}`"
                      class="animated-text-bg drop-shadow-xl text-md sm:text-md md:text-md lg:text-md 2xl:text-md flex font-black uppercase"
                    >
                      <span class="animated-text-fg">{{
                        item.text
                      }}</span> </span
                    ><span
                      class="group-hover:text-amber-500 flex text-slate-700 text-sm transition-all duration-200 dark:text-slate-600"
                    >
                      's&nbsp;Blog</span
                    >
                  </div>
                </ClientOnly>
              </div></NuxtLink
            >
          </div>
          <div class="menu-col ml-auto flex items-center gap-4 md:gap-0">
            <div class="desk-menu hidden md:block items-center">
              <ul class="flex items-center">
                <li class="ml-8">
                  <NuxtLink
                    aria-current="page"
                    tag="a"
                    to="/mycv"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    class="router-link-active router-link-exact-active group text-sm hover:text-sky-600 flex items-center transition-all duration-200 dark:hover:text-sky-300 font-semibold"
                    :class="isActive === 'mycv' ? 'text-sky-600' : ''"
                  >
                    <slot> {{ $t('myCV') }}</slot>
                  </NuxtLink>
                </li>
                <li class="ml-8">
                  <NuxtLink
                    aria-current="page"
                    tag="a"
                    to="/feel"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    class="router-link-active router-link-exact-active group text-sm hover:text-sky-600 flex items-center transition-all duration-200 dark:hover:text-sky-300 font-semibold"
                    :class="
                      isActive === 'feel' || isActive === 'feel-slug'
                        ? 'text-sky-600'
                        : ''
                    "
                  >
                    <slot> {{ $t('myStory') }}</slot>
                  </NuxtLink>
                </li>
                <li class="ml-8">
                  <NuxtLink
                    aria-current="page"
                    tag="a"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    to="/post"
                    class="router-link-active router-link-exact-active group text-sm hover:text-sky-600 flex items-center transition-all duration-200 dark:hover:text-sky-300 font-semibold"
                    :class="
                      isActive === 'post' || isActive === 'post-slug'
                        ? 'text-sky-600'
                        : ''
                    "
                  >
                    <slot>Blog</slot>
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div
              class="hidden md:block h-6 border-l border-gray-300 ml-4 mr-4 dark:border-slate-700/80"
            ></div>
            <LayoutPageNavbarDropdownModeThemeSwitcher />
            <div
              class="hidden md:block h-6 border-l border-gray-300 ml-4 mr-4 dark:border-slate-700/80"
            ></div>
            <LayoutPageNavbarDropdownLangThemeSwitcher />
            <div class="block md:hidden">
              <div
                v-if="!isOpen"
                class="h-8 w-8 ml-2 -mr-2 flex items-center justify-center group cursor-pointer"
                @click="isOpenMenu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </div>
              <div
                v-else
                class="h-8 w-8 ml-2 -mr-2 flex justify-center items-center md:hidden"
                @click="isOpenMenu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isOpen" class="px-4">
        <ul>
          <!--[-->
          <li class="border-t border-t-gray-100 dark:border-t-slate-800">
            <a
              href="/mycv"
              alt="Lê Vĩnh Tuyến - Blog's của tôi"
              name="Lê Vĩnh Tuyến - Blog's của tôi"
              class="block py-3 text-sm"
              :class="isActive === 'mycv' ? 'text-sky-600' : ''"
              >{{ $t('myCV') }}</a
            >
          </li>
          <li class="border-t border-t-gray-100 dark:border-t-slate-800">
            <a
              href="/feel"
              alt="Lê Vĩnh Tuyến - Blog's của tôi"
              name="Lê Vĩnh Tuyến - Blog's của tôi"
              class="block py-3 text-sm"
              :class="
                isActive === 'feel' || isActive === 'feel-slug'
                  ? 'text-sky-600'
                  : ''
              "
              >{{ $t('myStory') }}</a
            >
          </li>
          <li class="border-t border-t-gray-100 dark:border-t-slate-800">
            <a
              href="/post"
              alt="Lê Vĩnh Tuyến - Blog's của tôi"
              name="Lê Vĩnh Tuyến - Blog's của tôi"
              :class="
                isActive === 'post' || isActive === 'post-slug'
                  ? 'text-sky-600'
                  : ''
              "
              class="block py-3 text-sm"
              >Blog</a
            >
          </li>
          <!--]-->
        </ul>
      </div>
    </div>
  </header>
</template>
