import EN from './lang/en.json'
import VI from './lang/vn.json'
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'vi',
  messages: {
    en: EN,
    vi: VI,
    in: {
      langauge: 'Language',
      myStory: 'My story',
    },
    fr: {
      langauge: 'Language',
      myStory: 'My story',
    },
  },
}))
