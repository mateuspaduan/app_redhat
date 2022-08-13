import { writable } from 'svelte/store';

export const isDev = writable(process.env.NODE_ENV === 'development');

export const user = writable({
    name: "Tiago Vilas Boas",
    password: "11972393003",
  })