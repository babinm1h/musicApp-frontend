import { ITrack } from "./models";


export interface ITracksState {
    isLoading: boolean
    tracks: ITrack[]
    totalCount: number
}


export enum TracksActionTypes {
    fetch_tracks = 'tracks/fetch_tracks'
}



export interface IFetchTracksResponse {
    totalCount: number
    tracks: ITrack[]
}