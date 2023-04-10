<template>
  <section id="homepage" class="main">
    <form id="search-form">
        <label for="movie-name">Enter a movie name:</label><br/>
        <input type="text" id="search" name="movie-name">
        <router-link to="/results"><button>Search</button></router-link>
    </form>
  </section>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
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