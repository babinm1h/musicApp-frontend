import axios from "axios";
import Cookies from "js-cookie"


export const SERVER_URL = "http://localhost:7777"


const $instance = axios.create({
    withCredentials: true,
    baseURL: SERVER_URL
})




const $authInstance = axios.create({
    withCredentials: true,
    baseURL: SERVER_URL
})

$authInstance.interceptors.request.use((config) => {
    const accessToken = Cookies.get("musicAccess")
    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})



export { $instance, $authInstance }