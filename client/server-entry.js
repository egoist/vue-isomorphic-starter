import {app, router, store} from './app.js'
export default context => {

  // get the initialState of vue-router
  router.push(context.url)

  // Prefetch
  return Promise.all(router.getMatchedComponents().map(component => {
    if (component.preFetch) {
      return component.preFetch(store)
    }
  })).then(() => {
    context.initialState = store.state
    return app
  })
}
