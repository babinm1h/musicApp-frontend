import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITrack } from "../../types/DBmodels"
import { ITrackPageState } from "../../types/trackPage"
import { fetchOneTrack } from "../thunks/trackPage"



const initialState: ITrackPageState = {
    track: null,
    error: ""
}


const trackPageSlice = createSlice({
    initialState,
    name: "trackpage",
    reducers: {},
    extraReducers: {
        [fetchOneTrack.fulfilled.type]: (state, action: PayloadAction<ITrack>) => {
            state.track = action.payload
            state.error = ""
        },
        [fetchOneTrack.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    }
})


export default trackPageSlice.reducer;