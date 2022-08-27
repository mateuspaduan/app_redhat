import { writable } from 'svelte/store';

export const isDev = writable(process.env.NODE_ENV === 'development');

export const user = writable({
    username: "lucas",
    password: "lucas",
    authenticated: true,
  })

  export const chat = writable({
    messages: [{username:"lucas", text:"hello"}, {username:"mateus", text:"heeey"}],
    currentMessage: ""
  })