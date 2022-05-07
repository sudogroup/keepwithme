<template>
  <div>
    <header class="center w-full ">
      <div id="map-wrap" class="relative" style="height: 20vh; z-index:-1">
        <client-only>
          <l-map :zoom=15 :options="{zoomControl: false, attributionControl: false, }" zoomControl="false" :center="[26.3779, 43.97725]">
            <l-tile-layer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"></l-tile-layer>
          </l-map>
        </client-only>
      </div>
      <div class="pic flex justify-center mb-5" style="margin-top: -100px;z-index: 1">
        <img src="https://avatars.githubusercontent.com/u/9112378?v=4" style="height:200px" class="rounded-full">
      </div>
    </header>

    <Nuxt />

    <footer class="">

    </footer>
  </div>
</template>

<script>
export default {
  mounted() {

  }
}
</script>