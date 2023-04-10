<template>
    <section class="main">
        <h2>Popular:</h2>
        <ul>
            <li>
                <router-link to="/movie-details"><span class="title">Movie Title (2023)</span> - PG</router-link>
            </li>
            <li>
                <router-link to="/movie-details"><span class="title">Movie Title (2023)</span> - PG</router-link>
            </li>
            <li>
                <router-link to="/movie-details"><span class="title">Movie Title (2023)</span> - PG</router-link>
            </li>
            <li>
                <router-link to="/movie-details"><span class="title">Movie Title (2023)</span> - PG</router-link>
            </li>
            <li>
                <router-link to="/movie-details"><span class="title">Movie Title (2023)</span> - PG</router-link>
            </li>
        </ul>
    </section>
</template>

<script>
import MediaService from '@/services/MediaService.js'
export default {
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
    // created () {
    //     MediaService.getPopular()
    // }
}
</script>