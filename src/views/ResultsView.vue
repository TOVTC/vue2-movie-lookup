<template>
    <section class="main">
        <h2>Results for "Search":</h2>
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
            movies: [
            {
                    id: 505642,
                    original_language: "en",
                    original_title: "Black Panther: Wakanda Forever",
                    overview: "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
                    poster_path: "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
                    release_date: "2022-11-09",
                    title: "Black Panther: Wakanda Forever",
                },
            ]
        }
    }
}
</script>