<template>
    <div class="main">
      <section>
            <h2>{{ film.original_title }} ({{ film.release_date.split("-")[0] }})</h2>
            <div class="movie-details">
                <img :src="getUrl" alt="movie-poster">
                <div class="movie-details">
                    <ul>
                        <li>"{{ film.tagline }}"</li>
                        <li>Release Date - {{ film.release_date }}</li>
                        <li>Runtime - {{ getRuntime }}</li>
                        <li>Genres - {{ getGenres }}</li>
                        <li>Languages - {{ getLanguages }}</li>
                        <li>Production Company - {{ getCompanies }}</li>
                        <li><a :href="getLink"><span class="exception">{{ getLink }}</span></a></li>
                        <li id="description">Synopsis:<br/><br/>{{ film.overview }}</li>
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
            film: {
                "adult": false,
                "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
                "belongs_to_collection": {
                "id": 529892,
                "name": "Black Panther Collection",
                "poster_path": "/qT1JPO6IltC2B39QAriAg7SelMx.jpg",
                "backdrop_path": "/yzVxUMYGKjK3GgmVI2BhmbuL9UY.jpg"
                },
                "budget": 250000000,
                "genres": [
                {
                "id": 28,
                "name": "Action"
                },
                {
                "id": 12,
                "name": "Adventure"
                },
                {
                "id": 878,
                "name": "Science Fiction"
                }
                ],
                "homepage": "https://wakandaforevertickets.com",
                "id": 505642,
                "imdb_id": "tt9114286",
                "original_language": "en",
                "original_title": "Black Panther: Wakanda Forever",
                "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
                "popularity": 1246.715,
                "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
                "production_companies": [
                {
                "id": 420,
                "logo_path": "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
                "name": "Marvel Studios",
                "origin_country": "US"
                }
                ],
                "production_countries": [
                {
                "iso_3166_1": "US",
                "name": "United States of America"
                }
                ],
                "release_date": "2022-11-09",
                "revenue": 859102154,
                "runtime": 162,
                "spoken_languages": [
                {
                "english_name": "English",
                "iso_639_1": "en",
                "name": "English"
                },
                {
                "english_name": "French",
                "iso_639_1": "fr",
                "name": "Français"
                },
                {
                "english_name": "Haitian; Haitian Creole",
                "iso_639_1": "ht",
                "name": ""
                },
                {
                "english_name": "Spanish",
                "iso_639_1": "es",
                "name": "Español"
                },
                {
                "english_name": "Xhosa",
                "iso_639_1": "xh",
                "name": ""
                }
                ],
                "status": "Released",
                "tagline": "Forever.",
                "title": "Black Panther: Wakanda Forever",
                "video": false,
                "vote_average": 7.294,
                "vote_count": 4478
                },
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
        }
    },
    created () {

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

#description {
    margin-top: 2rem;
}
</style>