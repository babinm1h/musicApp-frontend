import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "../../types/auth";
import { IUser } from "../../types/DBmodels";
import { loginThunk } from "../thunks/auth";


const initialState: IAuthState = {
    user: null,
    isInitializing: true,
    loginError: ""
}


const authSlice = createSlice({
    initialState,
    name: "auth",
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.loginError = ""
        },
        [loginThunk.pending.type]: (state, action) => {

        },
        [loginThunk.rejected.type]: (state, action) => {
            state.loginError = action.payload
        },
    }
})


export default authSlice.reducer;