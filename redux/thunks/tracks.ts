import { createAsyncThunk } from "@reduxjs/toolkit";
import { TracksService } from "../../API/tracksService";
import { TracksActionTypes } from "../../types/tracks";



export const fetchTracks = createAsyncThunk(TracksActionTypes.fetch_tracks,
    async (_, thunk) => {
        try {
            const data = await TracksService.fetchTracks()
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })