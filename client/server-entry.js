import {app, router, store} from './app.js'
export default context => {

  // get the initialState of vue-router
  router.push(context.url)

  // Prefetch
  return Promise.all(router.getMatchedComponents().map(component => {
    if (component.prefetch) {
      return component.prefetch(store)
    }
  })).then(() => {
    context.initialState = store.state
    return app
  })
}
