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
    async getMovies() {
        let response = await apiClient.get(`/3/trending/movie/day?api_key=${TMDB_KEY.TMDB_KEY}`)
        console.log(response.data)
    }
}