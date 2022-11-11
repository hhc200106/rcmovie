import myAxios from "@/http/MyAxios";
import BaseUrl from "@/http/BaseUrl";

const actorApi = {
    delete(params) {
        return myAxios.post(BaseUrl + '/movie-actor/del', params)
    },
    add(params) {
        return myAxios.post(BaseUrl + '/movie-actor/add', params)
    },
    list(params) {
        return myAxios.get(BaseUrl + '/movie-actors', params)
    },
    listByName(params) {
        return myAxios.post(BaseUrl + '/movie-actors/name', params)
    }
}

export default actorApi;