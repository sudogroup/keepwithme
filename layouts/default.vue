<template>
  <div>
    <header class="center w-full ">
      <div id="map-wrap" class="relative" style="height: 20vh; z-index:-1">
        <client-only>
          <l-map :zoom=13 :center="[55.9464418,8.1277591]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="[55.9464418,8.1277591]"></l-marker>
          </l-map>
        </client-only>
      </div>
      <div class="pic flex justify-center" style="margin-top: -100px;z-index: 1">
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