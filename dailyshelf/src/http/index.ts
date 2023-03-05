import axios from 'axios'
import { config } from 'process'

export const API_URL = 'http://127.0.0.1:8000/auth/'

const $api = axios.create({
    withCredentials: true,
    baseURL: `${API_URL}/token`
    }
)

$api.interceptors.request.use((config=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}))

// $api.interceptors.response.use((config)=>{ 
//     return config;},
//     async (async error => {
//         const originalRequest = error.config
//         if (error.response.status == 401){
//             try{
//                const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials:true})
//             localStorage.getItem('token', response.data.accessToken)
//             return $api.request(originalRequest)  
//             }catch(e){

//             }
           
//         }
//     })
// )



export default $api

function async(arg0: (error: any) => Promise<import("axios").AxiosResponse<any, any>> | undefined): ((error: any) => any) | null | undefined {
    throw new Error('Function not implemented.')
}
