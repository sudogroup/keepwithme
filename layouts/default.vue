<template>
  <div>
    <header class="center w-full ">
      <div id="map-wrap" class="relative">
        <client-only>
          <l-map :zoom=15 :options="{zoomControl: false, attributionControl: false, }" zoomControl="false" :center="[26.3779, 43.97725]">
            <l-tile-layer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"></l-tile-layer>
          </l-map>
        </client-only>
      </div>
      <div class="pic flex flex-col items-center mb-5 text-white">
        <img :src="this.$store.state.avatar" class="rounded-full">
        <h1 class="text-2xl font-bold">Sleepy</h1>
        <h1 class="text-md w-96 text-center ">Mazen, lazy and sleepy person
I upload some projects from time to time here</h1>
      </div>
    </header>

    <Nuxt />

    <footer class="text-white text-center lg:text-left lg:flex items-center justify-center pr-20 pl-20 mt-20">
      <div id="brand" class="">
        <h2 class="text-2xl font-bold">Keep With Me</h2>
        <p class="text-sm text-gray-500 font-bold lg:w-96">Keep smile (:</p>
      </div>
      <div class="m-auto"></div>
      <div id="links" class="lg:flex">
        <div id="ContactUS" class="lg:p-10">
          <h2 class="font-bold text-lg">Get Involved</h2>
          <ul>
            <li class="text-gray-500 font-bold text-sm"><a href="#">Report a bug</a></li>
            <li class="text-gray-500 font-bold text-sm"><a href="#">Get verified</a></li>
          </ul>
        </div>
        <div id="ContactUS" class="lg:p-10">
          <h2 class="font-bold text-lg">Contact US</h2>
          <ul>
            <li class="text-gray-500 font-bold text-sm"><a href="#">Twitter</a></li>
            <li class="text-gray-500 font-bold text-sm"><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
