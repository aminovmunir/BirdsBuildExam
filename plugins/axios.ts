import axios from "axios";
let api = axios.create({
  baseURL: 'http://t92976v4.beget.tech/'
});

export const $axios = api;

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api: api,
    },
  };
});