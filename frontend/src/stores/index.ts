import { writable } from 'svelte/store';

export const isDev = writable(process.env.NODE_ENV === 'development');

export const user = writable({
    username: "Tiago Vilas Boas",
    password: "11972393003",
    authenticated: false
  })