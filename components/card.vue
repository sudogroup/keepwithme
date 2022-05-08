<template>
  <section>
      <div class="cardHead bg-gray-900">
          <h2 class="text-xl font-bold">{{title}}</h2>
      </div>
      <div class="cardContent">
         <div v-if="data" class="flex-column">
             <div v-for="(data, key) in data" :key="key">
                 <!-- TODO: changing "Last 3 places" design  -->
                 <p>{{key + 1}} - {{data.venue.name}}</p>
             </div>
         </div>
         <div v-else>
             <slot />
         </div>
      </div>
  </section>
</template>

<script>
export default {
    props: ['title', 'data']
}
</script>