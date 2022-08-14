import { writable } from 'svelte/store';

export const isDev = writable(process.env.NODE_ENV === 'development');

export const user = writable({
    username: "lucas",
    password: "",
    authenticated: false
  })