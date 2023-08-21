import plugin from 'vue-yandex-maps';
import { defineNuxtPlugin } from 'nuxt/app';

const settings = {
  apiKey: 'ce3554cd-9a74-4c04-9990-a2b2daeb5a69', // Индивидуальный ключ API
  lang: 'ru_RU', // Используемый язык
  coordorder: 'latlong', // Порядок задания географических координат
  debug: false, // Режим отладки
  version: '2.1', // Версия Я.Карт
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(plugin, settings);
});
