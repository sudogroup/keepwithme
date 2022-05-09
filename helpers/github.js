export default ($axios) => () => ({
  async getGithub(username) {
    const URL = `https://api.github.com/users/${username}`;

    const profile = await $axios.$get(URL);

    const repositories = await $axios.$get(profile.repos_url);

    return {
      profile,
      repositories,
    };
  },
});
