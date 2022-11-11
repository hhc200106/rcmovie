import myAxios from "@/http/MyAxios";
import BaseUrl from "@/http/BaseUrl";

const directorApi = {
    delete(params) {
        return myAxios.post(BaseUrl + '/movie-director/del', params)
    },
    add(params) {
        return myAxios.post(BaseUrl + '/movie-director/add', params)
    },
    list(params) {
        return myAxios.get(BaseUrl + '/movie-directors', params)
    },
    listByName(params) {
        return myAxios.post(BaseUrl + '/movie-directors/name', params)
    }
}

export default directorApi;