<template>
  <section>
      <h2 class="text-gray-900 ">{{title}}</h2>
      <div class="content text-black">
         <div class="flex-column">
             <div v-for="data in data" :key="data">
                 <p>{{data.id}}</p>
             </div>
         </div>
      </div>
  </section>
</template>

<script>
export default {
    props: ['title', 'data']
}
</script>

<style>

</style>