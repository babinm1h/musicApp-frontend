import { IUser } from "./DBmodels";



export interface IAuthState {
    user: IUser | null
    isInitializing: boolean
    loginError: string
}


export enum AuthActionTypes {
    login = 'auth/login'
}