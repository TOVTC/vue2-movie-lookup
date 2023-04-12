<template>
    <section class="main">
        <h2>Results for "{{ this.movieName }}":</h2>
        <MovieList :movies="movies"/>
    </section>
</template>

<script>
import MediaService from '@/services/MediaService.js'
import MovieList from '@/components/MovieList.vue'

export default {
    props: ["movieName"],
    components: {
                MovieList
            },
    data () {
        return {
            movies: [
            {
                    id: 0,
                    original_language: "",
                    original_title: "",
                    overview: "",
                    poster_path: "",
                    release_date: "",
                    title: "",
                },
            ]
        }
    },
    async created() {
        try {
            this.movies = await MediaService.getResults(this.movieName)
        }
        catch (err) {
            alert("An error occurred")
        }
    }
}
</script>