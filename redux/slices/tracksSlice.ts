import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFetchTracksResponse, ITracksState } from "../../types/tracks";
import { fetchTracks } from "../thunks/tracks";

const initialState: ITracksState = {
    isLoading: true,
    tracks: [],
    totalCount: 0,
    error: ""
}


const tracksSlice = createSlice({
    name: "tracks",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTracks.fulfilled.type]: (state, action: PayloadAction<IFetchTracksResponse>) => {
            state.tracks = action.payload.tracks
            state.totalCount = action.payload.totalCount
            state.isLoading = false
            state.error = ""
        },
        [fetchTracks.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchTracks.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})


export default tracksSlice.reducer;