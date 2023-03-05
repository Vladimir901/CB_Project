import { IUser } from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthServise from "../servises/AuthServise";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";

class Store{
    user = {} as IUser
    isAuth = false
    isLoading = false

    constructor(){
        makeAutoObservable(this)
    }

    setAuth(bool: boolean){
        this.isAuth = bool
    }

    setUser(user: IUser){
        this.user = user;
    }

    async login(username: string, password: string){
        try{
            const response = await AuthServise.login(username, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)

        } catch(e){
            console.log(e.response?.data?.message)
        }
    }
    async reg(username: string, password: string){
        try{
            const response = await AuthServise.reg(username, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch(e){
            console.log(e.response?.data?.message)
        }
    }
    async logout(){
        try{
            const response = await AuthServise.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch(e){
            console.log(e.response?.data?.message)
        }
    }
    setLoading(bool:boolean){
        this.isLoading = true

    }
    async checkAuth(){
        this.setLoading(true)
        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials:true})
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        }catch (e){
            console.log(e.response?.data?.message)
            
    }finally{
        this.setLoading(false)
    }
}}

export default Store