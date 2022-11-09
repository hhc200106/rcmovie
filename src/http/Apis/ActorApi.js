import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000"
const actorApi = {
    list(page, pagesize) {
        let instance = axios.create()
        return instance({
            method: 'get',
            url: '/movie-actors',
            params: {page, pagesize}
        })
        return axios.get(`/movie-actors?page=${page}&pagesize= ${pagesize}`)
    }
}

export default actorApi;