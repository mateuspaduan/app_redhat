import { writable } from 'svelte/store';

export const isDev = writable(process.env.NODE_ENV === 'development');

export const user = writable({
    username: "",
    password: "",
    authenticated: false
  })