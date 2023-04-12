<template>
    <section class="main">
        <h2>Now Playing:</h2>
        <MovieList :movies="movies"/>
    </section>
</template>

<script>
import MediaService from '@/services/MediaService.js'
import MovieList from '@/components/MovieList.vue'

export default {
    components: {
                MovieList
            },
    data () {
        return {
            movies: []
        }
    },
    async created () {
        try {
            this.movies = await MediaService.getNowPlaying()
        }
        catch (err) {
            alert("An error occurred")
        }
    }
}
</script>