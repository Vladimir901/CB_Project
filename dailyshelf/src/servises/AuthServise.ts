import { Axios, AxiosResponse } from "axios"
import $api from "../http"
import { AuthResponse } from "../models/response/AuthResponse"

export default class AuthServise{
    static async login(username:string, password:string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>("/singin", {username, password})
    }

    static async reg(username:string, password:string): Promise<AxiosResponse<AuthResponse>>{
        return $api.post<AuthResponse>("/singin", {username, password})
    }

    static async logout(): Promise<void>{
        return $api.post("/logout")
    }
}