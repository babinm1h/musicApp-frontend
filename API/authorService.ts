import { $instance } from ".";
import { IAuthor } from "../types/DBmodels";


export class AuthorService {

    static async fetchOne(id: string):Promise<IAuthor> {
        const { data } = await $instance.get(`/author/${id}`)
        return data
    }

}