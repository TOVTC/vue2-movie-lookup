import axios from 'axios'
import TMDB_KEY from '../../env.js'

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async getTrending() {
        let response = await apiClient.get(`/3/trending/movie/day?api_key=${TMDB_KEY.TMDB_KEY}&language=en-US&page=1`)
        console.log(response.data.results)
    },
    async getPopular() {
        let response = await apiClient.get(`/3/movie/popular?api_key=${TMDB_KEY.TMDB_KEY}&language=en-US&page=1`)
        console.log(response.data.results)
    },
    async getTopRated() {
        let response = await apiClient.get(`/3/movie/top_rated?api_key=${TMDB_KEY.TMDB_KEY}&language=en-US&page=1`)
        console.log(response.data.results)
    },
    async getNowPlaying() {
        let response = await apiClient.get(`/3/movie/now_playing?api_key=${TMDB_KEY.TMDB_KEY}&language=en-US&page=1`)
        console.log(response.data.results)
    }
}