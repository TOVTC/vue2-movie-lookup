<template>
    <section class="main">
        <h2>Trending:</h2>
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
    created () {
        MediaService.getMovies()
    }
}
</script>