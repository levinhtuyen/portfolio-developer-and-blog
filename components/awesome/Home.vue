<script lang="ts" setup>
import { ref } from 'vue'
import awesome from '../../plugins/awesome'

const { current } = useAwesomeScreen()

const router = useRouter()
const currentPhraseIndex = ref(0)
const currentCharacterIndex = ref(0)
const { t } = useI18n()
const phrases = [t('im') + ` Lê Vĩnh Tuyến`, t('iLearnIdeveloper')]
const isDeleting = ref(false)
const currentPhrase = ref<string>(t('im') + ` Lê Vĩnh Tuyến`)

function loop() {
  const currentPhraseText = phrases[currentPhraseIndex.value]

  if (!isDeleting.value) {
    currentPhrase.value += currentPhraseText[currentCharacterIndex.value]
    currentCharacterIndex.value++
  } else {
    currentPhrase.value = currentPhrase.value.slice(0, -1)
    currentCharacterIndex.value--
  }

  if (currentCharacterIndex.value === currentPhraseText.length) {
    isDeleting.value = true
  }

  if (currentCharacterIndex.value === 0) {
    currentPhrase.value = ''
    isDeleting.value = false
    currentPhraseIndex.value++
    if (currentPhraseIndex.value === phrases.length) {
      currentPhraseIndex.value = 0
    }
  }

  const spedUp = Math.random() * (80 - 50) + 150
  const normalSpeed = Math.random() * (300 - 250) + 50
  const time = isDeleting.value ? spedUp : normalSpeed
  setTimeout(loop, time)
}
setTimeout(() => {
  currentPhrase.value = ''
  loop()
}, 3000)
const redirectUrl = (url: string, isOutApp: boolean) => {
  if (!url) {
    return
  }
  if (!isOutApp) {
    router.push({ path: url })
  } else {
    window.open(url)
  }
}
</script>

