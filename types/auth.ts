import { IUser } from "./DBmodels";



export interface IAuthState {
    user: IUser | null
    isInitializing: boolean
    loginError: string
    registerError: string
    isSubmitting: boolean
}


export enum AuthActionTypes {
    login = 'auth/login',
    get_me = "auth/get_me",
    register = 'auth/register'
}


export interface IAuthResponse {
    token: string
    data: IUser
}

