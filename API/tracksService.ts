import { $instance } from ".";
import { ITrack } from "../types/DBmodels";
import { IFetchTracksResponse } from "../types/tracks";




export class TracksService {

    static async fetchTracks(): Promise<IFetchTracksResponse> {
        const { data } = await $instance.get('/tracks', { params: { limit: 10, page: 1 } })
        console.log(777);
        return data
    }


}