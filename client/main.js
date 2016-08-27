import { app, store } from './app.js'

// get the initialstate from server-rendering.
store.replaceState(window.__INITIAL_STATE__)

app.$mount('#app')
