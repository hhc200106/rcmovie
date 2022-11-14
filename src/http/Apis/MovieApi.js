import myAxios from "@/http/MyAxios";
import BaseUrl from "@/http/BaseUrl";

const movieApi = {
    add(params) {
        return myAxios.post(BaseUrl + '/movie-info/add', params)
    },
    listAllMovieTypes() {
        return myAxios.get(BaseUrl + '/movie-types')
    },
    list(params) {
        return myAxios.get(BaseUrl + '/movie-infos', params)
    }
}
export default movieApi