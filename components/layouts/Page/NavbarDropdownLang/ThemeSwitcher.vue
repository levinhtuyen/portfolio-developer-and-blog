<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})
const currentStyle = toRef(props, 'type') as any
const { locale, setLocale } = useI18n() as any
const availableThemes = reactive([
  {
    key: 'vi',
    text: 'VN',
  },
  {
    key: 'en',
    text: 'EN',
  },
]) as any
</script>

<template>
  <div class="flex items-center">
    <HeadlessListbox
      v-model="locale"
      as="div"
      class="relative flex items-center"
    >
      <HeadlessListboxLabel class="sr-only">Theme</HeadlessListboxLabel>
      <HeadlessListboxButton type="template">
        <AwesomeLink class="dark:text-gray-400 text-gray-600">
          <span v-if="locale === 'vi'" class="flex justify-center items-center">
            <img width="25" height="25" src="/lang/vn.png" alt="lang-vi" />
          </span>
          <span v-if="locale === 'en'" class="justify-center items-center flex">
            <img width="25" height="25" src="/lang/us.png" alt="lang-us" />
          </span>
        </AwesomeLink>
      </HeadlessListboxButton>
      <HeadlessListboxOptions
        class="p-1 absolute z-50 mt-4 origin-top-right top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
      >
        <HeadlessListboxOption
          v-for="lang in availableThemes"
          :key="lang.key"
          :value="lang.key"
          :class="{
            'py-2 px-2 flex items-center cursor-pointer': true,
            'text-sky-500 bg-gray-100 dark:bg-gray-600/30': locale === lang.key,
            'hover:bg-gray-50 dark:hover:bg-gray-700/30': locale !== lang.key,
          }"
        >
          <span class="text-sm mr-2 flex items-center">
            <img
              v-if="lang.key === 'vi'"
              width="35"
              height="35"
              src="/lang/vn.png"
              alt="lang-vi"
            />
            <img
              v-else-if="lang.key === 'en'"
              width="35"
              height="35"
              src="/lang/us.png"
              alt="lang-us"
            />
          </span>
          {{ lang.text }}
        </HeadlessListboxOption>
      </HeadlessListboxOptions>
    </HeadlessListbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model="locale"
      class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"
    >
      <option
        v-for="lang in availableThemes"
        :key="lang.key"
        :value="lang.key"
        @click="setLocale(lang.key)"
      >
        {{ lang.text }}
      </option>
    </select>
  </div>
</template>
