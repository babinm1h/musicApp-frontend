import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrack } from "../../types/models";
import { IPlayerState } from "../../types/player";


const initialState: IPlayerState = {
    active: null,
    currentTime: 0,
    duration: 0,
    pause: false,
    volume: 50
}


const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        setPause(state, action: PayloadAction<boolean>) {
            state.pause = action.payload
        },

        setVolume(state, action: PayloadAction<number>) {
            state.volume = action.payload
        },

        setActive(state, action: PayloadAction<ITrack | null>) {
            state.currentTime = 0
            state.duration = 0
            state.active = action.payload
        },
        setDuration(state, action: PayloadAction<number>) {
            state.duration = action.payload
        },
        setCurrentTime(state, action: PayloadAction<number>) {
            state.currentTime = action.payload
        },


    },
    extraReducers: {}
})


export default playerSlice.reducer;

export const { setActive, setCurrentTime, setDuration, setPause, setVolume } = playerSlice.actions;