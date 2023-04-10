<template>
  <section id="homepage">
    <form id="search-form">
        <label for="movie-name">Enter a movie name:</label><br/>
        <input type="text" id="search" name="movie-name">
        <button><a href="./results.html">Search</a></button>
    </form>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
