<template>
  <section id="homepage" class="main">
    <form id="search-form" @submit.prevent="search">
        <label for="movie-name">Enter a movie name:</label><br/>
        <input type="text" id="search" v-model="movieName">
        <router-link :to="{ name: 'results', params: { movieName: movieName }}"><button type="submit">Search</button></router-link>
    </form>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        movieName: ""
      }
    },
  }
</script>

<style scoped>
#homepage {
    display: flex;
    justify-content: center;
}

#search-form {
    margin-top: 10rem;
}
</style>