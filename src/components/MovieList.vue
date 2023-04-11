<template>
    <ul v-if="movies.length">
        <router-link v-for="(movie, index) in movies" :key="index" :to="{ name: 'movie-details', params: { id: movie.id }}">
            <li>{{ movie.title }} ({{ movie.release_date.split("-")[0] }})</li>
        </router-link>
    </ul>
    <ul v-else>
        <li>No movies of this category to display at this time</li>
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
    img {
        max-height: 1rem;
    }
    
    li {
        padding: 0.5rem;
    }
</style>