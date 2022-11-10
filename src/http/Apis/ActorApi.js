import myAxios from "@/http/MyAxios";
import BaseUrl from "@/http/BaseUrl";

const actorApi = {
    del(params) {
        return myAxios.post(BaseUrl + '/movie-actor/del', params)
    },
    add(params) {
        return myAxios.post(BaseUrl + '/movie-actor/add', params)
    },
    list(params) {
        return myAxios.get(BaseUrl + '/movie-actors', params)
    }
}

export default actorApi;