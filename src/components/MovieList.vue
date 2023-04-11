<template>
    <ul>
        
        <router-link v-for="(movie, index) in movies" :key="index" to="/movie-details">
            <li>{{ movie.title }} ({{ movie.release_date.split("-")[0] }})</li>
        </router-link>
    </ul>
</template>

<script>
    export default {
        props: {
            movies: Array
        }
    }
</script>

<style scoped>
    li {
        padding: 0.5rem;
    }
</style>