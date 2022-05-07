export default $axios => () => ({
    async getGithub() {
         const USERNAME = "alonemazin"
         const URL = `https://api.github.com/users/${USERNAME}`
         const githubResponse = await $axios.$get(URL)
         const avatar = githubResponse.avatar_url
         const repos = githubResponse.public_repos
         return {
             avatar: avatar,
             repos: repos
         }
     }
 })