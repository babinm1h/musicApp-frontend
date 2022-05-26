import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../API/authService";
import { AuthActionTypes } from "../../types/auth";


export const loginThunk = createAsyncThunk(AuthActionTypes.login,
    async (payload: { email: string, password: string }, thunk) => {
        try {
            const data = await AuthService.login(payload.email, payload.password)
            return data

        } catch (err: any) {
            return thunk.rejectWithValue(err.response?.data.message)
        }
    })