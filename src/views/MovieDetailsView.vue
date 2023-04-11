<template>
    <div class="main">
      <section>
            <h2>Movie Title (2023):</h2>
            <div class="movie-details">
                <img src="https://placekitten.com/400/500" alt="movie-poster">
                <div class="movie-details">
                    <ul>
                        <li>"Tagline"</li>
                        <li>Release Date - 2023/04/05</li>
                        <li>Rating - PG</li>
                        <li>Runtime - 1hr 45min</li>
                        <li>Genres - Slice of Life</li>
                        <li>Language - English</li>
                        <li>Production Company - Company</li>
                        <li>Main Cast - Lorem ipsum dolor sit amet</li>
                        <li>Description:<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum porta enim eget imperdiet. Suspendisse at sapien rhoncus felis varius congue eget vitae justo. Aenean sit amet ex dolor. Praesent efficitur, eros maximus laoreet rutrum, nisi enim consectetur tellus, vitae gravida sem odio sed felis. Suspendisse non velit at nulla volutpat condimentum vel a arcu. Maecenas odio nisl, egestas imperdiet mauris sit amet, mollis sagittis justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas cursus blandit tellus, in condimentum ipsum ultricies eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi consequat scelerisque leo, sit amet accumsan ante varius eget. Nam laoreet interdum libero a tincidunt.</li>
                    </ul>
                </div>
            </div>
        </section>
        <section>
            <h3>Similar Films:</h3>
            <MovieList :movies="movies"/>
        </section>
    </div>
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
    },
    created () {

    }
 }
</script>

<style scoped>
/* detail page */
.movie-details {
    display: flex;
    align-items: flex-end;
}

.movie-details ul li {
    text-decoration: none;
}

ul li a {
    text-decoration: none;
    display: inline-block;
    color: #000000;
}
</style>