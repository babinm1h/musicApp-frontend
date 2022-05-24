import { ITrack } from "./DBmodels";


export interface ITracksState {
    isLoading: boolean
    tracks: ITrack[]
    error: string
    totalCount: number
}


export enum TracksActionTypes {
    fetch_tracks = 'tracks/fetch_tracks'
}



export interface IFetchTracksResponse {
    totalCount: number
    tracks: ITrack[]
}