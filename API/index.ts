import axios from "axios";


export const SERVER_URL = "http://localhost:7777"


const $instance = axios.create({
    withCredentials: true,
    baseURL: SERVER_URL
})



export { $instance }