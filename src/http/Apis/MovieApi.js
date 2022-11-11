import myAxios from "@/http/MyAxios";
import BaseUrl from "@/http/BaseUrl";

const movieApi = {
    add(params) {
        return myAxios.post(BaseUrl + '/movie-info/add', params)
    }
}
export default movieApi