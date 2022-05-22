import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFetchTracksResponse, ITracksState } from "../../types/tracks";
import { fetchTracks } from "../thunks/tracks";

const initialState: ITracksState = {
    isLoading: true,
    tracks: [],
    totalCount: 0
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
        },
        [fetchTracks.fulfilled.type]: (state, action) => {
            state.isLoading = true
        },
        [fetchTracks.fulfilled.type]: (state, action) => {
            state.isLoading = false
        },
    }
})


export default tracksSlice.reducer;