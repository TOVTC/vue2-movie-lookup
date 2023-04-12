import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async getResults(name) {
        let response = await apiClient.get(`/3/search/movie?api_key=${secrets.VUE_APP_TMDB_KEY}&language=en-US&query=${name}&page=1&include_adult=false`)
        return response.data.results
    },
    async getDetails(id) {
        let response = await apiClient.get(`/3/movie/${id}?api_key=${secrets.VUE_APP_TMDB_KEY}`)
        return response.data
    },
    async getTrending() {
        let response = await apiClient.get(`/3/trending/movie/day?api_key=${secrets.VUE_APP_TMDB_KEY}&language=en-US&page=1`)
        return response.data.results
    },
    async getPopular() {
        let response = await apiClient.get(`/3/movie/popular?api_key=${secrets.VUE_APP_TMDB_KEY}&language=en-US&page=1`)
        return response.data.results
    },
    async getTopRated() {
        let response = await apiClient.get(`/3/movie/top_rated?api_key=${secrets.VUE_APP_TMDB_KEY}&language=en-US&page=1`)
        return response.data.results
    },
    async getNowPlaying() {
        let response = await apiClient.get(`/3/movie/now_playing?api_key=${secrets.VUE_APP_TMDB_KEY}&language=en-US&page=1`)
        return response.data.results
    },
    async getRecommended(id) {
        let response = await apiClient.get(`/3/movie/${id}/recommendations?api_key=${secrets.VUE_APP_TMDB_KEY}&language=en-US&page=1`)
        return response.data.results
    },
    async getSimilar(id) {
        let response = await apiClient.get(`/3/movie/${id}/similar?api_key=${secrets.VUE_APP_TMDB_KEY}&language=en-US&page=1`)
        return response.data.results
    }
}