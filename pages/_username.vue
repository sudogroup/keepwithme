<template>
  <div
    class="container mx-auto text-white flex flex-col justify-center items-center gap-4"
  >
    <Container>
      <Label>hello</Label>
      <Widget> hello, world </Widget>
    </Container>

    <Container>
      <Label>last visited places</Label>
      <Widget>
        <ul class="flex flex-col gap-2">
          <li v-for="place in checkins">
            <span>{{ place.venue.name }}</span>
          </li>
        </ul>
      </Widget>
    </Container>

    <Container>
      <Label>github repositories</Label>
      <Widget>
        <ul class="flex flex-col gap-3">
          <li v-for="repository in github.repositories">
            <a :href="repository.html_url" target="_blank"
              ><span>{{ repository.name }}</span></a
            >
          </li>
        </ul>
      </Widget>
    </Container>
  </div>
</template>

<script>
import card from "../components/card.vue";
import Widget from "../components/Widget/index.vue";
import Container from "~/components/Widget/Container.vue";
import Label from "~/components/Widget/Label.vue";
export default {
  components: { card, Widget, Container, Label },
  data() {
    return {
      checkins: null,
      github: {},
    };
  },
  async mounted() {
    this.checkins = await this.$sleepyApi.getCheckins();
    this.github = await this.$githubApi.getGithub("alonemazin");
    this.$store.commit("changeAvatar", this.github.profile.avatar_url);
  },
};
</script>
