import keepwithmeAPI from '~/helpers/api'
export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const api = keepwithmeAPI(ctx.$axios)
  inject('api', api())
}