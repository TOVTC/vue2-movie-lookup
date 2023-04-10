<template>
    <ul>
        
        <router-link v-for="(movie, index) in movies" :key="index" to="/movie-details">
            <li><span class="title">{{ movie.original_title }}</span></li>
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