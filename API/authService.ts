import { $instance } from ".";


export class AuthService {

    static async register(email: string, password: string) {

    }


    static async login(email: string, password: string) {
        const { data } = await $instance.post("/auth/login", { email, password })
        return data
    }

}