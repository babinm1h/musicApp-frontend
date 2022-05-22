import { $instance } from ".";
import { ITrack } from "../types/models";
import { IFetchTracksResponse } from "../types/tracks";




export class TracksService {

    static async fetchTracks(): Promise<IFetchTracksResponse> {
        const { data } = await $instance.get('/tracks')
        console.log(777);
        return data
    }


}