<template>
    <div class="main">
      <section>
            <h2>{{ film.original_title }} ({{ film.release_date.split("-")[0] }})</h2>
            <div class="movie-details">
                <img :src="getUrl" :alt="getAltText" />
                <div class="movie-details">
                    <ul>
                        <li>"{{ film.tagline }}"</li>
                        <li>Release Date - {{ film.release_date }} </li>
                        <li>Runtime - {{ getRuntime }}</li>
                        <li>Genres - {{ getGenres }}</li>
                        <li>Languages ({{ film.original_language }}) - {{ getLanguages }}</li>
                        <li>Production Company - {{ getCompanies }}</li>
                        <li><a :href="getLink"><span class="exception">{{ getLink }}</span></a></li>
                        <li id="description">Synopsis:<br/><br/>{{ film.overview }}</li>
                    </ul>
                </div>
            </div>
        </section>
        <div id="suggested">
            <section class="list">
            <h3>Recommended Films:</h3>
            <MovieList :movies="recommended"/>
        </section>
        <section class="list">
            <h3>Similar Films:</h3>
            <MovieList :movies="similar"/>
        </section>
        </div>
    </div>
</template>

<script>
import MediaService from '@/services/MediaService.js'
import MovieList from '@/components/MovieList.vue'

 export default {
    props: ["id"],
    components: {
                MovieList
            },
    data () {
        return {
            film: {
                original_title: "",
                release_date: "",
                tagline: "",
                overview: "",
                poster_path: "",
                original_language: "",
                runtime: 0,
                genres: [],
                spoken_languages: [],
                production_companies: [],
                homepage: []
            },
            recommended: [
                {
                    id: 0,
                    original_language: "",
                    original_title: "",
                    overview: "",
                    poster_path: "",
                    release_date: "",
                    title: "",
                },
            ],
            similar: [
                {
                    id: 0,
                    original_language: "",
                    original_title: "",
                    overview: "",
                    poster_path: "",
                    release_date: "",
                    title: "",
                }   
            ]
        }
    },
    computed: {
        getUrl() {
            return `https://image.tmdb.org/t/p/original/${this.film.poster_path}`
        },
        getRuntime() {
            let hours = Math.floor(this.film.runtime/60)
            let minutes = this.film.runtime % 60
            return `${hours}h ${minutes}min`
        },
        getGenres() {
            let genres = []
            this.film.genres.forEach(genre => {
                genres.push(genre.name)
            })
            return genres.join(", ")
        },
        getLanguages() {
            let languages = []
            this.film.spoken_languages.forEach(language => {
                languages.push(language.english_name)
            })
            return languages.join(", ")
        },
        getCompanies() {
            let companies = []
            this.film.production_companies.forEach(studio => {
                companies.push(studio.name)
            })
            return companies.join(", ")
        },
        getLink() {
            if (!this.film.homepage || this.film.homepage === "") {
                return ""
            }
            return this.film.homepage
        },
        getAltText() {
            return this.film.title + " movie poster"
        }
    },
    async created () {
        this.film = await MediaService.getDetails(this.id)
        this.recommended = await MediaService.getRecommended(this.id)
        this.similar = await MediaService.getSimilar(this.id)
    }
 }
</script>

<style scoped>
ul li a {
    text-decoration: none;
    display: inline-block;
    color: #000000;
}

img {
    max-height: 35rem;
    margin-top: 1rem;
}

li {
        padding: 0.25rem;
}

.exception {
    color: #0000ff
}

.movie-details {
    display: flex;
    align-items: flex-end;
}

.movie-details ul li {
    text-decoration: none;
}

.list {
    width: 50%;
    margin-top: 3rem;
}

#suggested {
    display: flex;
}

#description {
    margin-top: 2rem;
}
</style>