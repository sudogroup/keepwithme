<template>
  <div class="container mx-auto text-white">
    <Card title="Last 3 places" :data="checkins" />
    <section id="health">
      2
    </section>
    <section id="bio">
      3
    </section>
  </div>
</template>

<script>
export default {
    data() {
      return {
        checkins: null
      }
    },
    async mounted() {
      this.checkins = await this.$sleepyApi.getCheckins()
    }
}
</script>

<style>

</style>