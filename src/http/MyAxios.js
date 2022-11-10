import axios from "axios";
import qs from 'qs'

const instance = axios.create()
const myAxios = {
    get(url, params) {
        return instance({
            method: 'get',
            url: url,
            params: params
        })
    },
    post(url, params) {
        return instance({
            method: 'post',
            url: url,
            data: qs.stringify(params)
        })
    }
}
export default myAxios