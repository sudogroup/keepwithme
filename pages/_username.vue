<template>
  <div class="container mx-auto text-white">


    <Card title="Last 3 places" :data="checkins" />

    <Card title="Last 3 tweeits">
      <a class="twitter-timeline" data-height="200" data-width="100%" data-dnt="true" data-theme="dark" href="https://twitter.com/alonemazin?ref_src=twsrc%5Etfw">Tweets by alonemazin</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </Card>

    <Card title="Github page">
      <p>{{github.repos}}</p>
    </Card>
  </div>
</template>

<script>
import card from '../components/card.vue';
export default {
  components: { card },
  data() {
    return {
      checkins: null,
      github: {},
    };
  },
  async mounted() {
    this.checkins = await this.$sleepyApi.getCheckins();
    this.github = await this.$githubApi.getGithub();
    this.$store.commit('changeAvatar', this.github.avatar)
  },
};
</script>