<template>
  <LayoutPageWrapper class="max-w-6xl m-auto">
    <LayoutPageSection>
      <!-- About me -->
      <section>
        <div class="content-wrapper pt-2">
          <div class="relative">
            <div class="relative z-10">
              <div class="w-full lg:w-3/5">
                <div
                  class="mb-1 flex items-center gap-1 text-2xl text-slate-600 md:mb-0 md:gap-2 md:text-4xl dark:text-slate-400"
                >
                  {{ $t('hi') }}!
                  <div
                    style="
                      opacity: 1;
                      transform-origin: right center;
                      transform: none;
                    "
                    class="w-8 md:w-16"
                  >
                    <img
                      alt="hi"
                      width="64"
                      height="64"
                      format="webp"
                      loading="lazy"
                      src="/images/hi.webp"
                      style="color: transparent"
                    />
                  </div>
                </div>
                <span class="text-slate-700 dark:text-slate-300"
                  ><span
                    class="mb-1 block text-[2.1rem] font-[1000] leading-none md:text-6xl"
                  >
                    {{ currentPhrase }}&nbsp;
                  </span>
                </span>
              </div>
              <div class="grid-cols-1 md:grid-cols-2 grid md:flex">
                <div
                  class="lg:w-1/3 w-full text-base text-slate-600 md:text-xl pt-5 dark:text-slate-400 col-span-1"
                >
                  <!-- Front-End -->
                  <div>
                    <p>
                      <strong class="text-slate-700 dark:text-slate-300">{{
                        t('aFrontEnDeveloper')
                      }}</strong>
                    </p>
                    <p
                      class="text-base md:text-lg font-normal text-gray-700 dark:text-white"
                    >
                      <span> {{ t('imAlwaysEagerToExpandMySkill') }}</span>
                    </p>
                    <p
                      class="text-base md:text-lg font-normal text-gray-700 dark:text-white"
                    >
                      <i>"- With Small Steps, I Will Go Very Far_"</i>
                    </p>
                  </div>
                  <!-- Contract -->
                  <div class="mt-3 md:mt-5">
                    <div>
                      <div class="mb-3 flex space-x-4">
                        <NuxtLink
                          aria-label="blog-cua-toi"
                          aria-current="page"
                          tag="a"
                          class="text-sm text-gray-500 transition hover:text-gray-600"
                          target="_blank"
                          alt="Lê Vĩnh Tuyến - Blog's của tôi"
                          name="Lê Vĩnh Tuyến - Blog's của tôi"
                          rel="noopener noreferrer"
                          to="mailto:levinhtuyen210@gmail.com"
                          ><awesomeSVGComponent
                            class-name="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8"
                            label="Mail"
                          >
                            <path
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                            ></path>
                            <path
                              d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                            ></path>
                          </awesomeSVGComponent> </NuxtLink
                        ><NuxtLink
                          aria-label="blog-cua-toi"
                          aria-current="page"
                          tag="a"
                          class="text-sm text-gray-500 transition hover:text-gray-600"
                          target="_blank"
                          rel="noopener noreferrer"
                          alt="Lê Vĩnh Tuyến - Blog's của tôi"
                          name="Lê Vĩnh Tuyến - Blog's của tôi"
                          to="https://github.com/levinhtuyen"
                        >
                          <awesomeSVGComponent
                            class-name="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6"
                            size="24"
                            label="GitHub"
                          >
                            <path
                              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                            ></path>
                          </awesomeSVGComponent>
                        </NuxtLink>
                        <NuxtLink
                          aria-label="blog-cua-toi"
                          aria-current="page"
                          tag="a"
                          class="text-sm text-gray-500 transition hover:text-gray-600"
                          rel="noopener noreferrer"
                          alt="Lê Vĩnh Tuyến - Blog's của tôi"
                          name="Lê Vĩnh Tuyến - Blog's của tôi"
                          to="#"
                        >
                          <awesomeSVGComponent
                            class-name="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6"
                            size="24"
                            label="X"
                          >
                            <path
                              d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                            ></path> </awesomeSVGComponent
                        ></NuxtLink>
                        <NuxtLink
                          aria-label="blog-cua-toi"
                          aria-current="page"
                          tag="a"
                          class="text-sm text-gray-500 transition hover:text-gray-600"
                          rel="noopener noreferrer"
                          alt="Lê Vĩnh Tuyến - Blog's của tôi"
                          name="Lê Vĩnh Tuyến - Blog's của tôi"
                          to="#"
                        >
                          <awesomeSVGComponent
                            class-name="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6"
                            label="linkedin"
                          >
                            <path
                              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                            ></path>
                          </awesomeSVGComponent> </NuxtLink
                        ><NuxtLink
                          aria-label="blog-cua-toi"
                          aria-current="page"
                          tag="a"
                          class="text-sm text-gray-500 transition hover:text-gray-600"
                          target="_blank"
                          alt="Lê Vĩnh Tuyến - Blog's của tôi"
                          name="Lê Vĩnh Tuyến - Blog's của tôi"
                          rel="noopener noreferrer"
                          to="https://www.facebook.com/profile.php?id=100007906847424"
                        >
                          <awesomeSVGComponent
                            class-name="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6"
                            label="facebook"
                          >
                            <path
                              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                            ></path>
                          </awesomeSVGComponent> </NuxtLink
                        ><NuxtLink
                          aria-label="blog-cua-toi"
                          aria-current="page"
                          tag="a"
                          class="text-sm text-gray-500 transition hover:text-gray-600"
                          target="_blank"
                          rel="noopener noreferrer"
                          name="Lê Vĩnh Tuyến - Blog's của tôi"
                          alt="Lê Vĩnh Tuyến - Blog's của tôi"
                          to="https://www.youtube.com/@ngaodusonthuy3000"
                        >
                          <awesomeSVGComponent
                            class-name="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6"
                            label="youtube"
                          >
                            <path
                              d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"
                            ></path>
                          </awesomeSVGComponent>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                  <!--   Tech stack/tools -->
                  <div class="mt-4 lg:mt-8">
                    <div class="w-full">
                      <p
                        class="mb-2.5 text-sm text-slate-600 dark:text-slate-400"
                        style="opacity: 1; transform: none"
                      >
                        {{ t('techStackTools') }}
                      </p>
                      <ul
                        class="w-full flex flex-wrap items-center gap-3.5 text-slate-500 dark:text-slate-500"
                      >
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#61DAFB]"
                          >
                            <!-- Vue.js SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/vuejs.svg"
                              alt="vuejs"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>

                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Nuxt JS SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/nuxtjs.svg"
                              alt="nuxtjs"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#3178C6]"
                          >
                            <!-- Taiwin icon -->

                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/tailwindcss.svg"
                              alt="tailwindcss"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#61DAFB]"
                          >
                            <!-- Npm icon -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/npm.svg"
                              alt="Npm"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#06B6D4]"
                          >
                            <!-- Figma SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/figma.svg"
                              alt="Figma"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#0055FF]"
                          >
                            <!-- Firebase SVG -->

                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/firebase.svg"
                              alt="firebase"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]"
                          >
                            <!-- Git SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/git.svg"
                              alt="GIT"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- JavaScript SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/javascript.svg"
                              alt="JavaScript"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Jira SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/jira.svg"
                              alt="jira"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Laravel SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/laravel.svg"
                              alt="Laravel"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Node.js SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/nodejs.svg"
                              alt="Nodejs"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>

                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Postman SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/postman.svg"
                              alt="Postman"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>

                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Slack SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/slack.svg"
                              alt="Slack"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- TypeScript SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/typescript.svg"
                              alt="TypeScript"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Vite.js SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/vitejs.svg"
                              alt="Vitejs"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Visual Studio Code -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/vscode.svg"
                              alt="vscode"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Yarn-->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/yarn.svg"
                              alt="yarn"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Quasar SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/quasar.svg"
                              alt="Quasar"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- HTML5 SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/html5.svg"
                              alt="html5"
                            />
                          </div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                          ></div>
                        </li>
                        <li style="opacity: 1; transform: none">
                          <div
                            class="transition duration-200 hover:text-[#007ACC]"
                          >
                            <!-- Adobe Potoshop SVG -->
                            <img
                              loading="lazy"
                              class="h-6 w-6"
                              src="/svg/adobephotoshop.svg"
                              alt="adobephotoshop"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <ClientOnly>
                  <model-viewer
                    class="col-span-1 custome-model-me"
                    src="/images/model.glb"
                    loading="eager"
                    camera-controls
                    autoplay
                    touch-action=""
                    style="height: 340px"
                    disable-zoom
                    interaction-prompt="none"
                    animation-name="Running"
                    scale="0.52 0.52 0.52"
                    alt="avatar me"
                  >
                  </model-viewer>
                </ClientOnly>
              </div>
            </div>

            <div
              class="pointer-events-none absolute -top-36 right-0 z-0 hidden select-none lg:block"
            >
              <div
                class="relative lg:h-[590px] lg:w-[603px] md:hidden lg:block"
              >
                <div
                  class="from-accent-400/20 via-accent-400/0 absolute top-20 right-0 h-[520px] w-[416px] rounded-full bg-gradient-to-t dark:from-accent-600/10 dark:via-accent-600/0 dark:bg-slate-400"
                >
                  <div
                    class="absolute right-0 bottom-0 overflow-hidden hidden lg:block md:hidden"
                  >
                    <div style="opacity: 1s">
                      <img
                        format="webp"
                        width="416"
                        height="520"
                        alt="me"
                        src="/images/me.webp"
                        class="hidden lg:block lg:w-[416px] lg:h-[520px] dark:brightness-[.82] rounded-full"
                        style="color: transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Journey -->
      <section class="content-wrapper pt-16">
        <div class="pb-4 md:pb-12">
          <h2
            class="text-center text-2xl font-bold text-foreground md:text-4xl lg:text-6xl"
          >
            {{ $t('journey') }}
          </h2>
        </div>
        <div>
          <ul class="relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-6">
              <span
                class="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"
              >
                <img
                  class="size-3.5 text-blue-800 dark:text-blue-300"
                  loading="lazy"
                  src="/svg/suitcase.svg"
                  alt="adobephotoshop"
              /></span>
              <p
                class="mb-1 flex flex-wrap items-center text-base md:text-lg font-semibold text-gray-700 dark:text-white"
                style="font-display: swap"
              >
                <span>Frontend Developer in Go2Joy</span>
                <span> (Startup, Product)</span>
                <!-- <span>• Full-time permanent</span> -->
              </p>
              <p
                class="mb-2 block text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
              >
                06/2020 - Now
              </p>
              <p class="mb-3 text-base">
                <span>Create structure project, develop and deploy</span>
                <span> features within an agile using VueJS, NuxtJS.</span>
              </p>
              <div class="mt-2 flex flex-wrap">
                <!-- TypeScript SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://www.typescriptlang.org/"
                    target="_blank"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="yypeScript"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/typescript.svg"
                        alt="typescript"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Nuxt JS SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://nuxt.com/"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/nuxtjs.svg"
                        alt="nuxtjs"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Vue.js SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://vuejs.org/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/vuejs.svg"
                        alt="vuejs"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Taiwin icon -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://tailwindcss.com/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/tailwindcss.svg"
                        alt="tailwindcss"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- JavaScript SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/javascript.svg"
                        alt="javascript"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Jira SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://www.atlassian.com/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/jira.svg"
                        alt="jira"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Quasar SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://quasar.dev/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/quasar.svg"
                        alt="quasar"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Github SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://github.com/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/github.svg"
                        alt="github"
                      /></div
                  ></NuxtLink>
                </div>
                <!--Adobe Photoshop SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://www.adobe.com/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/adobephotoshop.svg"
                        alt="Adobe Photoshop"
                      /></div
                  ></NuxtLink>
                </div>
                <!--Postman SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://www.postman.com/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/postman.svg"
                        alt="Postman"
                      /></div
                  ></NuxtLink>
                </div>
                <!--Firebase SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://firebase.google.com/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/firebase.svg"
                        alt="firebase"
                      /></div
                  ></NuxtLink>
                </div>
                <!--GIT SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://firebase.google.com/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/git.svg"
                        alt="git"
                      /></div
                  ></NuxtLink>
                </div>
              </div>
            </li>
            <li class="mb-10 ms-6">
              <span
                class="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"
                ><img
                  class="size-3.5 text-blue-800 dark:text-blue-300"
                  loading="lazy"
                  src="/svg/suitcase.svg"
                  alt="adobephotoshop"
              /></span>
              <p
                class="mb-1 flex flex-wrap items-center text-base md:text-lg font-semibold text-gray-700 dark:text-white"
                style="font-display: swap"
              >
                <span>Frontend Developer in VINAAS</span>
                <span>(Product, Outsource, Freelancer)</span>
                <!-- <span>• Full-time permanent</span> -->
              </p>
              <p
                class="mb-2 block text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
              >
                06/2017 - 06/2020
              </p>
              <p class="mb-3 text-sm">
                Development web app, landingpage, websites, tool...
              </p>
              <div class="mt-2 flex flex-wrap">
                <!-- JavaScript SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/javascript.svg"
                        alt="javascript"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Vue.js SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://vuejs.org/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/vuejs.svg"
                        alt="vuejs"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- HTML5 SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://www.w3schools.com/html/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/html5.svg"
                        alt="html5"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Slack SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://slack.com/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/slack.svg"
                        alt="slack"
                      /></div
                  ></NuxtLink>
                </div>

                <!-- Gitlab icon -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://about.gitlab.com/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/gitlab.svg"
                        alt="gitlab"
                      /></div
                  ></NuxtLink>
                </div>

                <!-- CSS3 SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://www.w3schools.com/css/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/css3.svg"
                        alt="css3"
                      /></div
                  ></NuxtLink>
                </div>
                <!-- Git SVG -->
                <div class="mr-2 mb-2 size-max transition-all hover:scale-105">
                  <NuxtLink
                    aria-label="blog-cua-toi"
                    aria-current="page"
                    tag="a"
                    class="text-black dark:text-white m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 shadow-md"
                    to="https://git-scm.com/"
                    alt="Lê Vĩnh Tuyến - Blog's của tôi"
                    name="Lê Vĩnh Tuyến - Blog's của tôi"
                    target="_blank"
                    ><div
                      class="rounded-lg border text-card-foreground shadow-sm bg-white p-2 dark:bg-gray-500"
                    >
                      <img
                        loading="lazy"
                        class="size-8 object-contain"
                        src="/svg/git.svg"
                        alt="git"
                      /></div
                  ></NuxtLink>
                </div>
              </div>
            </li>
            <li class="mb-10 ms-6">
              <span
                class="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"
                ><img
                  class="size-3.5 text-blue-800 dark:text-blue-300"
                  loading="lazy"
                  src="/svg/graduation.svg"
                  alt="adobephotoshop"
              /></span>
              <p
                class="mb-1 flex items-center text-base md:text-lg font-semibold text-gray-700 dark:text-white"
              >
                University of Science - VNUHCM - Hồ Chí Minh
              </p>
              <p
                class="mb-2 block text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
              >
                09/2014 - 05/2017
              </p>
              <p class="mb-3 text-sm">Learn, learn, and learn ...</p>
            </li>
          </ul>
        </div>
      </section>
      <!-- Projects -->

      <section class="text-gray-600 body-font">
        <div class="pb-4 md:pb-12">
          <h2
            class="text-center text-2xl font-bold text-foreground md:text-4xl lg:text-6xl dark:text-slate-300"
          >
            {{ $t('projects') }}
          </h2>
        </div>
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div
                class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
              >
                <img
                  width="372"
                  height="211"
                  loading="lazy"
                  class="lg:h-48 cursor-pointer md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="/images/project-1.webp"
                  alt="blog"
                  @click="redirectUrl('https://downtik.app', true)"
                />
                <div class="p-6">
                  <h2
                    class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  >
                    Web Tool
                  </h2>
                  <h1
                    class="title-font text-lg font-medium text-gray-600 mb-3 line-clamp-1"
                  >
                    Tiktok Video Download
                  </h1>
                  <p class="leading-relaxed mb-3 line-clamp-3">
                    MusicallyDown, a widely-used online tool, enables you to
                    easily download TikTok videos without any watermarks.
                    Recognized as one of the top TikTok video downloaders, it
                    allows you to save your favorite videos in high-quality MP4
                    format with HD resolution, ensuring a premium viewing
                    experience.
                  </p>
                  <div class="flex items-center flex-wrap">
                    <button
                      class="bg-gradient-to-r from-cyan-400 text-white to-blue-400 hover:scale-105 drop-shadow-md shadow-cla-blue px-4 py-1 rounded-lg"
                      @click="redirectUrl('https://downtik.app', true)"
                    >
                      learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50 overflow-hidden"
              >
                <img
                  loading="lazy"
                  width="372"
                  height="211"
                  class="lg:h-48 cursor-pointer md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="/images/project-2.webp"
                  alt="blog"
                  @click="redirectUrl('https://go2joy.vn', true)"
                />
                <div class="p-6">
                  <h2
                    class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  >
                    Website
                  </h2>
                  <h1
                    class="title-font text-lg font-medium text-gray-600 mb-3 line-clamp-1"
                  >
                    Go2Joy - Hourly booking platform
                  </h1>
                  <p class="leading-relaxed mb-3 line-clamp-3">
                    Flexible and simple hotel booking with Go2Joy. More than
                    10,000 good-priced hotels are waiting for you to discover.
                  </p>
                  <div class="flex items-center flex-wrap">
                    <button
                      class="bg-gradient-to-r from-orange-300 to-amber-400 text-white hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg"
                      @click="redirectUrl('https://go2joy.vn', true)"
                    >
                      learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden"
              >
                <img
                  loading="lazy"
                  width="372"
                  height="211"
                  class="lg:h-48 cursor-pointer md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="/images/project-3.webp"
                  alt="blog"
                  @click="redirectUrl('/project/my-portfolio-and-blog', false)"
                />
                <div class="p-6">
                  <h2
                    class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  >
                    Website
                  </h2>
                  <h1
                    class="title-font text-lg font-medium text-gray-600 mb-3 line-clamp-1"
                  >
                    My portfolio and blog
                  </h1>
                  <p class="leading-relaxed mb-3 line-clamp-3">
                    Lê Vĩnh Tuyến - Blog's của tôi - Để chút thương gửi vào
                    trong gió, để chút buồn gửi vào trong tim...
                  </p>
                  <div class="flex items-center flex-wrap">
                    <button
                      class="bg-gradient-to-r from-fuchsia-300 to-pink-400 text-white hover:scale-105 shadow-cla-blue px-4 py-1 rounded-lg"
                      @click="
                        redirectUrl('/project/my-portfolio-and-blog', false)
                      "
                    >
                      learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
