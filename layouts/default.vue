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
      <div class="pic flex-col items-left ml-10 mb-5 text-white">
        <div class="flex">
          <img :src="this.$store.state.avatar" class="rounded-full">
        </div>
        <div class="flex">
          <h1 class="text-2xl font-bold">Sleepy</h1>
          <!-- TODO: Find a better position to put the verified icon -->
          <svg v-if="true" class="self-end ml-2 mb-0.5" width="20px" height="20px" fill="#1DA1F2" viewBox="0 0 536.541 536.541" style="enable-background:new 0 0 536.541 536.541;" xml:space="preserve"><g><g><path d="M496.785,152.779c-3.305-25.085-16.549-51.934-38.826-74.205c-22.264-22.265-49.107-35.508-74.186-38.813c-11.348-1.499-26.5-7.766-35.582-14.737C328.111,9.626,299.764,0,268.27,0s-59.841,9.626-79.921,25.024c-9.082,6.965-24.235,13.238-35.582,14.737c-25.08,3.305-51.922,16.549-74.187,38.813c-22.277,22.271-35.521,49.119-38.825,74.205c-1.493,11.347-7.766,26.494-14.731,35.57C9.621,208.422,0,236.776,0,268.27s9.621,59.847,25.024,79.921c6.971,9.082,13.238,24.223,14.731,35.568c3.305,25.086,16.548,51.936,38.825,74.205c22.265,22.266,49.107,35.51,74.187,38.814c11.347,1.498,26.5,7.771,35.582,14.736c20.073,15.398,48.421,25.025,79.921,25.025s59.841-9.627,79.921-25.025c9.082-6.965,24.234-13.238,35.582-14.736c25.078-3.305,51.922-16.549,74.186-38.814c22.277-22.27,35.521-49.119,38.826-74.205c1.492-11.346,7.766-26.492,14.73-35.568c15.404-20.074,25.025-48.422,25.025-79.921c0-31.494-9.621-59.848-25.025-79.921C504.545,179.273,498.277,164.126,496.785,152.779z M439.256,180.43L246.477,373.209l-30.845,30.846c-8.519,8.52-22.326,8.52-30.845,0l-30.845-30.846l-56.665-56.658c-8.519-8.52-8.519-22.326,0-30.846l30.845-30.844c8.519-8.519,22.326-8.519,30.845,0l41.237,41.236L377.561,118.74c8.52-8.519,22.326-8.519,30.846,0l30.844,30.845C447.775,158.104,447.775,171.917,439.256,180.43z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
        </div>
        <h1 class="text-md w-auto lg:w-96">Mazen, lazy and sleepy person
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
