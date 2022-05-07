import foursquareAPI from '~/helpers/foursquare'
import githubAPI from '~/helpers/github'
export default (ctx, inject) => {
  // inject the repository in the context (ctx.app.$repository)
  // And in the Vue instances (this.$repository in your components)
  const foursquareAxios = foursquareAPI(ctx.$axios)
  const githubAxios = githubAPI(ctx.$axios)
  inject('sleepyApi', foursquareAxios())
  inject('githubApi', githubAxios())
}